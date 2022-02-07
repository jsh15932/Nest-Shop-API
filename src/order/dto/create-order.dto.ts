import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/user/entities/user.entity";
import { CartArrayDto } from "./cart-array.dto";

export class CreateOrderDto {
    @ApiProperty()
    user_id: User;

    cart_list: Array<CartArrayDto>;
}