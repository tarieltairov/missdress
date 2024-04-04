import { Col, Row, Typography } from 'antd';
import { FC, useState } from 'react';
import Container from '../../Layout/Container/Container';
import styles from './products.module.scss';
import ProductCard from '../../components/ProductCard';
import { ReactComponent as DropdownIcon } from './../../assets/img/icons/dropdownIcon.svg';
import ProductCategories from '../../components/ProductCategories';
import useMediaQuery from '../../hooks/useMediaQuery';
import { MenuProps } from 'antd';

const { Title } = Typography;

interface IDropdown {
    id: number;
    title: string;
}

const sortDropdown: IDropdown[] = [
    { id: 1, title: 'По обновлению' },
    { id: 2, title: 'По цене' },
    { id: 3, title: 'По алфавиту' },
    { id: 4, title: 'По умолчанию' },
];

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    children?: MenuItem[],
    type?: 'group'
): MenuItem {
    return {
        key,
        children,
        label,
        type,
    } as MenuItem;
}

const sideItems: MenuItem[] = [
    getItem('Верхняя одежда', 'sub1', [
        getItem('Пальто', 'sub1-1'),
        getItem('Пуховик', 'sub1-2'),
        getItem('Тренч', 'sub2', [
            getItem('Осенний', 'sub2-1'),
            getItem('Весенний', 'sub2-2'),
        ]),
    ]),
    getItem('Платья', '2'),
    getItem('Юбки', '3'),
    getItem('Джинсы', '4'),
    getItem('Брюки', '5'),
    getItem('Футболки', '6'),
    getItem('Шорты', '7'),
    getItem('Топы', '8'),
    getItem('Пижамы', '9'),
];

const mobileItems: MenuItem[] = [
    getItem('Категория', 'some', [
        getItem('Верхняя одежда', 'sub1', [
            getItem('Пальто', 'sub1-1'),
            getItem('Пуховик', 'sub1-2'),
            getItem('Тренч', 'sub2', [
                getItem('Осенний', 'sub2-1'),
                getItem('Весенний', 'sub2-2'),
            ]),
        ]),
        getItem('Платья', '2'),
        getItem('Юбки', '3'),
        getItem('Джинсы', '4'),
        getItem('Брюки', '5'),
        getItem('Футболки', '6'),
        getItem('Шорты', '7'),
        getItem('Топы', '8'),
        getItem('Пижамы', '9'),
    ]),
];

