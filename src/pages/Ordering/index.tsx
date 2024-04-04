import { Col, Divider, Row } from 'antd';
import { OrderingCard, OrderingForm } from '../../components/Ordering';

import ButtonUI from '../../components/UI/Button';
import Container from '../../Layout/Container/Container';
import styles from './ordering.module.scss';

type Props = {};

const Ordering = (props: Props) => {
    return (
        <Container>
            <div className={styles.ordering}>
                <Row gutter={[24, 24]} justify={'space-between'}>
                    <Col xs={24} xl={15}>
                        <OrderingForm />
                    </Col>
                    <Col xs={24} xl={8}>
                        <div className={styles.ordering_total}>
                            <h1>Итого</h1>
                            <Divider
                                style={{
                                    border: '0.5px solid #372E24',
                                }}
                            />

                            <Row
                                style={{
                                    padding: '10px 0',
                                }}
                                gutter={[24, 24]}
                            >
                                <Col span={24}>
                                    <Row justify={'space-between'}>
                                        <Col>Общая сумма</Col>
                                        <Col>22500 c.</Col>
                                    </Row>
                                </Col>
                                <Col span={24}>
                                    <Row justify={'space-between'}>
                                        <Col>Скидка</Col>
                                        <Col>22500 c.</Col>
                                    </Row>
                                </Col>
                                <Col span={24}>
                                    <Row justify={'space-between'}>
                                        <Col>Итог</Col>
                                        <Col>22500 c.</Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Divider
                                style={{
                                    border: '0.5px solid #372E24',
                                }}
                            />
                            <div>
                                <ButtonUI height='75px'>
                                    Оформить заказ
                                </ButtonUI>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row style={{ marginTop: '40px' }} gutter={[0, 24]}>
                    <Col xs={24} xl={18} xxl={15}>
                        <OrderingCard
                            color='Бежевый'
                            article={' Платья AD857'}
                            currentPrice={9000}
                            img={
                                'https://cdn-1.azazie.com/upimg/h65/f6/ac/d144bf9d40a9a93833707a83d0c4f6ac.jpg.webp'
                            }
                            amount={2}
                            amountItemInLine={5}
                            sizes={'545-4545'}
                            title={'Modnye jeans'}
                            oldPrice={6000}
                            id={5}
                        />
                    </Col>
                    <Col xs={24} xl={18} xxl={15}>
                        <OrderingCard
                            color='Бежевый'
                            article={' Платья AD857'}
                            currentPrice={9000}
                            img={
                                'https://cdn-1.azazie.com/upimg/h65/f6/ac/d144bf9d40a9a93833707a83d0c4f6ac.jpg.webp'
                            }
                            amount={2}
                            amountItemInLine={5}
                            sizes={'545-4545'}
                            title={'Modnye jeans'}
                            oldPrice={6000}
                            id={6}
                        />
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default Ordering;
