import { Col, Row, Typography } from 'antd';
import styles from './ordering.module.scss';
import plus from '../../assets/img/plus.svg';
import minus from '../../assets/img/minus.svg';
import xCircle from '../../assets/img/x_circle.svg';
import OrderingButton from './OrderingButton';
import useMediaQuery from '../../hooks/useMediaQuery';

interface IOrderingCardProps {
    id: number;
    img: string;
    title: string;
    oldPrice: number;
    currentPrice: number;
    sizes: string;
    article: string;
    amountItemInLine: number;
    color: string;
    amount: number;
}

const OrderingCard = ({
    id,
    img,
    title,
    oldPrice,
    currentPrice,
    sizes,
    color,
    amount,
    article,
    amountItemInLine,
}: IOrderingCardProps) => {
    const mobile = useMediaQuery('(max-width: 768px)');

    return (
        <Row
            style={{
                backgroundColor: '#F1DAC5',
            }}
            className={styles.card}
            justify={'space-between'}
        >
            <Col span={20}>
                <Row gutter={[16, 16]}>
                    <Col>
                        <img
                            className={styles.image}
                            width={240}
                            height={320}
                            src={img}
                            alt={img}
                        />
                    </Col>
                    <Col>
                        <Row
                            style={{ flexDirection: 'column', height: '100%' }}
                            justify='space-between'
                        >
                            <Col>
                                <Row
                                    style={{ flexDirection: 'column' }}
                                    className={styles.card_info}
                                >
                                    <Col>
                                        <h1 className={styles.title}>
                                            {title}
                                        </h1>
                                    </Col>
                                    {!mobile && (
                                        <Col className={styles.ordering_info}>
                                            <Typography
                                                className={
                                                    styles.ordering_info_item
                                                }
                                                style={{
                                                    marginRight: '15px',
                                                }}
                                            >
                                                Артикул:
                                            </Typography>
                                            <Typography
                                                className={
                                                    styles.ordering_info_subitem
                                                }
                                            >
                                                {article}
                                            </Typography>
                                        </Col>
                                    )}
                                    <Col className={styles.ordering_info}>
                                        <Typography
                                            className={
                                                styles.ordering_info_item
                                            }
                                            style={{ marginRight: '15px' }}
                                        >
                                            Размер:
                                        </Typography>
                                        <Typography
                                            className={
                                                styles.ordering_info_subitem
                                            }
                                        >
                                            {sizes}
                                        </Typography>
                                    </Col>

                                    <Col className={styles.ordering_info}>
                                        <Typography
                                            style={{ marginRight: '15px' }}
                                            className={
                                                styles.ordering_info_item
                                            }
                                        >
                                            Цвет:
                                        </Typography>
                                        <Typography
                                            className={
                                                styles.ordering_info_subitem
                                            }
                                        >
                                            {color}
                                        </Typography>
                                    </Col>

                                    {!mobile && (
                                        <Col className={styles.ordering_info}>
                                            <Typography
                                                className={
                                                    styles.ordering_info_item
                                                }
                                                style={{ marginRight: '15px' }}
                                            >
                                                Количество товара в линейке:
                                            </Typography>
                                            <Typography
                                                className={
                                                    styles.ordering_info_subitem
                                                }
                                            >
                                                {amountItemInLine}
                                            </Typography>
                                        </Col>
                                    )}
                                </Row>
                            </Col>
                            <Col>
                                <Row gutter={[20, 20]} align='bottom'>
                                    <Col>
                                        <OrderingButton
                                            width='80px'
                                            height='80px'
                                            backgroundColor='#DBB593'
                                        >
                                            <img
                                                className={
                                                    styles.button_card_icons
                                                }
                                                src={minus}
                                                alt='minus'
                                            />
                                        </OrderingButton>
                                    </Col>

                                    <div className={styles.amount}>
                                        {amount}
                                    </div>
                                    <Col>
                                        <OrderingButton
                                            width='80px'
                                            height='80px'
                                            backgroundColor='#DBB593'
                                        >
                                            <img
                                                className={
                                                    styles.button_card_icons
                                                }
                                                src={plus}
                                                alt='plus'
                                            />
                                        </OrderingButton>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col span={4}>
                <Row
                    style={{ flexDirection: 'column', height: '100%' }}
                    align='bottom'
                    justify='space-between'
                >
                    <Col>
                        <OrderingButton
                            height='63px'
                            width='63px'
                            backgroundColor='inherit'
                        >
                            <img src={xCircle} alt='xCircle' />
                        </OrderingButton>
                    </Col>
                    <Col>
                        <Row
                            className={styles.price}
                            style={{ flexDirection: 'column' }}
                        >
                            <Col className={styles.currentPrice}>
                                {currentPrice}
                            </Col>
                            <Col className={styles.oldPrice}>{oldPrice}</Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default OrderingCard;
