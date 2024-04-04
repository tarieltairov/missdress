import { Col, Divider, Row, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { DeliveredStatus } from '../MyOrders';
import styles from './myOrdersDetail.module.scss';
import img from '../../assets/img/product/01.png';
import MyOrdersDetailCard from '../../components/MyOrdersDetail';
import useMediaQuery from '../../hooks/useMediaQuery';

type Props = {};

interface IProductCard {
    amountOfLine: number;
    img: string;
    title: string;
    oldPrice: number;
    currentPrice: number;
    color: string;
    size: string;
    article: string;
}

interface IUserInfo {
    phone: string;
    lastName: string;
    firstName: string;
    city: string;
    country: string;
}
interface IOrders {
    id: string;
    orderDelivered:
        | DeliveredStatus.canceled
        | DeliveredStatus.delivered
        | DeliveredStatus.sent;
    items: IProductCard[];
    userInfo: IUserInfo;
}

const MyOrdersDetail = (props: Props) => {
    const [orders, setOrders] = useState<null | IOrders>(null);
    const matches = useMediaQuery('(max-width: 768px)');

    const fetchOrder = async (): Promise<any> => {
        const response = await new Promise<IOrders>((resolve) => {
            setTimeout(
                () =>
                    resolve({
                        id: '2032a231d',
                        orderDelivered: DeliveredStatus.delivered,
                        items: [
                            {
                                amountOfLine: 5,
                                img,
                                title: 'somePlatye',
                                oldPrice: 6010,
                                article: 'Платье AD1290',
                                currentPrice: 5900,
                                color: 'Бежевый',
                                size: '29-49',
                            },
                            {
                                amountOfLine: 5,
                                img,
                                title: 'somePlatye 2',
                                oldPrice: 6010,
                                article: 'Платье AD1290',
                                currentPrice: 5900,
                                color: 'Бежевый',
                                size: '29-49',
                            },
                            {
                                amountOfLine: 5,
                                img,
                                title: 'somePlatye 3',
                                oldPrice: 6010,
                                article: 'Платье AD1290',
                                currentPrice: 5900,
                                color: 'Бежевый',
                                size: '29-49',
                            },
                            {
                                amountOfLine: 5,
                                img,
                                title: 'somePlatye 4',
                                oldPrice: 6010,
                                article: 'Платье AD1290',
                                currentPrice: 5900,
                                color: 'Бежевый',
                                size: '29-49',
                            },
                        ],
                        userInfo: {
                            firstName: 'Marine',
                            lastName: 'Moal',
                            phone: '+996712345678',
                            country: 'Кыргызстан',
                            city: 'г. Бишкек',
                        },
                    }),
                1000
            );
        });

        setOrders(response);
    };

    useEffect(() => {
        fetchOrder();
    }, []);

    return (
        <div className={styles.orders}>
            <Row>
                {matches && (
                    <Col span={24}>
                        <Typography.Title
                            style={{ textAlign: 'center', margin: '20px 0' }}
                            level={3}
                        >
                            Мои заказы
                        </Typography.Title>
                    </Col>
                )}

                <Col className={styles.orders_header}>
                    <Typography.Text className={styles.orders_header__order}>
                        Заказ №{orders?.id}
                    </Typography.Text>
                    <Typography.Text
                        className={styles.orders_header__delivered}
                    >
                        {orders?.orderDelivered}
                    </Typography.Text>
                </Col>
            </Row>

            <Row>
                {orders?.items.map((item) => (
                    <Col span={24}>
                        <MyOrdersDetailCard {...item} />
                    </Col>
                ))}
            </Row>

            {!matches && (
                <Divider
                    style={{
                        border: '.5px solid black',
                    }}
                />
            )}

            <Row>
                <Col xs={24} xl={12}>
                    <Row>
                        <Col>
                            <Row gutter={[0, 24]}>
                                <Col span={24}>
                                    <Row>
                                        <Col span={12}>
                                            <Typography.Text>
                                                Получатель :
                                            </Typography.Text>
                                        </Col>
                                        <Col>
                                            <Typography.Text
                                                style={{ textAlign: 'left' }}
                                            >
                                                {orders &&
                                                    `${orders?.userInfo.firstName} ${orders?.userInfo.lastName}`}
                                            </Typography.Text>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={24}>
                                    <Row>
                                        <Col span={12}></Col>
                                        <Col>
                                            <Typography.Text>
                                                {orders &&
                                                    orders?.userInfo.phone}
                                            </Typography.Text>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={24}>
                                    <Row>
                                        <Col span={12}>
                                            <Typography.Text>
                                                Адрес доставки:
                                            </Typography.Text>
                                        </Col>
                                        <Col>
                                            <Typography.Text>
                                                {orders &&
                                                    `${orders?.userInfo.country}, ${orders?.userInfo.city}`}
                                            </Typography.Text>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={24}>
                                    <Row>
                                        <Col span={12}>
                                            <Typography.Text>
                                                Итого к оплате:
                                            </Typography.Text>
                                        </Col>
                                        <Col>
                                            <Typography.Text>
                                                20000 c.
                                            </Typography.Text>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default MyOrdersDetail;
