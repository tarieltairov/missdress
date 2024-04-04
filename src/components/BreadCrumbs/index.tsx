import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface IRoutes {
    path: string;
    breadcrumbName: string;
    children?: IRoutes[];
}

const BreadCrumbs: FC = () => {
    const location = useLocation();

    console.log(location);

    // const routes: IRoutes[] = [
    //     {
    //         path: '/',
    //         breadcrumbName: 'home',
    //     },
    //     {
    //         path: '/first',
    //         breadcrumbName: 'first',
    //         children: [
    //             {
    //                 path: '/general',
    //                 breadcrumbName: 'General',
    //             },
    //             {
    //                 path: '/layout',
    //                 breadcrumbName: 'Layout',
    //             },
    //             {
    //                 path: '/navigation',
    //                 breadcrumbName: 'Navigation',
    //             },
    //         ],
    //     },
    //     {
    //         path: 'second',
    //         breadcrumbName: 'second',
    //     },
    // ];

    // function itemRender(route, params, routes, paths) {
    //     const last = routes.indexOf(route) === routes.length - 1;
    //     return last ? (
    //         <span>{route.breadcrumbName}</span>
    //     ) : (
    //         <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
    //     );
    // }

    return <div>{location.pathname.toString()}</div>;
};

export default BreadCrumbs;
