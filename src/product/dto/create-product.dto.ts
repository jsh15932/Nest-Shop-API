import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    product_name: string;

    @IsNumber()
    @IsNotEmpty()
    product_rate: number;

    @IsNumber()
    @IsNotEmpty()
    product_stock: number;

    @IsNumber()
    @IsNotEmpty()
    subCategory_id: SubCategory;

    @IsNumber()
    @IsNotEmpty()
    product_description: string;
}

export class ProductRatingDto {
    rating_count: number;
}

export class ProductImageDto {
    @ApiProperty({ type: 'string', format: 'binary', isArray: true })
    product_image_image: any;
}