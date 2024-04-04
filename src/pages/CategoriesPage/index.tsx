import BodyProducts from '../../components/BodyProducts';
import Container from '../../Layout/Container/Container';
import styles from './categoriesPage.module.scss';
const CategoriesPage = () => {
	return (
		<div className={styles.categoriesPage}>
			<Container>
				<BodyProducts title='Категории' products={[]} />
			</Container>
		</div>
	);
};

export default CategoriesPage;
