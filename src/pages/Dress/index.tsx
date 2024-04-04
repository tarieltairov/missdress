import { FC } from 'react';
import BodyProducts from '../../components/BodyProducts';
import Container from '../../Layout/Container/Container';
import styles from './dress.module.scss';

const Dress: FC = () => {
	return (
		<div className={styles.dress}>
			<Container>
				{/* <ModalRegister /> */}
				<BodyProducts title='Платья' products={[]} />
			</Container>
		</div>
	);
};

export default Dress;
