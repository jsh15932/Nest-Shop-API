import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminController } from './admin.controller';
import { AdminRepository } from './admin.repository';
import { AdminService } from './admin.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([AdminRepository]),
    PassportModule.register({defaultStrategy: 'jwt'})
  ],
  controllers: [AdminController],
  providers: [AdminService]
})
export class AdminModule {}
