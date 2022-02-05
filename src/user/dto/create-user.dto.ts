import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class createUserDto {
    @IsNotEmpty()
    user_id: string;

    @IsNotEmpty()
    @MinLength(5)
    user_password: string;

    @IsNotEmpty()
    @IsEmail()
    user_email: string;

    user_pwd: string;
    user_salt: string;
}

export class CreateInfoDto {
    @IsNotEmpty()
    phone_number: string;

    @IsNotEmpty()
    bank_account: string;

    @IsNotEmpty()
    @MaxLength(20)
    depositor: string;
}