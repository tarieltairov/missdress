import React, { useId } from 'react';
import { Route, Routes } from 'react-router-dom';
import Delivery from '../components/Delivery';
import LayoutDelCon from '../Layout/LayoutDelCon';
import About from '../pages/About';
import Cart from '../pages/Cart';
import CategoriesPage from '../pages/CategoriesPage';
import Contacts from '../pages/Contacts';
import Dress from '../pages/Dress';
import Favorite from '../pages/Favorite';
import MyOrders from '../pages/MyOrders';
import MyOrdersDetail from '../pages/MyOrdersDetail';
import NewsDetail from '../pages/NewsDetail';
import NewsPage from '../pages/NewsPage';
import Ordering from '../pages/Ordering';
import Product from '../pages/Product';
import Products from '../pages/Products';

import Profile from '../pages/Profile/Profile';
import ErrorPage from '../pages/ErrorPage';
import Main from '../pages/Main';

interface RouterData {
    id?: string;
    path: string;
    component: JSX.Element;
}

const MainRoutes = () => {
    const PUBLIC_ROUTES: RouterData[] = [
        {
            id: useId(),
            path: '/main',
            component: <Main />,
        },
        {
            id: useId(),
            path: '/profile',
            component: <Profile />,
        },
        {
            id: useId(),
            path: '/',
            component: <Main />,
        },
        {
            id: useId(),
            path: '/Contacts',
            component: <Contacts />,
        },
        {
            id: useId(),
            path: '/Delivery',
            component: <Delivery />,
        },
        {
            id: useId(),
            path: '/About',
            component: <About />,
        },
        {
            id: useId(),
            path: '/Products/:id',
            component: <Product />,
        },
        {
            id: useId(),
            path: '/Products',
            component: <Products />,
        },
        {
            id: useId(),
            path: '/News',
            component: <NewsPage />,
        },
        {
            id: useId(),
            path: '/News/:id',
            component: <NewsDetail />,
        },
        {
            id: useId(),
            path: '/Favorite',
            component: <Favorite />,
        },
        {
            id: useId(),
            path: '/Categories',
            component: <CategoriesPage />,
        },
        {
            id: useId(),
            path: '/Dress',
            component: <Dress />,
        },
        {
            id: useId(),
            path: '/Cart',
            component: <Cart />,
        },
        {
            id: useId(),
            path: '/Ordering',
            component: <Ordering />,
        },
        {
            id: useId(),
            path: '/MyOrders',
            component: <MyOrders />,
        },
        {
            id: useId(),
            path: '/MyOrders/:id',
            component: <MyOrdersDetail />,
        },
        {
            id: useId(),
            path: '/*',
            component: <ErrorPage />,
        },
    ];
    return (
        <React.Suspense fallback={<span>Loading...</span>}>
            <Routes>
                <Route element={<LayoutDelCon />}>
                    <Route path='/Contacts' element={<Contacts />} />
                    <Route path='/Delivery' element={<Delivery />} />
                </Route>
                {PUBLIC_ROUTES.map(({ id, path, component }) => (
                    <>
                        <Route path={path} element={component} key={id} />
                    </>
                ))}
            </Routes>
        </React.Suspense>
    );
};

export { MainRoutes };
