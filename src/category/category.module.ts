import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryController } from './category.controller';
import { CategoryRepository } from './category.repository';
import { CategoryService } from './category.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([CategoryRepository]),
    PassportModule.register({defaultStrategy:'jwt'})
  ],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule {}
