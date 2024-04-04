import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './menuBurger.module.scss';

interface INavs {
	title: string;
	href: string;
}

const navs: INavs[] = [
	{ title: 'Товары', href: '/Products' },
	{ title: 'О нас', href: '/About' },
	{ title: 'Новости', href: '/News' },
	{ title: 'Доставка', href: '/Delivery' },
	{ title: 'Контакты', href: '/Contacts' },
	{ title: 'Избранное', href: '/Favorite' }
];
interface IMenuBurgerProps {
	active: boolean;
	setActive: any;
}

const MenuBurger: FC<IMenuBurgerProps> = ({ active, setActive }) => {
	const clickOutside = () => {
		setActive(!active);
		document.body.style.overflow = `${active ? 'visible' : 'hidden'}`;
	};

	return (
		<div
			className={`${active ? styles.menuWrapperActive : styles.menuWrapper}
			`}
			onClick={clickOutside}
		>
			<div className={styles.blur}>
				<ul className={styles.menu} onClick={e => e.stopPropagation()}>
					{navs.map(nav => (
						<li key={nav.title} className={styles.menuItem}>
							<NavLink
								to={nav.href}
								className={styles.link}
								onClick={() => setActive(!active)}
							>
								{nav.title}
							</NavLink>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default MenuBurger;
