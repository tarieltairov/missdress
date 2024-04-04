import { NavLink, Outlet } from 'react-router-dom';
import Socials from '../../components/Socials';
import Container from '../Container/Container';
import styles from './layoutDelCon.module.scss';

interface INavs {
    title: string;
    href: string;
}
const navs: INavs[] = [
    { title: 'Доставка', href: '/Delivery' },
    { title: 'Контакты', href: '/Contacts' },
];

const LayoutDelCon = () => {
    return (
        <Container>
            <>
                <div className={styles.blockWrapper}>
                    <nav className={styles.nav}>
                        <ul className={styles.navList}>
                            {navs.map((nav) => (
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? styles.navItemActive
                                            : styles.navItem
                                    }
                                    to={nav.href}
                                >
                                    <li>{nav.title}</li>
                                </NavLink>
                            ))}
                        </ul>
                    </nav>
                    <Outlet />
                </div>
                <Socials />
            </>
        </Container>
    );
};

export default LayoutDelCon;
