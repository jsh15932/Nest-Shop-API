import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CartModule } from './cart/cart.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { SubcategoryModule } from './subcategory/subcategory.module';

@Module({
  imports: [UserModule, CartModule, AuthModule, AdminModule, OrderModule, ProductModule, CategoryModule, SubcategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
