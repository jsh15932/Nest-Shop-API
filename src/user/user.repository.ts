import { EntityRepository, Repository } from "typeorm";
import { CreateAddressDto, createUserDto } from "./dto/create-user.dto";
import { AddAddress, User } from "./entities/user.entity";
import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcrypt";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";

@EntityRepository()
export class UserRepository extends Repository<User> {
    async createUser(createUserDto: createUserDto): Promise<{}> {
        const { user_id, user_password, user_email, user_pwd, user_salt } = createUserDto;
        try {
            const user = new User();
            user.user_id = uuidv4();
            user.user_password = uuidv4();
            user.user_email = user_email;
            const salt = await bcrypt.genSalt();
            user.user_salt = salt;
            const hasPassword = await bcrypt.hash(user_password, salt);
            const user_pwd = hasPassword;
            const registration = await user.save();
            return { id: registration.user_id };
        } catch (err) {
            if(err.code === "23505") {
                throw new ConflictException('이미 사용중인 이메일입니다.');
            }
            else {
                console.log(err);
                throw new InternalServerErrorException();
            }
        }
    }

    async addAddress(createAddressDto: CreateAddressDto, user: User) {
        const { address_phone_number, address_bank_account, address_depositor } = createAddressDto;
        const address = new AddAddress();
        address.address_phone_number = address_phone_number;
        address.address_bank_account = address_bank_account;
        address.address_depositor = address_depositor;
        address.user_id = user.user_id as any;

        try {
            const res = await address.save();
            return { status: true, message: "Address Added", id: res.address_id };
        } catch (err) {
            console.log(err);
        }
    }
}