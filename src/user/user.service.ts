import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateInfoDto, createUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
    ) {}
    createUser(createUserDto: createUserDto): Promise<{}> {
        return this.userRepository.createUser(createUserDto);
    }

    addInfo(createInfoDto: CreateInfoDto, user: User) {
        return this.userRepository.addInfo(createInfoDto, user);
    }

    updatePrimaryInfo(id: string, user: User) {
        return this.userRepository.update
    }

}
