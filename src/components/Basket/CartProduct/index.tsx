import { Row, Typography } from "antd";
import styles from "../basket.module.scss";
import { IProduct } from "../../../core/utils/products";
import { FC, useEffect, useState } from "react";
import { ReactComponent as MinusIcon } from "./../../../assets/img/icons/minus.svg";
import { ReactComponent as PlusIcon } from "./../../../assets/img/icons/plus.svg";
import { ReactComponent as RemoveIcon } from "./../../../assets/img/icons/removeCart.svg";
const { Title, Text } = Typography;

interface IItem {
  item: IProduct;
  setCartsProduct: (item: IProduct[]) => void;
}
const CartProduct: FC<IItem> = ({ item, setCartsProduct }) => {
  const [price, setPrice] = useState(item.price);
  const [count, setCount] = useState<number>(1);

  const changeCount = (type: string) => {
    setCount((prev) => (type === "+" ? prev + 1 : prev > 1 ? prev - 1 : prev));
  };

  const removeCart = () => {
    const updatedCart = JSON.parse(
      localStorage.getItem("cartProducts") || ""
    ).filter((card: IProduct) => card.id !== item.id);
    localStorage.setItem("cartProducts", JSON.stringify(updatedCart));
    window.location.reload();
  };

  useEffect(() => {
    setPrice(item.price * count);
  }, [count]);

  return (
    <Row className={styles.cartItem} onClick={(e) => e.stopPropagation()}>
      <div className={styles.cartImg}>
        <img src={item.image} alt="cart-image" />
      </div>
      <Row className={styles.cartInfo}>
        <Row className={styles.cartHeader}>
          <Title level={3} className={styles.title}>
            {item.title}
          </Title>
          <button className={styles.removeItem} onClick={removeCart}>
            <RemoveIcon />
          </button>
        </Row>
        <Row className={styles.properties}>
          <Text className={`${styles.size} ${styles.props}`}>
            Размер: {item.size}
          </Text>
          <Text className={`${styles.color} ${styles.props}`}>
            Ткань : {item.textile}
          </Text>
          <Text className={`${styles.color} ${styles.props}`}>
            Фасон : {item.style}
          </Text>
        </Row>
        <Row className={styles.cartFooter}>
          <Row className={styles.countWrapper}>
            <button
              className={`${styles.countIcon} ${styles.countMain}`}
              onClick={() => changeCount("-")}
            >
              <MinusIcon />
            </button>
            <Title level={5} className={`${styles.count} ${styles.countMain}`}>
              {count}
            </Title>
            <button
              className={`${styles.countIcon} ${styles.countMain}`}
              onClick={() => changeCount("+")}
            >
              <PlusIcon />
            </button>
          </Row>
          <Title level={4} className={styles.price}>
            {price}
          </Title>
        </Row>
      </Row>
    </Row>
  );
};

export default CartProduct;
