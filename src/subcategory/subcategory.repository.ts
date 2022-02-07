import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateSubCategoryDto } from "./dto/create-subcategory.dto";
import { SubCategory } from "./entities/subcategory.entity";

@EntityRepository(SubCategory)
export class SubCategoryRepository extends Repository<SubCategory> {
    async createSubCategory(createSubCategoryDto: CreateSubCategoryDto, file: Express.Multer.File): Promise<SubCategory> {
        const { subCategory_name, category_id } = createSubCategoryDto;
        const subCategory = new SubCategory;
        subCategory.subCategory_name = subCategory_name;
        subCategory.category_id = category_id;
        subCategory.subCategory_image = file.path;
        try {
            return await subCategory.save();
        } catch (err) {
            if(err.code === "23505") {
                throw new ConflictException('하위 카테고리가 이미 존재합니다.');
            }
            else {
                throw new InternalServerErrorException();
            }
        }
    }
}