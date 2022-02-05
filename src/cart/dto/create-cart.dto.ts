import { IsNotEmpty, IsNumber, IsString } from "class-validator";
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