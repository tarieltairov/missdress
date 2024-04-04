import { Space, Typography } from 'antd';
import { Link } from 'react-router-dom';
import Container from '../../Layout/Container/Container';
import styles from './news.module.scss';

import img03 from './../../assets/img/mainPage/news/brand.png';
import img01 from './../../assets/img/mainPage/news/newCollections.png';
import img02 from './../../assets/img/mainPage/news/winterSells.png';

interface INews {
    id: number;
    title: string;
    imgUrl: string;
    date: string;
}

const news: INews[] = [
    {
        id: 1,
        title: 'Более 20 новых коллекций',
        imgUrl: img01,
        date: '05.05.2022',
    },
    {
        id: 2,
        title: 'Самые удачные покупки за Зиму',
        imgUrl: img02,
        date: '02.03.2022',
    },
    {
        id: 3,
        title: 'Она создала свой бренд в 20',
        imgUrl: img03,
        date: '20.01.2022',
    },
];

const News = () => {
    const { Title } = Typography;

    return (
        <section className={styles.news}>
            <Container>
                <>
                    <Title className={styles.title}>Новости</Title>
                    <Space.Compact
                        direction='vertical'
                        block
                        className={styles.newsBody}
                    >
                        {news.map((item) => (
                            <Link
                                key={item.id}
                                to={'/'}
                                className={styles.newsItem}
                            >
                                <Title level={3} className={styles.newTitle}>
                                    {item.title}
                                </Title>
                                <div className={styles.newFooter}>
                                    <Link
                                        to={`/News/${item.id}`}
                                        className={styles.newLink}
                                    >
                                        Читать
                                    </Link>
                                    <Title className={styles.newDate}>
                                        {item.date}
                                    </Title>
                                </div>
                                <div className={styles.newImg}>
                                    <img src={item.imgUrl} alt='' />
                                </div>
                            </Link>
                        ))}
                    </Space.Compact>
                </>
            </Container>
        </section>
    );
};

export default News;
