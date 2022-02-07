import { Cart } from "src/cart/entities/cart.entity";
import { SubCategory } from "src/subcategory/entities/subcategory.entity";
import { Wishlist } from "src/wishlist/entities/wishlist.entity";
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { ProductImages } from "./productimages.entity";
import { ProductRatingByUser } from "./productrate.entity";

@Entity()
@Unique(['product_name'])
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn()
    product_id: number;

    @Column()
    product_name: string;

    @Column()
    product_rate: number;

    @Column()
    product_stock: number;

    @Column({default: 'imgs'})
    product_image: string;

    @Column({default: 0})
    product_rating: number;

    @Column({default: 0})
    product_ratingusercount: number;

    @Column()
    product_description: string;

    @Column({default: true})
    product_status: boolean;

    @ManyToOne(type=>SubCategory, subCategory=>subCategory.subCategory_id)
    subCategory_id: SubCategory;

    @OneToMany(type=>Cart, cart=>cart.cart_id)
    cart_id: Cart;

    @OneToMany(type=>Wishlist, wishlist=>wishlist.wishlist_id)
    wishlist_id: Wishlist;

    @OneToMany(type=>ProductImages, id=>id.product_image_id)
    product_image_id: ProductImages;

    @OneToMany(type=>ProductRatingByUser, rate=>rate.rating_id)
    raring_id: ProductRatingByUser;
}