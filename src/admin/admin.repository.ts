import { InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { Admin } from "./entities/admin.entity";

@EntityRepository(Admin)
export class AdminRepository extends Repository<Admin> {
    async createAdmin(creaateAdminDto:CreateAdminDto) {
        const {admin_password, admin_username} = creaateAdminDto;
        const admin = new Admin();
        admin.admin_username = admin_username;
        admin.admin_password = admin_password;
        try {
            await admin.save();
            return {message: "회원가입 성공"};
        } catch (err) {
            console.log(err);
            throw new InternalServerErrorException(err.details);
        }
    }
}