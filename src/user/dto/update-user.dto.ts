import { PartialType } from "@nestjs/swagger";
import { IsMobilePhone, IsNotEmpty } from "class-validator";
import { createUserDto } from "./create-user.dto";

export class UpdateUserDto extends PartialType(createUserDto) {
    @IsNotEmpty()
    @IsMobilePhone()

    user_phone_number: string;
}