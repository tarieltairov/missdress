import styles from "./cart.module.scss";
import Container from "../../Layout/Container/Container";
import BodyProducts from "../../components/BodyProducts";
import { useAppSelector } from "../../core/hooks/redux";
import ButtonUI from "../../components/UI/Button";
import { useNavigate } from "react-router";

const Cart = () => {
  const { cartProducts } = useAppSelector((state) => state.user);
  const navigte = useNavigate();
  return (
    <div className={styles.cart_wrapper}>
      <Container>
        <BodyProducts title="Корзина" products={cartProducts} />
      </Container>
      {!!cartProducts.length && (
        <div>
          <ButtonUI onClick={() => navigte("/ordering")}>
            Перейти к оформлению{" "}
          </ButtonUI>
        </div>
      )}
    </div>
  );
};

export default Cart;
