import { Typography } from 'antd';
import { FC } from 'react';
import styles from './delivery.module.scss';
const { Title } = Typography;

const Delivery: FC = () => {
	return (
		<div>
			<Title level={1} className={styles.title}>
				Доставка
			</Title>
			<div className={styles.text}>
				<p>
					После того, как Вы сделали заказ, наши менеджеры связываются с Вами
					для подтверждения заказа (обработка заказов происходит с понедельника
					по пятницу с 10:00 до 20:00)
				</p>
				<p>Заказ без оплаты остается в резерве 3 рабочих дня.</p>
			</div>
		</div>
	);
};
export default Delivery;
