import { BaseEntity, Column, Entity, ManyToOne, OneToMany, OrderByCondition, PrimaryColumn, PrimaryGeneratedColumn, Unique } from "typeorm";
import * as bcrypt from "bcrypt";
import { Address } from "cluster";
import { Cart } from "src/cart/entities/cart.entity";

@Entity('users')
@Unique(['user_email'])
export class User extends BaseEntity {
    @Column()
    @PrimaryColumn()
    user_id: string;

    @Column()
    user_password: string;

    @Column()
    user_email: string;

    @Column()
    user_salt: string;

    @Column()
    user_pwd: string;

    @OneToMany(type => Cart, cart => cart.cart_id)
    cart_id: Cart;

    @OneToMany(type => Order, order => order.order_id)
    order_id: OrderByCondition;

    @OneToMany(type => AddAddress, address => address.address_id)
    address_id: Address;

    async checkPassword(password: string): Promise<boolean> {
        console.log(this.user_email + " Pwd");
        console.log(password + " " + this.user_salt);
        const hash = await bcrypt.hash(password, this.user_salt);
        return hash === this.user_password;
    }
}

@Entity('user_address')
export class AddAddress extends BaseEntity {
    @PrimaryGeneratedColumn()
    address_id: number;

    @Column()
    address_phone_number: string;

    @Column()
    address_bank_account: string;

    @Column()
    address_depositor: string;

    @Column({ default: true })
    address_nationality: boolean;
    
    @ManyToOne(type => User, user => user.user_id)
    user_id: User;
}