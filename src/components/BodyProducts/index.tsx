import { Space, Typography } from 'antd';
import { FC } from 'react';
import BreadCrumbs from '../BreadCrumbs';
import ProductCard from '../ProductCard';
import Socials from '../Socials';
import SortDropDown from '../SortDropdown';
import PaginationUI from '../UI/Pagination';
import styles from './bodyProducts.module.scss';

interface IBodyProducts {
	title: string;
	products: [];
}
const { Title } = Typography;

const BodyProducts: FC<IBodyProducts> = ({ title, products }) => {
	return (
		<>
			<BreadCrumbs />
			<div className={styles.productsHeader}>
				<Title level={1} className={styles.title}>
					{title}
				</Title>
				<SortDropDown />
			</div>
			<Space className={styles.body}>
				<ProductCard
					currentPrice={50000}
					colors={3}
					img={
						'https://cdn.shopify.com/s/files/1/0594/1506/8881/products/5849_1_Dolcezza-Red-Sweetheart-Maxi-Dress.jpg?v=1675244209&width=680'
					}
					oldPrice={2000}
					sizes={'20-65'}
					title='Choper Shoulder Frill Vent Dress'
					id={2}
				/>
				<ProductCard
					currentPrice={50000}
					colors={3}
					img={
						'https://cdn.shopify.com/s/files/1/0594/1506/8881/products/5849_1_Dolcezza-Red-Sweetheart-Maxi-Dress.jpg?v=1675244209&width=680'
					}
					oldPrice={2000}
					sizes={'20-65'}
					title='Choper Shoulder Frill Vent Dress'
					id={2}
				/>
				<ProductCard
					currentPrice={50000}
					colors={3}
					img={
						'https://cdn.shopify.com/s/files/1/0594/1506/8881/products/5849_1_Dolcezza-Red-Sweetheart-Maxi-Dress.jpg?v=1675244209&width=680'
					}
					oldPrice={2000}
					sizes={'20-65'}
					title='Choper Shoulder Frill Vent Dress'
					id={2}
				/>

				<ProductCard
					currentPrice={50000}
					colors={3}
					img={
						'https://cdn.shopify.com/s/files/1/0594/1506/8881/products/5849_1_Dolcezza-Red-Sweetheart-Maxi-Dress.jpg?v=1675244209&width=680'
					}
					oldPrice={2000}
					sizes={'20-65'}
					title='Choper Shoulder Frill Vent Dress'
					id={2}
				/>
				<ProductCard
					currentPrice={50000}
					colors={3}
					img={
						'https://cdn.shopify.com/s/files/1/0594/1506/8881/products/5849_1_Dolcezza-Red-Sweetheart-Maxi-Dress.jpg?v=1675244209&width=680'
					}
					oldPrice={2000}
					sizes={'20-65'}
					title='Choper Shoulder Frill Vent Dress'
					id={2}
				/>
			</Space>
			<PaginationUI />
			<Socials />
		</>
	);
};

export default BodyProducts;
