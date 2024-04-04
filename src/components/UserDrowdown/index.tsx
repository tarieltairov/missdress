import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './userDropdown.module.scss';

interface IUserActions {
	title: string;
	href: string;
}

const userActions: IUserActions[] = [
	{ title: 'Профиль', href: '/profile' },
	{ title: 'Заказы', href: '/order' },
	{ title: 'Выйти', href: '/exit' }
];

const UserDrowdown: FC = () => {
	return (
		<ul className={styles.dropdown}>
			{userActions.map(action => (
				<li className={styles.dropdownItem}>
					<Link to={action.href}>{action.title}</Link>
				</li>
			))}
		</ul>
	);
};

export default UserDrowdown;
