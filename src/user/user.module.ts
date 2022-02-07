import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddAddress } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository, AddAddress]),
    PassportModule.register({defaultStrategy:'jwt'})
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
