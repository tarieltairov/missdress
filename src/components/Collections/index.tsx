import { Space, Typography } from 'antd';
import Container from '../../Layout/Container/Container';
import fallCollection from './../../assets/img/mainPage/collection/fall.png';
import springCollection from './../../assets/img/mainPage/collection/spring.png';
import summerCollection from './../../assets/img/mainPage/collection/summer.png';
import winterCollection from './../../assets/img/mainPage/collection/winter.png';
import styles from './collection.module.scss';

interface ICollections {
	title: string;
	imgUrl: string;
}
const { Title } = Typography;

const collections: ICollections[] = [
	{ title: 'Зима', imgUrl: winterCollection },
	{ title: 'Весна', imgUrl: springCollection },
	{ title: 'Лето', imgUrl: summerCollection },
	{ title: 'Осень', imgUrl: fallCollection }
];

const Collections = () => {
	return (
		<section className={styles.collection}>
			<Container>
				<>
					<h3 className={styles.title}>Коллекция</h3>
					<div className={styles.collectionBody}>
						{collections.map(collection => (
							<Space.Compact
								direction='horizontal'
								block
								className={styles.collectionItem}
							>
								<div className={styles.collectionImg}>
									<img src={collection.imgUrl} alt='' />
								</div>
								<Title className={styles.label} level={3}>
									{collection.title}
								</Title>
							</Space.Compact>
						))}
					</div>
				</>
			</Container>
		</section>
	);
};

export default Collections;
