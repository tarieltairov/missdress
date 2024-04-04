import { Col, Divider, Row, Typography } from 'antd';
import MyOrdersCard from '../../components/MyOrdersCard';
import styles from './myOrders.module.scss';
import img from '../../assets/img/product/01.png';
type Props = {};

export enum DeliveredStatus {
    delivered = 'Доставлено',
    sent = 'Отправлено',
    canceled = 'Отменено',
}

export interface IOrders {
    orderNumber: string;
    orderDelivered:
        | DeliveredStatus.canceled
        | DeliveredStatus.delivered
        | DeliveredStatus.sent;
    date: string;
    images: string[];
    price: number;
}

const MyOrders = ({}: Props) => {
    const orders: IOrders[] = [
        {
            orderNumber: '2032a231d',
            orderDelivered: DeliveredStatus.delivered,
            date: '23.01.2022',
            images: [img, img, img, img, img],
            price: 2000,
        },
        {
            orderNumber: '2032a231d',
            orderDelivered: DeliveredStatus.sent,
            date: '23.01.2022',
            images: [img, img, img, img, img],
            price: 2000,
        },
        {
            orderNumber: '2032a231d',
            orderDelivered: DeliveredStatus.canceled,
            date: '23.01.2022',
            images: [img, img, img, img, img],
            price: 2000,
        },
    ];

    return (
        <div className={styles.orders}>
            <Row>
                <Col span={18}>
                    <Row>
                        <Col>
                            <Typography.Title>Мои заказы</Typography.Title>
                        </Col>
                        <Divider
                            style={{
                                border: '.5px solid black',
                                margin: '0 0',
                            }}
                        />
                    </Row>
                </Col>
            </Row>

            <Row>
                {orders.map((item, index) => (
                    <Col key={index} span={24}>
                        <MyOrdersCard {...item} id={index} />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default MyOrders;
