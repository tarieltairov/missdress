import { Space, Typography } from 'antd';
import Container from '../../Layout/Container/Container';
import { MainSlider } from '../SwiperSlider';
import ButtonUI from '../UI/Button';
import styles from './intro.module.scss';

const { Title, Text } = Typography;

const Intro = () => {
	return (
		<div className={styles.intro}>
			<Space direction='vertical' className={styles.discount} size={5}>
				<Title className={styles.discountTitle}>Скидки до 50%!</Title>
				<Text className={styles.discountText}>
					Успей приобрести товар по выгодной цене!
				</Text>
			</Space>
			<MainSlider />
			<Container>
				<div className={styles.introContainer}>
					<div className={styles.introContent}>
						<Title className={styles.titleContainer}>
							<Title level={1} className={styles.introTitle}>
								Скидки до 50%!
							</Title>
							<Title level={1} className={styles.introTitle}>
								Успей приобрести товар по выгодной цене!
							</Title>
						</Title>
						<div className={styles.btnWrapper}>
							<ButtonUI>Подробнее</ButtonUI>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Intro;
