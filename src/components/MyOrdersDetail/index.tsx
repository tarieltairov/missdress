import { Col, Divider, Row, Typography } from 'antd';
import styles from './myOrdersDetail.module.scss';
import useMediaQuery from '../../hooks/useMediaQuery';

type Props = {
    title: string;
    article: string;
    size: string;
    color: string;
    amountOfLine: number;
    currentPrice: number;
    oldPrice: number;
    img: string;
};

const MyOrdersDetailCard = ({
    title,
    article,
    size,
    color,
    amountOfLine,
    currentPrice,
    oldPrice,
    img,
}: Props) => {
    const matches = useMediaQuery('(max-width: 768px)');

    return (
        <Row className={styles.card}>
            {!matches && (
                <Col span={24}>
                    <Divider
                        style={{
                            border: '0.5px solid black',
                        }}
                    />
                </Col>
            )}
            <Col span={24}>
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
                    <Col flex={1}>
                        <Row justify='space-between'>
                            <Col>
                                <Row
                                    style={{
                                        flexDirection: 'column',
                                    }}
                                    className={styles.card_info}
                                >
                                    <Col>
                                        <h1 className={styles.title}>
                                            {title}
                                        </h1>
                                    </Col>{' '}
                                    <Col className={styles.order_info}>
                                        <Typography
                                            className={styles.order_info_item}
                                            style={{
                                                marginRight: '15px',
                                            }}
                                        >
                                            Артикул:
                                        </Typography>
                                        <Typography
                                            className={
                                                styles.order_info_subitem
                                            }
                                        >
                                            {article}
                                        </Typography>
                                    </Col>
                                    <Col className={styles.order_info}>
                                        <Typography
                                            className={styles.order_info_item}
                                            style={{ marginRight: '15px' }}
                                        >
                                            Размер:
                                        </Typography>
                                        <Typography
                                            className={
                                                styles.order_info_subitem
                                            }
                                        >
                                            {size}
                                        </Typography>
                                    </Col>
                                    <Col className={styles.order_info}>
                                        <Typography
                                            style={{ marginRight: '15px' }}
                                            className={styles.order_info_item}
                                        >
                                            Цвет:
                                        </Typography>
                                        <Typography
                                            className={
                                                styles.order_info_subitem
                                            }
                                        >
                                            {color}
                                        </Typography>
                                    </Col>
                                    <Col className={styles.order_info}>
                                        <Typography
                                            className={styles.order_info_item}
                                            style={{ marginRight: '15px' }}
                                        >
                                            Количество товара в линейке:
                                        </Typography>
                                        <Typography
                                            className={
                                                styles.order_info_subitem
                                            }
                                        >
                                            {amountOfLine}
                                        </Typography>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row
                                    style={{
                                        flexDirection: 'column',
                                        height: '100%',
                                    }}
                                    align='bottom'
                                    justify='space-between'
                                >
                                    <Col>
                                        <Row
                                            className={styles.price}
                                            style={{ flexDirection: 'column' }}
                                        >
                                            <Col
                                                className={styles.currentPrice}
                                            >
                                                {currentPrice}
                                            </Col>
                                            <Col className={styles.oldPrice}>
                                                {oldPrice}
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default MyOrdersDetailCard;
