import Container from '../../Layout/Container/Container';
import SubscribeForm from '../SubscribeForm';
import styles from './subscribeSection.module.scss';

const Subscribe = () => {
	return (
		<section className={styles.subscribe}>
			<Container>
				<div className={styles.formWrapper}>
					<SubscribeForm />
				</div>
			</Container>
		</section>
	);
};

export default Subscribe;
