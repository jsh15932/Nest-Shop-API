import { EntityRepository, Repository } from "typeorm";
import { Order } from "./entities/order.entity";
import { v4 as uuidv4 } from "uuid";
import { CreateOrderDto } from "./dto/create-order.dto";
import { User } from "src/user/entities/user.entity";

@EntityRepository(Order)
export class OrderRepository extends Repository<Order> {
    async createOrder(createOrderDto: CreateOrderDto, userId: User): Promise<string> {
        const orderId = uuidv4();
        const order = new Order();
        order.order_id = orderId;
        let uid = userId.user_id as any;
        order.user_id = uid;
        order.order_total = 0;
        try {
            if(await order.save()) {
                console.log(orderId);
                return orderId;
            }
            else {
                return null;
            }
        } catch (err) {
            console.log(err);
        }
    }
}