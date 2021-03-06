import { Product } from "src/product/entities/product.entity";

export interface OrderViewInterface {
    order_date: Date;
    order_total: number;
    order_status: number;
    product_id: Product;
}