const Products: FC = () => {
    const [dropdown, setDropdown] = useState<boolean>(false);
    const matches = useMediaQuery('(max-width: 1100px)');

    const toggleDropdown = () => {
        setDropdown(!dropdown);
    };

    return (
        <div className={styles.products}>
            <Container>
                <>
                    <div className={styles.productsBody}>
                        {!matches && (
                            <div className={styles.productsCategories}>
                                <Title
                                    level={3}
                                    className={styles.categoryTitle}
                                >
                                    Категория
                                </Title>
                                <ProductCategories items={sideItems} />
                            </div>
                        )}
                        <div className={styles.productsWrapper}>
                            <div className={styles.productsHeader}>
                                {matches ? (
                                    <ProductCategories
                                        items={mobileItems}
                                        bgColor='#F1DAC5'
                                        width={'48%'}
                                    />
                                ) : (
                                    <Title
                                        level={1}
                                        className={styles.productsTitle}
                                    >
                                        Все товары
                                    </Title>
                                )}
                                <div className={styles.dropwdownProducts}>
                                    <button
                                        className={styles.dropdownBtn}
                                        onClick={toggleDropdown}
                                    >
                                        Сортировать по
                                        <DropdownIcon
                                            className={styles.dropdownIcon}
                                            style={
                                                dropdown
                                                    ? {
                                                          transform:
                                                              'rotate(90deg)',
                                                      }
                                                    : { transform: 'rotate(0)' }
                                            }
                                        />
                                    </button>
                                    {dropdown && (
                                        <ul className={styles.dropdownList}>
                                            {sortDropdown.map((item) => (
                                                <li
                                                    key={item.id}
                                                    className={
                                                        styles.dropdownItem
                                                    }
                                                >
                                                    {item.title}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                            <Row gutter={{ xs: 6, sm: 12, md: 24, lg: 44 }}>
                                <Col
                                    style={{ marginBottom: '50px' }}
                                    xs={12}
                                    xl={12}
                                >
                                    <ProductCard
                                        colors={5}
                                        currentPrice={9000}
                                        img={
                                            'https://www.na-kd.com/globalassets/nakd_draped_linen_dress-1018-007096-00681070_01c.jpg?ref=63C3874C42'
                                        }
                                        sizes={'545-4545'}
                                        title={'Modnye jeans'}
                                        oldPrice={6000}
                                        id={5}
                                    />
                                </Col>

                                <Col
                                    style={{ marginBottom: '50px' }}
                                    xs={12}
                                    xl={12}
                                >
                                    <ProductCard
                                        colors={5}
                                        currentPrice={9000}
                                        img={
                                            'https://www.na-kd.com/globalassets/nakd_draped_linen_dress-1018-007096-00681070_01c.jpg?ref=63C3874C42'
                                        }
                                        sizes={'545-4545'}
                                        title={'Modnye jeans'}
                                        oldPrice={6000}
                                        id={5}
                                    />
                                </Col>
                                <Col
                                    style={{ marginBottom: '50px' }}
                                    xs={12}
                                    xl={12}
                                >
                                    <ProductCard
                                        colors={5}
                                        currentPrice={9000}
                                        img={
                                            'https://www.na-kd.com/globalassets/nakd_draped_linen_dress-1018-007096-00681070_01c.jpg?ref=63C3874C42'
                                        }
                                        sizes={'545-4545'}
                                        title={'Modnye jeans'}
                                        oldPrice={6000}
                                        id={5}
                                    />
                                </Col>

                                <Col
                                    style={{ marginBottom: '50px' }}
                                    xs={12}
                                    xl={12}
                                >
                                    <ProductCard
                                        colors={5}
                                        currentPrice={9000}
                                        img={
                                            'https://www.na-kd.com/globalassets/nakd_draped_linen_dress-1018-007096-00681070_01c.jpg?ref=63C3874C42'
                                        }
                                        sizes={'545-4545'}
                                        title={'Modnye jeans'}
                                        oldPrice={6000}
                                        id={5}
                                    />
                                </Col>
                                <Col
                                    style={{ marginBottom: '50px' }}
                                    xs={12}
                                    xl={12}
                                >
                                    <ProductCard
                                        colors={5}
                                        currentPrice={9000}
                                        img={
                                            'https://www.na-kd.com/globalassets/nakd_draped_linen_dress-1018-007096-00681070_01c.jpg?ref=63C3874C42'
                                        }
                                        sizes={'545-4545'}
                                        title={'Modnye jeans'}
                                        oldPrice={6000}
                                        id={5}
                                    />
                                </Col>

                                <Col
                                    style={{ marginBottom: '50px' }}
                                    xs={12}
                                    xl={12}
                                >
                                    <ProductCard
                                        colors={5}
                                        currentPrice={9000}
                                        img={
                                            'https://www.na-kd.com/globalassets/nakd_draped_linen_dress-1018-007096-00681070_01c.jpg?ref=63C3874C42'
                                        }
                                        sizes={'545-4545'}
                                        title={'Modnye jeans'}
                                        oldPrice={6000}
                                        id={5}
                                    />
                                </Col>
                            </Row>
                            <div className={styles.pagination}>
                                <div className={styles.paginationItem}>1</div>
                                <div className={styles.paginationItem}>2</div>
                                <div className={styles.paginationItem}>3</div>
                                <div className={styles.paginationItem}>4</div>
                                <div className={styles.paginationItem}>5</div>
                            </div>
                        </div>
                    </div>
                </>
            </Container>
        </div>
    );
};

export default Products;
