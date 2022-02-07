import { Body, Controller, Post, UploadedFile, UseGuards, UseInterceptors, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBasicAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { extname } from 'path/posix';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './entities/category.entity';

@Controller('category')
@ApiTags('Category')
@ApiBasicAuth()
@UseGuards(AuthGuard())
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @Post('createCategory')
    @UseInterceptors(FileInterceptor('category_image', {storage:diskStorage ({
        destination: "./ImageCategory",
        filename: (req, file, cb) => {
            const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
            return cb(null, `${randomName}${extname(file.originalname)}`);
        }
    })}))
    @ApiConsumes('multipart/form-data')
    createCategory(@Body(ValidationPipe) createCategoryDto: CreateCategoryDto,
    @UploadedFile() file: Express.Multer.File): Promise<Category> {
        return this.categoryService.createCategory(createCategoryDto,file);
    }
}

