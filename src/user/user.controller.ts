import { Body, Controller, Patch, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateAddressDto, createUserDto } from './dto/create-user.dto';
import { GetUser } from './dto/get-user-decorator';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
@ApiTags('User')
export class UserController {
    constructor(private readonly userService: UserService) {}
    
    @Post('createUser')
    createUser(@Body(ValidationPipe) createUserDto: createUserDto): Promise<{}> {
        return this.userService.createUser(createUserDto);
    }

    @UseGuards(AuthGuard())
    @ApiBearerAuth()
    @Post('addAddress')
    addAddress(@GetUser() user: User, @Body(ValidationPipe) createAddressDto: CreateAddressDto) {
        return this.userService.addAddress(createAddressDto, user);
    }
}
