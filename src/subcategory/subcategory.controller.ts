import { Body, Controller, Post, UploadedFile, UseGuards, UseInterceptors, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { extname } from 'path/posix';
import { CreateSubCategoryDto } from './dto/create-subcategory.dto';
import { SubCategory } from './entities/subcategory.entity';
import { SubCategoryService } from './subcategory.service';

@Controller('subcategory')
@ApiTags('SubCategory')
@ApiBearerAuth()
@UseGuards(AuthGuard())
export class SubCategoryController {
    constructor(private readonly subCategoryService: SubCategoryService) {}
    
    @Post('createSubCategory')
    @UseInterceptors(FileInterceptor('file', {storage: diskStorage ({
        destination: "./ImageSubCategory",
        filename: (req, file, cb) => {
            const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
            return cb(null, `${randomName}${extname(file.originalname)}`);
        }
    })}))
    @ApiConsumes('multipart/form-data')
    CreateSubCategory(@Body(ValidationPipe) createSubCategoryDto: CreateSubCategoryDto,
    @UploadedFile() file: Express.Multer.File): Promise<SubCategory> {
        return this.subCategoryService.createSubCategory(createSubCategoryDto, file);
    }
}
