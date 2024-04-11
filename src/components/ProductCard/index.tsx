import { Rate, Space } from "antd";
import Text from "antd/es/typography/Text";
import Title from "antd/es/typography/Title";
import { FC, useEffect, useState } from "react";
import ImgCard from "../ImgCard";
import { ReactComponent as ColorIcon } from "./../../assets/img/icons/colors.svg";
import { ReactComponent as HeartIcon } from "./../../assets/img/icons/heart.svg";
import { ReactComponent as FavIcon } from "./../../assets/img/icons/fav.svg";
import { ReactComponent as RateStar } from "./../../assets/img/icons/star.svg";

import styles from "./productCard.module.scss";
import { useAppDispatch, useAppSelector } from "../../core/hooks/redux";
import {
  setAddToFavourite,
  setRemoveFromFavourite,
} from "../../core/redux/dataSlice";
import { IProduct } from "../../core/utils/products";
interface IProductCardProps {
  product: IProduct;
}
const customIcons: Record<number, React.ReactNode> = {
  1: <RateStar />,
  2: <RateStar />,
  3: <RateStar />,
  4: <RateStar />,
  5: <RateStar />,
};
const ProductCard: FC<IProductCardProps> = ({ product }) => {
  const { id, image, title, oldPrice, price, size, rate } = product;
  const dispatch = useAppDispatch();
  const { favourite } = useAppSelector((state) => state.user);
  const [isInFavourite, setIsInFavourite] = useState<boolean>(false);

  useEffect(() => {
    const check = favourite.some((i) => i.id === id);
    setIsInFavourite(check);
  }, [favourite]);

  const onToFavourite = () => {
    dispatch(
      isInFavourite ? setRemoveFromFavourite(id) : setAddToFavourite(product)
    );
  };

  return (
    <div className={styles.card}>
      <ImgCard id={id} imgUrl={image} title={""} btnTitle={"Открыть"} />
      <Space.Compact direction="vertical" className={styles.cardContent}>
        <Space.Compact direction="horizontal" className={styles.cardHeader}>
          <Space.Compact direction="horizontal" className={styles.cardPrice}>
            <Text delete className={styles.oldPrice}>
              {oldPrice}
            </Text>
            <Text className={styles.currentPrice}>{price}</Text>
          </Space.Compact>
          <Space.Compact direction="horizontal" className={styles.colors}>
            <ColorIcon className={styles.colorIcon} />7
          </Space.Compact>
        </Space.Compact>
        <Title level={3} className={styles.cardTitle}>
          {title}
        </Title>
        <Text className={styles.cardSize}>Размер {size}</Text>
        <Space.Compact className={styles.cardActions}>
          <Rate
            className={styles.ratingProduct}
            count={5}
            // character={({ index }: { index: number }) => customIcons[index + 1]}
            value={rate}
          />
          <button className={styles.favorIcon} onClick={onToFavourite}>
            {isInFavourite ? (
              <FavIcon fill="currentColor" />
            ) : (
              <HeartIcon fill="currentColor" />
            )}
          </button>
        </Space.Compact>
      </Space.Compact>
    </div>
  );
};

export default ProductCard;
