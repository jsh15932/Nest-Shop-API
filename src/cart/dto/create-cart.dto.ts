import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Product } from "src/product/entities/product.entity";
import { User } from "src/user/entities/user.entity";

export class CreateCartDto {
    @IsNotEmpty()
    @IsNumber()
    product_id: Product;

    @IsNotEmpty()
    @IsNumber()
    cart_quantity: number;

    @IsNotEmpty()
    @IsString()
    user_id: User;
}