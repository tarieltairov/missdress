import { FC } from 'react';
import News from '../../components/News';
import Socials from '../../components/Socials';
import styles from './newsPage.module.scss';
const NewsPage: FC = () => {
	return (
		<div className={styles.newsPage}>
			<News />
			<Socials />
		</div>
	);
};

export default NewsPage;
