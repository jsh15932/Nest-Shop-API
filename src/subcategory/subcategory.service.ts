import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSubCategoryDto } from './dto/create-subcategory.dto';
import { SubCategory } from './entities/subcategory.entity';
import { SubCategoryRepository } from './subcategory.repository';

@Injectable()
export class SubCategoryService {
    constructor(
        @InjectRepository(SubCategoryRepository)
        private subCategoryRepository:SubCategoryRepository
    ) {}

    createSubCategory(createSubCategoryDto: CreateSubCategoryDto, file: Express.Multer.File): Promise<SubCategory> {
        return this.subCategoryRepository.createSubCategory(createSubCategoryDto, file);
    }
}
