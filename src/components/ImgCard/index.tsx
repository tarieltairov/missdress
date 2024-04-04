import { FC } from 'react';
import ButtonUI from '../UI/Button';
import styles from './imgCard.module.scss';
interface IImgCardProps {
	imgUrl: string;
	title: string;
	btnTitle: string;
}

const ImgCard: FC<IImgCardProps> = ({ imgUrl, title, btnTitle }) => {
	return (
		<div className={styles.imgWrapper}>
			<img src={imgUrl} alt={title} />
			<div className={styles.btnWrapper}>
				<ButtonUI type='button' disabled={false} width='200px'>
					{btnTitle}
				</ButtonUI>
			</div>
		</div>
	);
};

export default ImgCard;
