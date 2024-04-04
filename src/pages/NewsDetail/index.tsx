import { Col, Row, Typography } from 'antd';
import { useEffect, useState } from 'react';
import img03 from './../../assets/img/mainPage/news/brand.png';
import styles from './newsDetail.module.scss';

type Props = {};

interface INews {
    id: number;
    title: string;
    imgUrl: string;
    date: string;
    info: string;
}

const NewsDetail = (props: Props) => {
    const [news, setNews] = useState<null | INews>(null);

    const fetchNews = async (): Promise<any> => {
        const response = await new Promise<INews>((resolve) => {
            setTimeout(
                () =>
                    resolve({
                        id: 3,
                        title: 'Она создала свой бренд в 20',
                        imgUrl: img03,
                        date: '20.01.2022',
                        info: 'Стать успешным можно в любом возрасте. Главное — найти дело, которое нравится. Только в этом случае работа будет приносить счастье. И деньги. В качестве подтверждения этих слов расскажем одну совершенно необычную истории успеха, в которой предприниматель моложе 20 лет превратил свои личные интересы в прибыльный бизнес.',
                    }),
                1000
            );
        });

        setNews(response);
    };

    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <Row
            style={{ padding: '20px 120px' }}
            justify={'space-between'}
            gutter={[50, 0]}
        >
            <Col span={8}>
                <img
                    src={news?.imgUrl}
                    alt='news image'
                    width={'100%'}
                    height={'600'}
                />
            </Col>
            <Col span={16}>
                <Row
                    style={{ width: '100%', height: '100%' }}
                    justify='space-between'
                >
                    <Col>
                        <Typography.Title>{news?.title}</Typography.Title>
                        <Typography.Text>{news?.info}</Typography.Text>
                    </Col>
                    <Col className={styles.date}>
                        <Typography>{news?.date}</Typography>
                    </Col>
                </Row>
            </Col>
            <Col style={{ margin: '20px 0' }}>
                <Row>
                    <Col span={24}>
                        <Typography.Title>Другие новости</Typography.Title>
                    </Col>
                    <Col>something</Col>
                </Row>
            </Col>
        </Row>
    );
};

export default NewsDetail;
