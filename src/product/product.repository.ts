import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateProductDto } from "./dto/create-product.dto";
import { Product } from "./entities/product.entity";

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
    async createProduct(productDto: CreateProductDto, file: Express.Multer.File): Promise<Product> {
        const { product_name, product_rate, subCategory_id, product_stock, product_description } = productDto;
        try {
            const product = new Product();
            product.product_name = product_name;
            product.product_rate = product_rate;
            product.subCategory_id = subCategory_id;
            product.product_stock = product_stock;
            product.product_description = product_description;
            product.product_image = file.path;
            const insert = await product.save();
            if(insert) {
                return insert;
            }
            else {
                throw new InternalServerErrorException("생성 불가");
            }
        } catch (err) {
            if(err.code === "23505") {
                throw new ConflictException("상품이 이미 존재합니다.");
            }
            else {
                console.log(err);
                throw new InternalServerErrorException();
            }
        }
    }
}
