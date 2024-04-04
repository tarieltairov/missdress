import { useState } from 'react';
import { SimilarSlider } from '../../components/SwiperSlider';
import styles from './cart.module.scss';

type Props = {};

const Cart = (props: Props) => {
    const [cart, setCart] = useState([]);
    return (
        <div className={styles.cart_wrapper}>
            {cart.length ? (
                <div></div>
            ) : (
                <div>
                    <div className={styles.empty_cart}>
                        <h1>Ваша корзина пуста</h1>
                    </div>

                    <div>{/* <SimilarSlider /> */}</div>
                </div>
            )}
        </div>
    );
};

export default Cart;
