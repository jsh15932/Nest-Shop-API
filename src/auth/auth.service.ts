import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'src/user/user.repository';
import { CreateAuthDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
        @InjectRepository(AdminRepository)
        private adminRepository: AdminRepository,
        private jwtService: JwtService
    ) {}

    singIn(createAuthDto: CreateAuthDto) {
        return this.userLoginCheck(createAuthDto);
    }

    async userLoginCheck(createAuthDto: CreateAuthDto) {
        
    }
}
