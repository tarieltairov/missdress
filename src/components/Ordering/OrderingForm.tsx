import { Col, Divider, Row } from "antd";
import { useForm } from "react-hook-form";
import ButtonUI from "../UI/Button";
import styles from "./ordering.module.scss";
import { useAppDispatch, useAppSelector } from "../../core/hooks/redux";
import { setOrderer } from "../../core/redux/dataSlice";
import { useState } from "react";

type FormData = {
  fullName: string;
  street: string;
  phoneNumber: string;
  country: string;
  city: string;
};

const OrderingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const dispatch = useAppDispatch();
  const [isSave, setIsSave] = useState(false);
  const { orderer } = useAppSelector((s) => s.user);

  const someshit = (data: FormData) => {
    dispatch(setOrderer(data));
    setIsSave(true);
  };

  const onEdit = () => {
    setIsSave(false);
  };

  return (
    <form onSubmit={handleSubmit(someshit)} className={styles.form}>
      <div className={styles.form_header}>
        <h1>Оформление заказа</h1>
        <Divider
          style={{
            border: "0.5px solid #372E24",
          }}
        />
      </div>
      {isSave ? (
        <div>
          <h2 style={{ fontSize: "40px" }}>Адрес доставки</h2>
          <Row justify={"space-between"} gutter={[0, 16]}>
            {Object.values(orderer).map((i, index) => (
              <Col xs={24} xl={11} key={index}>
                <p
                  style={{
                    width: "100%",
                    fontSize: "20px",
                    margin: "20px 0",
                    textDecoration: "underline",
                  }}
                >
                  {i}
                </p>
              </Col>
            ))}
          </Row>
          <Col xs={24} xl={11} onClick={onEdit}>
            <ButtonUI height="75px" type="submit">
              Редактировать
            </ButtonUI>
          </Col>
        </div>
      ) : (
        <Row justify={"space-between"} gutter={[0, 16]}>
          <Col xs={24} xl={11}>
            <input
              type="text"
              style={{ height: "75px", background: "#F1DAC5" }}
              placeholder="Ваше ФИО"
              {...register("fullName", { required: true })}
              className={styles.input}
            />
            {errors.fullName && <p>Введите ваше ФИО</p>}
          </Col>
          <Col xs={24} xl={11}>
            <input
              type="text"
              style={{ height: "75px", background: "#F1DAC5" }}
              placeholder="Улица"
              {...register("street", { required: true })}
              className={styles.input}
            />
            {errors.street && <p>Введите вашу улицу</p>}
          </Col>
          <Col xs={24} xl={11}>
            <input
              type="text"
              style={{ height: "75px", background: "#F1DAC5" }}
              placeholder="Номер телефона"
              {...register("phoneNumber", { required: true })}
              className={styles.input}
            />
            {errors.phoneNumber && <p>Введите ваш номер телефона</p>}
          </Col>
          <Col xs={24} xl={11}>
            <input
              type="text"
              style={{ height: "75px", background: "#F1DAC5" }}
              placeholder="Страна"
              {...register("country", { required: true })}
              className={styles.input}
            />
            {errors.country && <p>Введите вашу страну</p>}
          </Col>
          <Col xs={24} xl={11}>
            <input
              type="text"
              style={{ height: "75px", background: "#F1DAC5" }}
              placeholder="Город"
              {...register("city", { required: true })}
              className={styles.input}
            />
            {errors.city && <p>Введите ваш город</p>}
          </Col>
          <Col xs={24} xl={11}>
            <ButtonUI height="75px" type="submit">
              Сохранить
            </ButtonUI>
          </Col>
        </Row>
      )}
    </form>
  );
};

export default OrderingForm;
