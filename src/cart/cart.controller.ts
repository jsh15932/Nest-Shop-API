import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { GetUser } from 'src/user/dto/get-user-decorator';
import { User } from 'src/user/entities/user.entity';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Controller('cart')
@UseGuards(AuthGuard())
@ApiTags('Cart')
export class CartController {
    constructor(private readonly cartService: CartService) {}

    @Post('createCart')
    createCart(@Body() createCartDto: CreateCartDto, @GetUser() UserId: User) {
        return this.cartService.createCart(createCartDto, UserId);
    }

    @Get()
    findAll() {
        return this.cartService.findAll();
    }

    @Get('viewCart/:id')
    viewCart(@Param('id') id: string, @GetUser() UserId: User) {
        return this.cartService.viewCart(id, UserId);
    }

    // @Patch('updateCart/:id')
    // updateCart(@Param('id') id: string, @Body() UpdateCartDto: CreateCartDto) {
    //     return this.cartService.updateCart(id, UpdateCartDto);
    // }
}
