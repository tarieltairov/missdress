import Title from 'antd/es/typography/Title';
import { FC } from 'react';
import Container from '../../Layout/Container/Container';
import ProductCard from '../ProductCard';
import ButtonUI from '../UI/Button';
import img01 from './../../assets/img/mainPage/categories/01.png';
import styles from './sectionProducts.module.scss';
interface ISectionProductsProps {
	sectionTitle: string;
}

const SectionProducts: FC<ISectionProductsProps> = ({ sectionTitle }) => {
	return (
		<section className={styles.section}>
			<Container>
				<>
					<Title level={2} className={styles.sectionTitle}>
						{sectionTitle}
					</Title>
					<div className={styles.sectionBody}>
						<ProductCard
							id={1}
							colors={5}
							currentPrice={2000}
							img={img01}
							oldPrice={6000}
							sizes='25-60'
							title='Envy Look All Season Skirt'
						/>
						<ProductCard
							id={2}
							colors={5}
							currentPrice={2000}
							img={
								'https://m.media-amazon.com/images/I/51o-CqrxOgL._UL1056_.jpg'
							}
							oldPrice={6000}
							sizes='25-60'
							title='Sakinnurs'
						/>
					</div>
					<div className={styles.btnWrapper}>
						<ButtonUI>Смотреть все хиты</ButtonUI>
					</div>
				</>
			</Container>
		</section>
	);
};

export default SectionProducts;
