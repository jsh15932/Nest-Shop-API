import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAddressDto, createUserDto } from './dto/create-user.dto';
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

    addAddress(createAddressDto: CreateAddressDto, user: User) {
        return this.userRepository.addAddress(createAddressDto, user);
    }

    updatePrimaryAddress(id: string, user: User) {
        return this.userRepository.update
    }
}
