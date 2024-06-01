import { Badge, Typography } from "antd";
import { useId, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ReactComponent as BurgerIcon } from "../../assets/img/icons/burgerIcon.svg";
import { ReactComponent as Heart } from "../../assets/img/icons/heart.svg";
import { ReactComponent as Logo } from "../../assets/img/icons/logoMiss.svg";
import { ReactComponent as Search } from "../../assets/img/icons/search.svg";
import { ReactComponent as Shop } from "../../assets/img/icons/shopping-bag.svg";
import { ReactComponent as SignIn } from "../../assets/img/icons/sign-in.svg";
import { ReactComponent as User } from "../../assets/img/icons/user.svg";
import Container from "../../Layout/Container/Container";
import Basket from "../Basket";
import MenuBurger from "../MenuBurger";
import ModalRegister from "../ModalRegister";
import SearchModal from "../SearchModal";
import UserDrowdown from "../UserDrowdown";
import styles from "./header.module.scss";
import { useAppDispatch, useAppSelector } from "../../core/hooks/redux";
import { setCart } from "../../core/redux/dataSlice";

const { Title } = Typography;

interface IListCategories {
  id: string;
  path: string;
  name: string;
}

interface IListIcons {
  id: number;
  component: JSX.Element;
  onClickIcon?: () => void;
}

const Header = () => {
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const [openUser, setOpenUser] = useState<boolean>(false);
  const [active, setActive] = useState<number | null>(null);
  const [isAuth, setIsAuth] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const { cart } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const { favourite, cartProducts } = useAppSelector((s) => s.user);
  const { pathname } = useLocation();

  const onClickSearch = () => {
    setOpenSearch(!openSearch);
    setOpenUser(false);

    dispatch(setCart(false));
  };
  const onClickSignIn = () => {
    setOpenSearch(false);
    dispatch(setCart(false));
    setOpenRegister(true);
    // setIsAuth(true);
  };
  const onClickUser = () => {
    setOpenUser(!openUser);
    setOpenSearch(false);
    dispatch(setCart(false));
  };
  const onClickOutside = () => {
    setOpenSearch(false);
    setOpenUser(false);
    dispatch(setCart(false));
    setIsAuth(false);
  };
  const onClickCart = () => {
    dispatch(setCart(!cart));
    setOpenSearch(false);
    setOpenUser(false);
  };

  const onClickFavorite = () => {
    dispatch(setCart(false));
    setOpenSearch(false);
    setOpenUser(false);
  };

  const onClickBurger = () => {
    setMenuActive(!menuActive);
  };
  if (menuActive || cart) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  const listCategories: IListCategories[] = [
    {
      id: useId(),
      path: "/Products",
      name: "Товары",
    },
    {
      id: useId(),
      path: "/About",
      name: "О нас",
    },
    {
      id: useId(),
      path: "/Delivery",
      name: "Доставка",
    },
    {
      id: useId(),
      path: "/Contacts",
      name: "Контакты",
    },
    {
      id: useId(),
      path: "/News",
      name: "Новости",
    },
  ];

  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.body}>
          <div className={styles.headerLeft}>
            <BurgerIcon className={styles.burgerIcon} onClick={onClickBurger} />
            <Link className={styles.logoContainer} to={"/"}>
              <Logo className={styles.logo} />
            </Link>
          </div>
          <ul className={styles.headerMenu}>
            {listCategories.map((category, index) => (
              <li key={index}>
                <NavLink
                  key={category.id}
                  className={({ isActive }) => (isActive ? styles.active : "")}
                  to={category.path}
                >
                  <Title className={styles.text} level={3}>
                    {category.name}
                  </Title>
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className={styles.headerActions}>
            {pathname === "/Products" && (
              <li onClick={onClickSearch} className={styles.headerAction}>
                <div
                  className={`${
                    openSearch ? styles.activeIcon : styles.iconItem
                  }`}
                >
                  <Search className={styles.logoComponent} key={0} />
                </div>
              </li>
            )}
            <li className={styles.headerAction}>
              <NavLink
                onClick={onClickFavorite}
                to={"/Favorite"}
                className={({ isActive }) =>
                  isActive ? styles.activeIcon : undefined
                }
              >
                <Badge count={favourite.length}>
                  <Heart className={styles.logoComponent} key={1} />
                </Badge>
              </NavLink>
            </li>
            <li onClick={onClickCart} className={styles.headerAction}>
              <div className={`${cart ? styles.activeIcon : styles.iconItem}`}>
                <Badge count={cartProducts.length}>
                  <Shop className={styles.logoComponent} key={2} />
                </Badge>
              </div>
            </li>
            <li className={styles.headerAction}>
              <div
                className={`${openUser ? styles.activeIcon : styles.iconItem}`}
              >
                {isAuth ? (
                  <User
                    onClick={onClickUser}
                    className={styles.logoComponent}
                    key={3}
                  />
                ) : (
                  <SignIn
                    onClick={onClickSignIn}
                    className={styles.logoComponent}
                    key={4}
                  />
                )}
              </div>
            </li>
            {pathname === "/Products" && openSearch && (
              <SearchModal isOpen={openSearch} setIsOpen={setOpenSearch} />
            )}
            {openUser && <UserDrowdown />}
          </ul>
        </div>
      </Container>
      {cart && <Basket />}
      {openRegister && <ModalRegister setOpenRegister={setOpenRegister} />}

      <MenuBurger active={menuActive} setActive={setMenuActive} />
    </div>
  );
};

export default Header;
