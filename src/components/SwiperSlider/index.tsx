import { FC, useCallback, useRef } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./swiperSlider.module.scss";
// Import Swiper styles
import { Image } from "antd";
import "swiper/scss";
import "swiper/scss/effect-fade";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import img01 from "./../../assets/img/mainPage/swiper/01.png";
import img02 from "./../../assets/img/mainPage/swiper/02.jpg";

import imgProd01 from "./../../assets/img/product/01.png";
SwiperCore.use([Navigation]);

import ProductCard from "../ProductCard";
import { ReactComponent as ArrowNext } from "./../../assets/img/icons/arrowBottom.svg";
import { ReactComponent as ArrowPrev } from "./../../assets/img/icons/arrowTop.svg";
import { IProduct } from "../../core/utils/products";
export const MainSlider: FC = () => {
  return (
    <Swiper
      className={styles.swiperSlider}
      modules={[EffectFade, Autoplay, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      effect="fade"
      autoplay={{ delay: 3000 }}
      pagination={{
        clickable: true,
      }}
    >
      <SwiperSlide className={styles.swiperSlide}>
        <img src={img01} alt="" />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img src={img02} alt="" />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img src={img01} alt="" />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img src={img02} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

interface IProductSlider {
  images?: string[];
}

export const ProductSlider: FC<IProductSlider> = ({ images }) => {
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
        loop
        // install Swiper modules
        modules={[Navigation]}
        direction="vertical"
        breakpoints={{
          320: {
            direction: "horizontal",
            slidesPerView: 4,
            spaceBetween: 70,
          },
          1300: {
            direction: "vertical",

            spaceBetween: 24,
          },
        }}
        spaceBetween={14}
        navigation={{
          nextEl: "nextBtn",
          prevEl: "prevBtn",
        }}
        slidesPerView={4}
      >
        {images &&
          images.map((img, index) => (
            <SwiperSlide className={styles.slideProduct} key={index}>
              <Image src={img} className={styles.slideProductImg} />
            </SwiperSlide>
          ))}
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

interface ISimilarSliderProps {
  sameTypeProducts?: IProduct[];
}

export const SimilarSlider: FC<ISimilarSliderProps> = ({
  sameTypeProducts,
}) => {
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
        loop
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
          nextEl: "nextBtn",
          prevEl: "prevBtn",
        }}
        slidesPerView={3}
      >
        {sameTypeProducts?.map((item, index) => (
          <SwiperSlide className={styles.similarProduct} key={index}>
            <ProductCard
              img={item.image}
              colors={7}
              currentPrice={item.price}
              oldPrice={item.oldPrice}
              sizes={item.size}
              title={item.title}
              id={item.id}
              rate={item.rate}
            />
          </SwiperSlide>
        ))}
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
