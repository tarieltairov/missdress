import { FC } from 'react';
import BodyProducts from '../../components/BodyProducts';
import Container from '../../Layout/Container/Container';
import styles from './favorite.module.scss';

const Favorite: FC = () => {
	return (
		<div className={styles.favorite}>
			<Container>
				<BodyProducts title='Избранное' products={[]} />
			</Container>
		</div>
	);
};

export default Favorite;
