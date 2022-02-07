import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { Category } from "./entities/category.entity";

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {
    async createCategory(categoryDto: CreateCategoryDto, file: Express.Multer.File): Promise<Category> {
        const { category_name } = categoryDto;
        const category = new Category();
        category.category_name = category_name;
        category.category_image = file.path;
        try {
            const res = await category.save();
            return res;
        } catch (err) {
            if(err.code === "23505") {
                throw new ConflictException('카테고리가 이미 존재합니다.');
            }
            else {
                throw new InternalServerErrorException();
            }
            console.log(err);
        }
    }
}