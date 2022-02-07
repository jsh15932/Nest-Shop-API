import { Body, Controller, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { editFileName } from 'src/common/file-upload';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
import { ProductService } from './product.service';

@Controller('product')
@ApiTags('Product')
@ApiBearerAuth()
@UseGuards(AuthGuard())
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Post('createProduct')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: "./ImageProduct",
            filename: editFileName
        })
    }))
    @ApiConsumes('multipart/form-data')
    createProduct(@Body() createProductDto: CreateProductDto,
    @UploadedFile() file: Express.Multer.File
    ): Promise<Product> {
        return this.productService.createProduct(createProductDto, file);
    }
}
