import { Category } from "src/category/entities/category.entity";
import { Product } from "src/product/entities/product.entity";
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['subCategory_name'])
export class SubCategory extends BaseEntity {
    @PrimaryGeneratedColumn()
    subCategory_id: number;

    @Column()
    subCategory_name: string;

    @ManyToOne(type=>Category, category=>category.subCategory_id)
    category_id: Category;

    @OneToMany(type=>Product, product=>product.subCategory_id)
    product_id: Product;

    @Column()
    subCategory_image: string;
}