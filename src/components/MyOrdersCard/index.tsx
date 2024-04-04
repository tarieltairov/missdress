import { Col, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { DeliveredStatus } from '../../pages/MyOrders';
import styles from './myOrdersCard.module.scss';

type Props = {
    orderNumber: string;
    orderDelivered:
        | DeliveredStatus.canceled
        | DeliveredStatus.delivered
        | DeliveredStatus.sent;
    date: string;
    images: string[];
    price: number;
    id: number;
};

const MyOrdersCard = ({
    orderDelivered,
    orderNumber,
    date,
    images,
    price,
    id,
}: Props) => {
    return (
        <div className={styles.card}>
            <Link to={`${id}`}>
                <Row gutter={[0, 40]}>
                    <Col span={24}>
                        <Row justify={'space-between'}>
                            <Col className={styles.order}>
                                Заказ № {orderNumber}{' '}
                                <Typography.Text className={styles.delivered}>
                                    {orderDelivered}
                                </Typography.Text>
                            </Col>
                            <Col>
                                <Typography.Text className={styles.date}>
                                    {date}
                                </Typography.Text>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={24}>
                        <Row justify={'space-between'}>
                            <Col md={16}>
                                <Row gutter={[12, 0]}>
                                    {images
                                        .slice(0, 3)
                                        .map((pictures, index) => (
                                            <Col key={index} span={6}>
                                                <img
                                                    width={'100%'}
                                                    height={'100%'}
                                                    className={styles.picture}
                                                    src={pictures}
                                                    alt='order picture'
                                                />
                                            </Col>
                                        ))}

                                    <Col span={6} flex={1}>
                                        <Row
                                            justify={'center'}
                                            align='middle'
                                            style={{
                                                height: '100%',
                                                backgroundColor: '#F1DAC5',
                                            }}
                                        >
                                            <Col>
                                                <Typography.Title
                                                    className={styles.date}
                                                >
                                                    +{images.length - 3}
                                                </Typography.Title>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={8} style={{ width: '100%' }}>
                                <Row
                                    style={{
                                        height: '100%',
                                    }}
                                    className={styles.price_wrapper}
                                    align={'bottom'}
                                    justify='end'
                                >
                                    <Col>
                                        <Typography.Text
                                            className={styles.price}
                                        >
                                            {price} с.
                                        </Typography.Text>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Link>
        </div>
    );
};

export default MyOrdersCard;
