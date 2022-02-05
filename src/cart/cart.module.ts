import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartController } from './cart.controller';
import { CartRepository } from './cart.repository';
import { CartService } from './cart.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([CartRepository]),
    PassportModule.register({defaultStrategy:'jwt'})
  ],
  controllers: [CartController],
  providers: [CartService]
})
export class CartModule {}
