import { EntityRepository, Repository } from "typeorm";
import { createUserDto } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";
import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcrypt";

@EntityRepository()
export class UserRepository extends Repository<User> {
    async createUser(createUserDto: createUserDto): Promise<{}> {
        const { user_id, user_password, user_email, user_pwd, user_salt} = createUserDto;
        try {

        } catch (err) {

        }
    }
}