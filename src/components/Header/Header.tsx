import React, { useId } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './header.module.scss';
import { Typography } from 'antd';
import { ReactComponent as TextMissDress } from '../../assets/img/icons/textMissDress.svg';
import { ReactComponent as LogoMissDress } from '../../assets/img/icons/logoMissDress.svg';
import { ReactComponent as Search } from '../../assets/img/icons/search.svg';
import { ReactComponent as Heart } from '../../assets/img/icons/heart.svg';
import { ReactComponent as Shop } from '../../assets/img/icons/shopping-bag.svg';
import { ReactComponent as User } from '../../assets/img/icons/user.svg';

const { Title } = Typography;

interface IListCategories {
    id: string;
    path: string;
    name: string;
}

interface IListIcons {
    id: string;
    path: string;
    component: JSX.Element;
}

const Header = () => {
    const listCategories: IListCategories[] = [
        {
            id: useId(),
            path: '/Products',
            name: 'Товары'
        },
        {
            id: useId(),
            path: '/About',
            name: 'О нас'
        },
        {
            id: useId(),
            path: '/Delivery',
            name: 'Доставка'
        },
        {
            id: useId(),
            path: '/Contacts',
            name: 'Контакты'
        },
        {
            id: useId(),
            path: '/News',
            name: 'Новости'
        }
    ]

    const ListIcons: IListIcons[] = [
        {
            id: useId(),
            path: '/Search',
            component: <Search className={styles.logoComponent} key={0} />
        },
        {
            id: useId(),
            path: '/Favorites',
            component: <Heart className={styles.logoComponent} key={1} />
        },
        {
            id: useId(),
            path: '/Cart',
            component: <Shop className={styles.logoComponent} key={2} />
        },
        {
            id: useId(),
            path: '/User',
            component: <User className={styles.logoComponent} key={3} />
        }
    ]

    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <Link className={styles.logoContainer} to={'/'}>
                    <div className={styles.logo}>
                        <LogoMissDress className={styles.logoMissDressText} />
                        <TextMissDress className={styles.logoMissDress} />
                    </div>
                </Link>
                <div className={`${styles.block} ${styles.categories}`}>
                    {
                        listCategories.map((category) => (
                            <NavLink key={category.id} className={({ isActive }) =>
                                isActive ? styles.active : ''
                            } to={category.path}>
                                <Title className={styles.text} level={3}>{category.name}</Title>
                            </NavLink>
                        ))
                    }
                </div>
                <div className={`${styles.block} ${styles.icons}`}>
                    {
                        ListIcons.map(icon => (
                            <NavLink key={icon.id} className={({ isActive }) =>
                                isActive ? styles.activeIcon : ''
                            } to={icon.path}>
                                <div className={styles.iconItem}>
                                    {icon.component}
                                </div>
                            </NavLink>
                        ))
                    }
                </div>
            </div>
        </div >
    );
};

export default Header;