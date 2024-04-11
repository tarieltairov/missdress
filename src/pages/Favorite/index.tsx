import { FC } from "react";
import BodyProducts from "../../components/BodyProducts";
import Container from "../../Layout/Container/Container";
import styles from "./favorite.module.scss";
import { useAppSelector } from "../../core/hooks/redux";

const Favorite: FC = () => {
  const { favourite } = useAppSelector((state) => state.user);
  return (
    <div className={styles.favorite}>
      <Container>
        <BodyProducts title="Избранное" products={favourite} />
      </Container>
    </div>
  );
};

export default Favorite;
