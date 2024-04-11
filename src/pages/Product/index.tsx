import { Space, Typography } from "antd";
import { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router";
import Socials from "../../components/Socials";
import { ProductSlider, SimilarSlider } from "../../components/SwiperSlider";
import ButtonUI from "../../components/UI/Button";
import Container from "../../Layout/Container/Container";
import { ReactComponent as BeigeColor } from "./../../assets/img/icons/beigeColor.svg";
import { ReactComponent as BlackColor } from "./../../assets/img/icons/blackColor.svg";
import { ReactComponent as BlueColor } from "./../../assets/img/icons/blueColor.svg";
import { ReactComponent as GreenColor } from "./../../assets/img/icons/greenColor.svg";
import { ReactComponent as FavIcon } from "./../../assets/img/icons/like.svg";
import { ReactComponent as HeartIcon } from "./../../assets/img/icons/heart.svg";

import { ReactComponent as PinkColor } from "./../../assets/img/icons/pinkColor.svg";
import { ReactComponent as PurpleColor } from "./../../assets/img/icons/purpleColor.svg";
import { ReactComponent as RedColor } from "./../../assets/img/icons/redColor.svg";
import styles from "./product.module.scss";
import { IProduct, products } from "../../core/utils/products";
import { useAppDispatch, useAppSelector } from "../../core/hooks/redux";
import {
  setAddToCart,
  setAddToFavourite,
  setCart,
  setRemoveFromFavourite,
} from "../../core/redux/dataSlice";

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

const { Title, Text } = Typography;

const Product = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState<IProduct>();
  const [sameTypeProducts, setSameTypeProducts] = useState<IProduct[]>();
  const { favourite, cartProducts } = useAppSelector((state) => state.user);
  const [isInFavourite, setIsInFavourite] = useState<boolean>(false);
  const [isInCart, setIsInCart] = useState<boolean>(false);

  useEffect(() => {
    const check = favourite.some((i) => i.id === Number(id));
    setIsInFavourite(check);
  }, [favourite, id]);

  useEffect(() => {
    const check = cartProducts.some((i) => i.id === Number(id));
    setIsInCart(check);
  }, [cartProducts, id]);

  const onToFavourite = () => {
    if (currentProduct) {
      dispatch(
        isInFavourite
          ? setRemoveFromFavourite(Number(id))
          : setAddToFavourite(currentProduct)
      );
    }
  };

  const onToCart = () => {
    if (currentProduct) {
      if (isInCart) {
        openCart();
      } else {
        dispatch(setAddToCart(currentProduct));
      }
    }
  };

  useLayoutEffect(() => {
    const finded = products.find((item) => item.id === Number(id));
    finded && setCurrentProduct(finded);
    const same = products.filter(
      (item) => item.type === finded?.type && item.id !== Number(id)
    );
    setSameTypeProducts([...same, ...same]);
  }, [id]); // внутрь [] поставила id чтобы контент динамически менялся

  const openCart = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Добавляем параметр behavior со значением 'smooth' для плавного перехода
    }); // Прокрутка в самый верх
    dispatch(setCart(true));
  };

  return (
    <div className={styles.product}>
      <Container>
        <>
          <div className={styles.productBody}>
            <div className={styles.productSlider}>
              <ProductSlider images={currentProduct?.images} />
            </div>
            <div className={styles.productAbout}>
              <div className={styles.productImg}>
                <img src={currentProduct?.image} alt="image" />
              </div>
              <div className={styles.productInfo}>
                <Title level={2} className={styles.productName}>
                  {currentProduct?.title}
                </Title>
                <div className={styles.productHeader}>
                  <Text className={styles.property}>
                    Артикул : <span>{currentProduct?.vendorCode}</span>
                  </Text>
                  <button onClick={onToFavourite}>
                    {isInFavourite ? (
                      <FavIcon className={styles.favoriteIcon} />
                    ) : (
                      <HeartIcon className={styles.favoriteIcon} />
                    )}
                  </button>
                </div>
                <Text className={styles.property}>
                  Количество в линейке :{" "}
                  <span>{currentProduct?.numberInline}</span>
                </Text>
                <Space className={styles.colorsBlock}>
                  <Text className={styles.property}>Цвет :</Text>
                  <Space.Compact className={styles.colors}>
                    {colors.map((color, index) => (
                      <div key={index}>{color.color}</div>
                    ))}
                  </Space.Compact>
                </Space>
                <Space
                  direction="horizontal"
                  size={34}
                  className={styles.price}
                >
                  <Title level={2} className={styles.currentPrice}>
                    {currentProduct?.price}
                  </Title>
                  <Title level={3} className={styles.oldPrice}>
                    {currentProduct?.oldPrice}
                  </Title>
                </Space>
                <Space className={styles.fullProperties}>
                  <Text className={styles.propertyEnter}>
                    Размер : <span> {currentProduct?.size}</span>
                  </Text>
                  <Text className={styles.propertyEnter}>
                    Ткань : <span> {currentProduct?.textile}</span>
                  </Text>
                  <Text className={styles.propertyEnter}>
                    Длина : <span> {currentProduct?.length}</span>
                  </Text>
                  <Text className={styles.propertyEnter}>
                    Фасон : <span> {currentProduct?.style}</span>
                  </Text>
                </Space>
                <div className={styles.infoFooter}>
                  <Space
                    direction="vertical"
                    size={20}
                    className={styles.productContent}
                  >
                    <Title level={4} className={styles.productLabel}>
                      О товаре:
                    </Title>
                    <p
                      className={styles.productText}
                      dangerouslySetInnerHTML={{
                        __html:
                          currentProduct?.desc.replace(/\n/g, "<br />") || "", //разбораться в этой строке
                      }}
                    ></p>
                  </Space>
                  <ButtonUI onClick={onToCart}>
                    {isInCart ? "Перейти" : "Добавить"} в корзину
                  </ButtonUI>
                </div>
              </div>
            </div>
          </div>
          {/* адаптивная версия для описания */}
          <div className={styles.aboutBottom}>
            <Space
              direction="vertical"
              size={20}
              className={styles.productContent}
            >
              <Title level={4} className={styles.productLabel}>
                О товаре:
              </Title>
              <Text className={styles.productText}>{currentProduct?.desc}</Text>
            </Space>
            <ButtonUI onClick={onToCart}>
              {isInCart ? "Перейти" : "Добавить"} в корзину
            </ButtonUI>
          </div>
          <div className={styles.similarProducts}>
            <Title level={2}></Title>
            <div className={styles.similarSlider}>
              <SimilarSlider sameTypeProducts={sameTypeProducts} />
            </div>
          </div>
          <Socials />
        </>
      </Container>
    </div>
  );
};

export default Product;
