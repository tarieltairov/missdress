import { Space, Typography } from 'antd';
import styles from './about.module.scss';

import Socials from '../../components/Socials';
import Container from '../../Layout/Container/Container';
import ecology01 from './../../assets/img/about/bg01.png';
import ecology02 from './../../assets/img/about/bg02.png';
import ecology03 from './../../assets/img/about/bg03.png';
import bodyPositive_01 from './../../assets/img/about/choice01.png';
import bodyPositive_02 from './../../assets/img/about/choice02.png';
import mainImg from './../../assets/img/about/main-img.png';

const ecology = [ecology01, ecology02, ecology03];
const bodyPositive = [bodyPositive_01, bodyPositive_02];

const { Title, Text } = Typography;
const About = () => {
	return (
		<div className={styles.about}>
			<Container>
				<>
					<Space direction='vertical' className={styles.body}>
						<Title level={1} className={styles.title}>
							О нас. Кто мы?
						</Title>
						<Text className={styles.text}>
							Мы верим в мир, в котором у вас есть полная свобода быть собой без
							осуждения. Экспериментировать. Чтобы выразить себя. Быть смелым и
							воспринимать жизнь как необыкновенное приключение. Поэтому мы
							позаботились о том, чтобы у всех были равные шансы открыть для
							себя все удивительные вещи, на которые они способны. Мы
							существуем, чтобы дать вам уверенность быть тем, кем вы хотите
							быть.
						</Text>
						<Space
							direction='vertical'
							size={71}
							className={styles.newsWrapper}
						>
							<Space direction='vertical' size={71}>
								<div className={styles.mainImg}>
									<img src={mainImg} alt='' />
								</div>
								<Space
									direction='vertical'
									size={31}
									className={styles.blockText}
								>
									<Title level={2} className={styles.subtitle}>
										Выбор для всех
									</Title>
									<Text className={styles.text}>
										Наша аудитория (также известная как вы) удивительно
										уникальна, и мы делаем все возможное, чтобы помочь вам найти
										себя. Мы предлагаем наши бренды в более чем 30 размерах — и
										мы стремимся предоставить все размеры по одинаковой цене —
										поэтому вы можете быть уверены, что у нас есть идеальная
										вещь для вас.
									</Text>
								</Space>
							</Space>
							<Space.Compact
								block
								direction='vertical'
								className={styles.bodyPosBody}
							>
								<Space
									direction='horizontal'
									className={styles.bodyPositiveWrapper}
								>
									{bodyPositive.map(item => (
										<div className={styles.imgWrapper}>
											<img src={item} alt='' />
										</div>
									))}
								</Space>
								<Space
									direction='vertical'
									size={31}
									className={styles.blockText}
								>
									<Title level={2} className={styles.subtitle}>
										Бодипозитив
									</Title>
									<Text className={styles.text}>
										Для нас важно продвигать образ здорового тела – мы не
										стремимся соответствовать каким-либо стереотипам – поэтому
										мы работаем с более чем 200 моделями, которые представляют
										нашу аудиторию.
									</Text>
								</Space>
							</Space.Compact>
							<Space direction='vertical' size={71}>
								<Space
									direction='vertical'
									size={72}
									className={styles.newsBox}
								>
									{ecology.map(item => (
										<div className={styles.ecologyImgWrapper}>
											<img src={item} alt='' />
										</div>
									))}
								</Space>
								<Space
									direction='vertical'
									size={31}
									className={styles.blockText}
								>
									<Title level={2} className={styles.subtitle}>
										Экология
									</Title>
									<Text className={styles.text}>
										Мы поставили перед собой амбициозные цели по уменьшению
										воздействия, которое мы оказываем на планету, и мы всегда
										ищем новые способы стать лучше. Мы также прилагаем все
										усилия, чтобы животные не страдали из-за моды, и
										придерживаемся строгих правил в отношении источников
										материалов животного происхождения и производства продуктов
										без животных животных.
									</Text>
								</Space>
							</Space>
						</Space>
					</Space>
					<Socials />
				</>
			</Container>
		</div>
	);
};

export default About;
