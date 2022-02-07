import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductImages } from './entities/productimages.entity';
import { ProductRatingByUser } from './entities/productrate.entity';
import { ProductController } from './product.controller';
import { ProductRepository } from './product.repository';
import { ProductService } from './product.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductRepository, ProductRatingByUser, ProductImages]),
    PassportModule.register({defaultStrategy: 'jwt'})
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
