import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryRepository } from './category.repository';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(CategoryRepository)
        private categoryRepository: CategoryRepository
    ) {}

    createCategory(createCategoryDto: CreateCategoryDto, file: Express.Multer.File): Promise<Category> {
        return this.categoryRepository.createCategory(createCategoryDto, file);
    }
}
