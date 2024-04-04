import { Space, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Socials from '../../components/Socials';
import { ProductSlider, SimilarSlider } from '../../components/SwiperSlider';
import ButtonUI from '../../components/UI/Button';
import Container from '../../Layout/Container/Container';
import { ReactComponent as BeigeColor } from './../../assets/img/icons/beigeColor.svg';
import { ReactComponent as BlackColor } from './../../assets/img/icons/blackColor.svg';
import { ReactComponent as BlueColor } from './../../assets/img/icons/blueColor.svg';
import { ReactComponent as GreenColor } from './../../assets/img/icons/greenColor.svg';
import { ReactComponent as FavIcon } from './../../assets/img/icons/like.svg';
import { ReactComponent as PinkColor } from './../../assets/img/icons/pinkColor.svg';
import { ReactComponent as PurpleColor } from './../../assets/img/icons/purpleColor.svg';
import { ReactComponent as RedColor } from './../../assets/img/icons/redColor.svg';
import styles from './product.module.scss';

interface IColors {
    id: number;
    color: JSX.Element;
}

const colors: IColors[] = [
    { id: 1, color: <BlackColor /> },
    { id: 2, color: <BeigeColor /> },
    { id: 3, color: <GreenColor /> },
    { id: 4, color: <BlueColor /> },
    { id: 5, color: <PurpleColor /> },
    { id: 6, color: <PinkColor /> },
    { id: 7, color: <RedColor /> },
];

// const as = [{ title: 'Besadasd', id: 1 }];

const { Title, Text } = Typography;

interface IProduct {
    id: number;
    albumId: number;
    thumbnailUrl: string;
    title: string;
    url: string;
}

const Product = () => {
    const { id } = useParams();
    const [post, setPost] = useState<IProduct>();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
            .then((response) => response.json())
            .then((json) => setPost(json));
    }, []);

    return (
        <div className={styles.product}>
            <Container>
                <>
                    <div className={styles.productBody}>
                        <div className={styles.productSlider}>
                            <ProductSlider />
                        </div>
                        <div className={styles.productAbout}>
                            <div className={styles.productImg}>
                                <img src={post?.url} alt='' />
                            </div>
                            <div className={styles.productInfo}>
                                <Title level={2} className={styles.productName}>
                                    {post?.title}
                                </Title>
                                <div className={styles.productHeader}>
                                    <Text className={styles.property}>
                                        Артикул : <span>Платья AD857</span>
                                    </Text>
                                    <button>
                                        <FavIcon
                                            className={styles.favoriteIcon}
                                        />
                                    </button>
                                </div>
                                <Text className={styles.property}>
                                    Количество в линейке : <span>5</span>
                                </Text>
                                <Space className={styles.colorsBlock}>
                                    <Text className={styles.property}>
                                        Цвет :
                                    </Text>
                                    <Space.Compact className={styles.colors}>
                                        {colors.map((color, index) => (
                                            <div key={index}>{color.color}</div>
                                        ))}
                                    </Space.Compact>
                                </Space>
                                <Space
                                    direction='horizontal'
                                    size={34}
                                    className={styles.price}
                                >
                                    <Title
                                        level={2}
                                        className={styles.currentPrice}
                                    >
                                        5990
                                    </Title>
                                    <Title
                                        level={3}
                                        className={styles.oldPrice}
                                    >
                                        7500
                                    </Title>
                                </Space>
                                <Space className={styles.fullProperties}>
                                    <Text className={styles.propertyEnter}>
                                        Размер : <span>29-49</span>
                                    </Text>
                                    <Text className={styles.propertyEnter}>
                                        Ткань : <span>Полиэстер</span>
                                    </Text>
                                    <Text className={styles.propertyEnter}>
                                        Длина : <span>115</span>
                                    </Text>
                                    <Text className={styles.propertyEnter}>
                                        Фасон : <span>А-Силуэт</span>
                                    </Text>
                                </Space>
                                <div className={styles.infoFooter}>
                                    <Space
                                        direction='vertical'
                                        size={20}
                                        className={styles.productContent}
                                    >
                                        <Title
                                            level={4}
                                            className={styles.productLabel}
                                        >
                                            О товаре:
                                        </Title>
                                        <Text className={styles.productText}>
                                            В наши дни платья по-прежнему
                                            пользуются спросом и популярностью
                                            среди молодежи, они занимают
                                            почетные места на презентациях мод.
                                            Однако постепенно в моду входит
                                            повседневный стиль, который не
                                            подразумевает использование
                                            красочных и ярких образов.Платье
                                            Benito Kate Wrap Dress отличный
                                            пример этому.
                                        </Text>
                                    </Space>
                                    <ButtonUI>Перейти в корзину</ButtonUI>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.aboutBottom}>
                        <Space
                            direction='vertical'
                            size={20}
                            className={styles.productContent}
                        >
                            <Title level={4} className={styles.productLabel}>
                                О товаре:
                            </Title>
                            <Text className={styles.productText}>
                                В наши дни платья по-прежнему пользуются спросом
                                и популярностью среди молодежи, они занимают
                                почетные места на презентациях мод. Однако
                                постепенно в моду входит повседневный стиль,
                                который не подразумевает использование красочных
                                и ярких образов.Платье Benito Kate Wrap Dress
                                отличный пример этому.
                            </Text>
                        </Space>
                        <ButtonUI>Перейти в корзину</ButtonUI>
                    </div>
                    <div className={styles.similarProducts}>
                        <Title level={2}></Title>
                        <div className={styles.similarSlider}>
                            <SimilarSlider />
                        </div>
                    </div>
                    <Socials />
                </>
            </Container>
        </div>
    );
};

export default Product;
