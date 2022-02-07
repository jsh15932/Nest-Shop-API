import { SubCategory } from "src/subcategory/entities/subcategory.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['category_name'])
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    category_id: number;

    @Column()
    category_name: string;

    @Column()
    category_image: string;

    @OneToMany(type=>SubCategory, subCategory=>subCategory.category_id)
    subCategory_id: SubCategory;
}