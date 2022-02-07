import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
import { ProductRepository } from './product.repository';
import { Express } from 'express';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductRepository)
        private productRepository: ProductRepository
    ) {}

    createProduct(productDto: CreateProductDto, file: Express.Multer.File): Promise<Product> {
        return this.productRepository.createProduct(productDto, file);
    }
}
