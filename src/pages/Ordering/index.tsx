import { Col, Divider, Row } from "antd";
import { OrderingCard, OrderingForm } from "../../components/Ordering";

import ButtonUI from "../../components/UI/Button";
import Container from "../../Layout/Container/Container";
import styles from "./ordering.module.scss";
import { useAppSelector } from "../../core/hooks/redux";

const Ordering = () => {
  const { cartProducts } = useAppSelector((s) => s.user);
  const { orderer } = useAppSelector((s) => s.user);
  return (
    <Container>
      <div className={styles.ordering}>
        <Row gutter={[24, 24]} justify={"space-between"}>
          <Col xs={24} xl={15}>
            {orderer.fullName ? (
              <div>
                <h1 style={{ fontSize: "30px" }}>Адрес доставки</h1>
                <div>
                  {Object.values(orderer).map((i) => (
                    <p
                      style={{
                        fontSize: "20px",
                        margin: "20px 0",
                      }}
                    >
                      {i}
                    </p>
                  ))}
                </div>
              </div>
            ) : (
              <OrderingForm />
            )}
          </Col>
          <Col xs={24} xl={8}>
            <div className={styles.ordering_total}>
              <h1>Итого</h1>
              <Divider
                style={{
                  border: "0.5px solid #372E24",
                }}
              />

              <Row
                style={{
                  padding: "10px 0",
                }}
                gutter={[24, 24]}
              >
                <Col span={24}>
                  <Row justify={"space-between"}>
                    <Col>Общая сумма</Col>
                    <Col>22500 c.</Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row justify={"space-between"}>
                    <Col>Скидка</Col>
                    <Col>22500 c.</Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row justify={"space-between"}>
                    <Col>Итог</Col>
                    <Col>22500 c.</Col>
                  </Row>
                </Col>
              </Row>
              <Divider
                style={{
                  border: "0.5px solid #372E24",
                }}
              />
              <div>
                <ButtonUI height="75px">Оформить заказ</ButtonUI>
              </div>
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: "40px" }} gutter={[0, 24]}>
          {cartProducts.map((i) => (
            <Col xs={24} xl={18} xxl={15} key={i.id}>
              <OrderingCard
                color="Бежевый"
                article={i.vendorCode}
                currentPrice={i.price}
                img={i.image}
                amount={1}
                amountItemInLine={i.numberInline}
                sizes={i.size}
                title={i.title}
                oldPrice={i.oldPrice}
                id={i.id}
              />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Ordering;
