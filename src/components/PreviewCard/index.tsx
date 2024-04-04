import { Typography } from 'antd';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import ImgCard from '../ImgCard';
import styles from './previewCard.module.scss';

const { Title } = Typography;

interface IPreviewCardProps {
	title: string;
	imgUrl: string;
}

const PreviewCard: FC<IPreviewCardProps> = ({ title, imgUrl }) => {
	return (
		<div className={styles.card}>
			<Link to={''}>
				<ImgCard imgUrl={imgUrl} btnTitle='Смотреть' title={title} />
			</Link>
			<Link to={''} className={styles.title}>
				{title}
			</Link>
		</div>
	);
};

export default PreviewCard;
