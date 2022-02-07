import { User } from "src/user/entities/user.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";

@Entity()
export class Order extends BaseEntity {
    @PrimaryColumn()
    order_id: string;

    @ManyToOne(type=>User, user=>user.user_id)
    user_id: User;

    @Column({type: Date, default: ()=>'CURRENT_DATE'})
    order_date: Date;

    @Column()
    order_total: number;

    @Column({default:0})
    order_status: number;
}