import { Space, Typography } from 'antd';
import Container from '../../Layout/Container/Container';
import styles from './advantages.module.scss';

const { Title, Text } = Typography;

const Advantages = () => {
	return (
		<section className={styles.advantages}>
			<Container>
				<>
					<div className={styles.title}>Наши преимущества</div>
					<Space direction='horizontal' size={25} className={styles.advBody}>
						<div className={styles.advItem}>
							<Title level={5} className={styles.itemTitle}>
								Гарантия обмена и возврата товара
							</Title>
							<Text className={styles.itemText}>
								100% гарантия возврата товара
							</Text>
						</div>
						<div className={styles.advItem}>
							<Title level={5} className={styles.itemTitle}>
								Профессиональная консультация
							</Title>
							<Text className={styles.itemText}>
								Постоянная обратная связь с клиентами
							</Text>
						</div>
						<div className={styles.advItem}>
							<Title level={5} className={styles.itemTitle}>
								Акции для покупателей
							</Title>
							<Text className={styles.itemText}>
								Промокод для клиентов, акции на новые товары
							</Text>
						</div>
						<div className={styles.advItem}>
							<Title level={5} className={styles.itemTitle}>
								Возможность оплаты при получении
							</Title>
							<Text className={styles.itemText}>
								Возможность оплаты наложенным платежем
							</Text>
						</div>
					</Space>
				</>
			</Container>
		</section>
	);
};

export default Advantages;
