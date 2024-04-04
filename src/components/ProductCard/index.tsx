import { Rate, Space } from 'antd';
import Text from 'antd/es/typography/Text';
import Title from 'antd/es/typography/Title';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import ImgCard from '../ImgCard';
import { ReactComponent as ColorIcon } from './../../assets/img/icons/colors.svg';
import { ReactComponent as FavIcon } from './../../assets/img/icons/like.svg';
import { ReactComponent as RateStar } from './../../assets/img/icons/star.svg';

import styles from './productCard.module.scss';
interface IProductCardProps {
	id: number;
	img: string;
	title: string;
	oldPrice: number;
	currentPrice: number;
	colors: number;
	sizes: string;
}
const customIcons: Record<number, React.ReactNode> = {
	1: <RateStar />,
	2: <RateStar />,
	3: <RateStar />,
	4: <RateStar />,
	5: <RateStar />
};
const ProductCard: FC<IProductCardProps> = ({
	id,
	img,
	title,
	oldPrice,
	currentPrice,
	colors,
	sizes
}) => {
	return (
		<Link to={`/Products/${id}`} className={styles.card}>
			<ImgCard imgUrl={img} title={''} btnTitle={'Открыть'} />
			<Space.Compact direction='vertical' className={styles.cardContent}>
				<Space.Compact direction='horizontal' className={styles.cardHeader}>
					<Space.Compact direction='horizontal' className={styles.cardPrice}>
						<Text delete className={styles.oldPrice}>
							{oldPrice}
						</Text>
						<Text className={styles.currentPrice}>{currentPrice}</Text>
					</Space.Compact>
					<Space.Compact direction='horizontal' className={styles.colors}>
						<ColorIcon className={styles.colorIcon} />
						{colors}
					</Space.Compact>
				</Space.Compact>
				<Title level={3} className={styles.cardTitle}>
					{title}
				</Title>
				<Text className={styles.cardSize}>Размер {sizes}</Text>
				<Space.Compact className={styles.cardActions}>
					<Rate
						className={styles.ratingProduct}
						character={({ index }: { index: number }) => customIcons[index + 1]}
					/>
					<button className={styles.favorIcon}>
						<FavIcon fill='currentColor' />
					</button>
				</Space.Compact>
			</Space.Compact>
		</Link>
	);
};

export default ProductCard;
