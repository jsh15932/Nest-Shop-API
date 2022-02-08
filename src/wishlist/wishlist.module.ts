import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WishlistController } from './wishlist.controller';
import { WishlistRepository } from './wishlist.repository';
import { WishlistService } from './wishlist.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([WishlistRepository]),
    PassportModule.register({defaultStrategy:'jwt'})
  ],
  controllers: [WishlistController],
  providers: [WishlistService]
})
export class WishlistModule {}
