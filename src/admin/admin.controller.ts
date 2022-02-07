import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) {}

    @Post('adminRegistration')
    createAdmin(@Body(ValidationPipe) createAdminDto: CreateAdminDto) {
        return this.adminService.createAdmin(createAdminDto);
    }

    @Get()
    findAll() {
        return this.adminService.findAll();
    }
}
