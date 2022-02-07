import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminRepository } from './admin.repository';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(AdminRepository)
        private adminRepository:AdminRepository
    ) {}

    createAdmin(createAdminDto: CreateAdminDto) {
        return this.adminRepository.createAdmin(createAdminDto);
    }

    findAll() {

    }

    findOne(id: number) {

    }

    update(id: number, updateAdminDto: UpdateAdminDto) {

    }

    remove(id: number) {
        
    }
}
