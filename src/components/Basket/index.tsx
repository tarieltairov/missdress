import { Col, Row, Typography } from "antd";
import { FC, useEffect, useState } from "react";
import styles from "./basket.module.scss";
import { IProduct } from "../../core/utils/products";
import CartProduct from "./CartProduct";
import ButtonUI from "../UI/Button";
import { ReactComponent as Shop } from "../../assets/img/icons/shopping-bag.svg";
import { setCart } from "../../core/redux/dataSlice";
import { useAppDispatch } from "../../core/hooks/redux";

const Basket: FC = () => {
  const [cartProducts, setCartsProduct] = useState<IProduct[]>([]);
  const dispatch = useAppDispatch();
  const [isBlured, setIsBlured] = useState(false);

  useEffect(() => {
    const fromStorage = localStorage.getItem("cartProducts");
    fromStorage && setCartsProduct(JSON.parse(fromStorage));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const horizontalScrollPosition = window.pageYOffset;
      setIsBlured(horizontalScrollPosition === 0);
    };
    window.addEventListener("scroll", handleScroll);
    if (window.pageYOffset === 0) {
      setIsBlured(true);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles.blur} ${isBlured && styles.blured}`}
      onClick={() => dispatch(setCart(false))}
    >
      <Col className={styles.body}>
        {cartProducts.length ? (
          cartProducts.map((item) => (
            <CartProduct
              item={item}
              key={item.id}
              setCartsProduct={setCartsProduct}
            />
          ))
        ) : (
          <Row className={styles.cartItem}>
            <div className={styles.empty_cart}>
              <Shop className={styles.shopIcon} />
              <Typography.Text className={styles.text}>
                Ваша корзина пуста
              </Typography.Text>
              <ButtonUI>Продолжить покупки</ButtonUI>
            </div>
          </Row>
        )}
      </Col>
    </div>
  );
};

export default Basket;
