import { Col, Row, Typography } from 'antd';
import { FC } from 'react';
import { ReactComponent as MinusIcon } from './../../assets/img/icons/minus.svg';
import { ReactComponent as PlusIcon } from './../../assets/img/icons/plus.svg';
import { ReactComponent as RemoveIcon } from './../../assets/img/icons/removeCart.svg';
import styles from './basket.module.scss';

const { Title, Text } = Typography;

interface IBasketProps {
	setVisible: (visible: boolean) => void;
}

const Basket: FC<IBasketProps> = ({ setVisible }) => {
	return (
		<div className={styles.blur} onClick={() => setVisible(false)}>
			<Col className={styles.body}>
				<Row className={styles.cartItem} onClick={e => e.stopPropagation()}>
					<div className={styles.cartImg}>
						<img
							src='https://cdn.shopify.com/s/files/1/0594/1506/8881/products/5849_1_Dolcezza-Red-Sweetheart-Maxi-Dress.jpg?v=1675244209&width=680'
							alt=''
						/>
					</div>
					<Row className={styles.cartInfo}>
						<Row className={styles.cartHeader}>
							<Title level={3} className={styles.title}>
								Benito Kate Wrap Dress
							</Title>
							<button className={styles.removeItem}>
								<RemoveIcon />
							</button>
						</Row>
						<Row className={styles.properties}>
							<Text className={`${styles.size} ${styles.props}`}>
								Размер: 29-49
							</Text>
							<Text className={`${styles.color} ${styles.props}`}>
								Цвет: Бежевый
							</Text>
						</Row>
						<Row className={styles.cartFooter}>
							<Row className={styles.countWrapper}>
								<button className={`${styles.countIcon} ${styles.countMain}`}>
									<MinusIcon />
								</button>
								<Title
									level={5}
									className={`${styles.count} ${styles.countMain}`}
								>
									1
								</Title>
								<button className={`${styles.countIcon} ${styles.countMain}`}>
									<PlusIcon />
								</button>
							</Row>
							<Title level={4} className={styles.price}>
								5990
							</Title>
						</Row>
					</Row>
				</Row>
				<Row className={styles.cartItem} onClick={e => e.stopPropagation()}>
					<div className={styles.cartImg}>
						<img
							src='https://cdn.shopify.com/s/files/1/0594/1506/8881/products/5849_1_Dolcezza-Red-Sweetheart-Maxi-Dress.jpg?v=1675244209&width=680'
							alt=''
						/>
					</div>
					<Row className={styles.cartInfo}>
						<Row className={styles.cartHeader}>
							<Title level={3} className={styles.title}>
								Benito Kate Wrap Dress
							</Title>
							<button className={styles.removeItem}>
								<RemoveIcon />
							</button>
						</Row>
						<Row className={styles.properties}>
							<Text className={`${styles.size} ${styles.props}`}>
								Размер: 29-49
							</Text>
							<Text className={`${styles.color} ${styles.props}`}>
								Цвет: Бежевый
							</Text>
						</Row>
						<Row className={styles.cartFooter}>
							<Row className={styles.countWrapper}>
								<button className={`${styles.countIcon} ${styles.countMain}`}>
									<MinusIcon />
								</button>
								<Title
									level={5}
									className={`${styles.count} ${styles.countMain}`}
								>
									1
								</Title>
								<button className={`${styles.countIcon} ${styles.countMain}`}>
									<PlusIcon />
								</button>
							</Row>
							<Title level={4} className={styles.price}>
								5990
							</Title>
						</Row>
					</Row>
				</Row>
				<Row className={styles.cartItem} onClick={e => e.stopPropagation()}>
					<div className={styles.cartImg}>
						<img
							src='https://cdn.shopify.com/s/files/1/0594/1506/8881/products/5849_1_Dolcezza-Red-Sweetheart-Maxi-Dress.jpg?v=1675244209&width=680'
							alt=''
						/>
					</div>
					<Row className={styles.cartInfo}>
						<Row className={styles.cartHeader}>
							<Title level={3} className={styles.title}>
								Benito Kate Wrap Dress
							</Title>
							<button className={styles.removeItem}>
								<RemoveIcon />
							</button>
						</Row>
						<Row className={styles.properties}>
							<Text className={`${styles.size} ${styles.props}`}>
								Размер: 29-49
							</Text>
							<Text className={`${styles.color} ${styles.props}`}>
								Цвет: Бежевый
							</Text>
						</Row>
						<Row className={styles.cartFooter}>
							<Row className={styles.countWrapper}>
								<button className={`${styles.countIcon} ${styles.countMain}`}>
									<MinusIcon />
								</button>
								<Title
									level={5}
									className={`${styles.count} ${styles.countMain}`}
								>
									1
								</Title>
								<button className={`${styles.countIcon} ${styles.countMain}`}>
									<PlusIcon />
								</button>
							</Row>
							<Title level={4} className={styles.price}>
								5990
							</Title>
						</Row>
					</Row>
				</Row>
				<Row className={styles.cartItem} onClick={e => e.stopPropagation()}>
					<div className={styles.cartImg}>
						<img
							src='https://cdn.shopify.com/s/files/1/0594/1506/8881/products/5849_1_Dolcezza-Red-Sweetheart-Maxi-Dress.jpg?v=1675244209&width=680'
							alt=''
						/>
					</div>
					<Row className={styles.cartInfo}>
						<Row className={styles.cartHeader}>
							<Title level={3} className={styles.title}>
								Benito Kate Wrap Dress
							</Title>
							<button className={styles.removeItem}>
								<RemoveIcon />
							</button>
						</Row>
						<Row className={styles.properties}>
							<Text className={`${styles.size} ${styles.props}`}>
								Размер: 29-49
							</Text>
							<Text className={`${styles.color} ${styles.props}`}>
								Цвет: Бежевый
							</Text>
						</Row>
						<Row className={styles.cartFooter}>
							<Row className={styles.countWrapper}>
								<button className={`${styles.countIcon} ${styles.countMain}`}>
									<MinusIcon />
								</button>
								<Title
									level={5}
									className={`${styles.count} ${styles.countMain}`}
								>
									1
								</Title>
								<button className={`${styles.countIcon} ${styles.countMain}`}>
									<PlusIcon />
								</button>
							</Row>
							<Title level={4} className={styles.price}>
								5990
							</Title>
						</Row>
					</Row>
				</Row>
			</Col>
		</div>
	);
};

export default Basket;
