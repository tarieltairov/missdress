import Container from '../../Layout/Container/Container';
import PreviewCard from '../PreviewCard';
import img01 from './../../assets/img/mainPage/categories/01.png';
import img02 from './../../assets/img/mainPage/categories/02.png';
import img03 from './../../assets/img/mainPage/categories/03.png';
import styles from './categories.module.scss';

interface ICategories {
	id: number;
	title: string;
	imgUrl: string;
}

const categories: ICategories[] = [
	{ id: 1, title: 'Джинсы', imgUrl: img01 },
	{ id: 2, title: 'Платья', imgUrl: img02 },
	{ id: 3, title: 'Юбки', imgUrl: img03 }
];

const Categories = () => {
	return (
		<section className={styles.categories}>
			<Container>
				<div className={styles.body}>
					{categories.map(cat => (
						<PreviewCard key={cat.id} title={cat.title} imgUrl={cat.imgUrl} />
					))}
				</div>
			</Container>
		</section>
	);
};

export default Categories;
