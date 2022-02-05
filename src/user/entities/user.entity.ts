import { BaseEntity, Column, Entity, ManyToOne, OneToMany, OrderByCondition, PrimaryColumn, PrimaryGeneratedColumn, Unique } from "typeorm";
import * as bcrypt from "bcrypt";

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

    @OneToMany(type => AddInfo, info => info.info_id)
    info_id: Info;

    async checkPassword(password: string): Promise<boolean> {
        console.log(this.user_email + " Pwd");
        console.log(password + " " + this.user_salt);
        const hash = await bcrypt.hash(password, this.user_salt);
        return hash === this.user_password;
    }
}

@Entity('user_info')
export class AddInfo extends BaseEntity {
    @PrimaryGeneratedColumn()
    info_id: number;

    @Column()
    info_phone_number: string;

    @Column()
    info_bank_account: string;

    @Column()
    info_depositor: string;

    @Column({ default: true })
    info_nationality: boolean;
    
    @ManyToOne(type => User, user => user.user_id)
    user_id: User;
}