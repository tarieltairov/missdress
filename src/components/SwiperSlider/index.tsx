import { FC, useCallback, useRef } from 'react';
import SwiperCore, {
    Autoplay,
    EffectFade,
    Navigation,
    Pagination,
} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './swiperSlider.module.scss';
// Import Swiper styles
import { Image } from 'antd';
import 'swiper/scss';
import 'swiper/scss/effect-fade';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import img01 from './../../assets/img/mainPage/swiper/01.png';
import img02 from './../../assets/img/mainPage/swiper/02.jpg';

import imgProd01 from './../../assets/img/product/01.png';
SwiperCore.use([Navigation]);

import ProductCard from '../ProductCard';
import { ReactComponent as ArrowNext } from './../../assets/img/icons/arrowBottom.svg';
import { ReactComponent as ArrowPrev } from './../../assets/img/icons/arrowTop.svg';
export const MainSlider: FC = () => {
    return (
        <Swiper
            className={styles.swiperSlider}
            modules={[EffectFade, Autoplay, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            effect='fade'
            autoplay={{ delay: 3000 }}
            pagination={{
                clickable: true,
            }}
        >
            <SwiperSlide className={styles.swiperSlide}>
                <img src={img01} alt='' />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
                <img src={img02} alt='' />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
                <img src={img01} alt='' />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
                <img src={img02} alt='' />
            </SwiperSlide>
        </Swiper>
    );
};

export const ProductSlider: FC = () => {
    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <>
            <Swiper
                ref={sliderRef}
                className={styles.swiperProduct}
                // install Swiper modules
                modules={[Navigation]}
                direction='vertical'
                breakpoints={{
                    320: {
                        direction: 'horizontal',
                        slidesPerView: 4,
                        spaceBetween: 70,
                    },
                    1300: {
                        direction: 'vertical',

                        spaceBetween: 24,
                    },
                }}
                spaceBetween={14}
                navigation={{
                    nextEl: 'nextBtn',
                    prevEl: 'prevBtn',
                }}
                slidesPerView={4}
            >
                <SwiperSlide className={styles.slideProduct}>
                    <Image src={imgProd01} className={styles.slideProductImg} />
                </SwiperSlide>
                <SwiperSlide className={styles.slideProduct}>
                    <Image src={imgProd01} className={styles.slideProductImg} />
                </SwiperSlide>
                <SwiperSlide className={styles.slideProduct}>
                    <Image src={imgProd01} className={styles.slideProductImg} />
                </SwiperSlide>
                <SwiperSlide className={styles.slideProduct}>
                    <Image src={imgProd01} className={styles.slideProductImg} />
                </SwiperSlide>
                <SwiperSlide className={styles.slideProduct}>
                    <Image src={imgProd01} className={styles.slideProductImg} />
                </SwiperSlide>
                <SwiperSlide className={styles.slideProduct}>
                    <Image src={imgProd01} className={styles.slideProductImg} />
                </SwiperSlide>
                <SwiperSlide className={styles.slideProduct}>
                    <Image src={imgProd01} className={styles.slideProductImg} />
                </SwiperSlide>
            </Swiper>
            <div className={styles.sliderBtn}>
                <button onClick={handlePrev} className={styles.prevBtn}>
                    <ArrowPrev />
                </button>
                <button onClick={handleNext} className={styles.nextBtn}>
                    <ArrowNext />
                </button>
            </div>
        </>
    );
};

export const SimilarSlider: FC = () => {
    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <>
            <Swiper
                ref={sliderRef}
                className={styles.similarSlider}
                // install Swiper modules
                modules={[Navigation]}
                spaceBetween={90}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    450: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                    },
                }}
                navigation={{
                    nextEl: 'nextBtn',
                    prevEl: 'prevBtn',
                }}
                slidesPerView={3}
            >
                <SwiperSlide className={styles.similarProduct}>
                    <ProductCard
                        img={img01}
                        colors={7}
                        currentPrice={5000}
                        oldPrice={3000}
                        sizes={'20-45'}
                        title={'Jeance'}
                    />
                </SwiperSlide>
                <SwiperSlide className={styles.similarProduct}>
                    <ProductCard
                        img={img01}
                        colors={7}
                        currentPrice={5000}
                        oldPrice={3000}
                        sizes={'20-45'}
                        title={'Jeance'}
                    />
                </SwiperSlide>
                <SwiperSlide className={styles.similarProduct}>
                    <ProductCard
                        img={img01}
                        colors={7}
                        currentPrice={5000}
                        oldPrice={3000}
                        sizes={'20-45'}
                        title={'Jeance'}
                    />
                </SwiperSlide>
                <SwiperSlide className={styles.similarProduct}>
                    <ProductCard
                        img={img01}
                        colors={7}
                        currentPrice={5000}
                        oldPrice={3000}
                        sizes={'20-45'}
                        title={'Jeance'}
                    />
                </SwiperSlide>
            </Swiper>
            <div className={styles.similarSliderBtn}>
                <button onClick={handlePrev} className={styles.similarPrevBtn}>
                    <ArrowPrev />
                </button>
                <button onClick={handleNext} className={styles.similarNextBtn}>
                    <ArrowNext />
                </button>
            </div>
        </>
    );
};
