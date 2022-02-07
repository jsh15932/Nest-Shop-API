import { Product } from "src/product/entities/product.entity";
import { BaseEntity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export class OrderDetails extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    orderDetails_id: string;

    @Column()
    order_id: string;

    @ManyToOne(type=>Product, product=>product.product_id)
    product_id: Product;

    @Column()
    orderDetails_qty: number;

    @Column()
    orderDetails_total: number;
}