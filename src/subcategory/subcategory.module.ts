import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubCategoryRepository } from './subcategory.repository';
import { PassportModule } from '@nestjs/passport';
import { SubCategoryService } from './subcategory.service';
import { SubCategoryController } from './subcategory.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([SubCategoryRepository]),
    PassportModule.register({defaultStrategy:'jwt'}),
  ],
  providers: [SubCategoryService],
  controllers: [SubCategoryController]
})
export class SubcategoryModule {}
