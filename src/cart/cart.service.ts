import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { CartRepository } from './cart.repository';
import { CreateCartDto } from './dto/create-cart.dto';

@Injectable()
export class CartService {
    constructor(
        @InjectRepository(CartRepository)
        private cartRepository:CartRepository
    ) {}
    
    createCart(createCartDto: CreateCartDto, UserId:User) {
        return this.cartRepository.createCart(createCartDto, UserId);
    }

    findAll() {
        return '모든 카트 목록';
    }

    viewCart(id: string, UserId:User) {
        return this.cartRepository.viewCart(id, UserId);
    }

    // updateCart(id: string, UpdateCartDto: CreateCartDto) {
    //     return this.cartRepository.updateCart(id, UpdateCartDto);
    // }

    deleteCart(id: string) {
        return this.cartRepository.deleteCart(id);
    }
}
