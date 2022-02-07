import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { Strategy, ExtractJwt } from 'passport-jwt';
import { AdminRepository } from "src/admin/admin.repository";
import { UserRepository } from "src/user/user.repository";
import { JwtPayload } from "./payloadInterface/payload";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor (
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
        @InjectRepository(AdminRepository)
        private adminRepository: AdminRepository
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'topSecret51',
        });
    }

    async validate(payload: JwtPayload) {
        const { depositor } = payload;
        const adminResult = await this.adminRepository.findOne({ admin_username: depositor });
        const userResult = await this.userRepository.findOne({ where: [{ user_email: depositor }, { user_phone: depositor }, { depositor: depositor }] });
        if(adminResult) {
            return adminResult;
        }
        else if(userResult) {
            return userResult;
        }
        else {
            throw new UnauthorizedException('Not Found');
        }
    }
}