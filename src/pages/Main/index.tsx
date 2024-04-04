import { Space, Typography } from 'antd';

import styles from './main.module.scss';

import Advantages from '../../components/Advantages';
import Categories from '../../components/Categories/Categories';
import Collections from '../../components/Collections';
import Intro from '../../components/Intro';
import MenuBurger from '../../components/MenuBurger';
import News from '../../components/News';
import SectionProducts from '../../components/SectionProducts';
import Socials from '../../components/Socials';
import Subscribe from '../../components/SubscribeSection';

const { Title, Text } = Typography;

export const Main = () => {
	return (
		<>
			{/* <ModalRegister /> */}
			<Space direction='vertical' size={110} className={styles.mainWrapper}>
				<Intro />
				<Categories />
				<SectionProducts sectionTitle='Хит продаж' />
				<SectionProducts sectionTitle='Новинки' />
				<Collections />
				<Subscribe />
				<Advantages />
				<News />
				<Socials />
			</Space>
		</>
	);
};

export default Main;
