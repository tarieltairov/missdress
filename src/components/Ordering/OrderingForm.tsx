import { Col, Divider, Row } from "antd";
import { useForm } from "react-hook-form";
import ButtonUI from "../UI/Button";
import styles from "./ordering.module.scss";
import { useAppDispatch } from "../../core/hooks/redux";
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
  const { register, handleSubmit } = useForm<FormData>();
  const dispatch = useAppDispatch();
  const someshit = (data: any) => {
    dispatch(setOrderer(data));
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
      <Row justify={"space-between"} gutter={[0, 16]}>
        <Col xs={24} xl={11}>
          <input
            type="text"
            style={{ height: "75px", background: "#F1DAC5" }}
            placeholder="Ваше ФИО"
            {...register("fullName")}
            className={styles.input}
          />
        </Col>
        <Col xs={24} xl={11}>
          <input
            type="text"
            style={{ height: "75px", background: "#F1DAC5" }}
            placeholder="Улица"
            {...register("street")}
            className={styles.input}
          />
        </Col>
        <Col xs={24} xl={11}>
          <input
            type="text"
            style={{ height: "75px", background: "#F1DAC5" }}
            placeholder="Номер телефона"
            {...register("phoneNumber")}
            className={styles.input}
          />
        </Col>
        <Col xs={24} xl={11}>
          <input
            type="text"
            style={{ height: "75px", background: "#F1DAC5" }}
            placeholder="Страна"
            {...register("country")}
            className={styles.input}
          />
        </Col>
        <Col xs={24} xl={11}>
          <input
            type="text"
            style={{ height: "75px", background: "#F1DAC5" }}
            placeholder="Город"
            {...register("city")}
            className={styles.input}
          />
        </Col>
        <Col xs={24} xl={11}>
          <ButtonUI height="75px" type="submit">
            Сохранить
          </ButtonUI>
        </Col>
      </Row>
    </form>
  );
};

export default OrderingForm;
