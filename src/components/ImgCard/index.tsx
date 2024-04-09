import { FC } from "react";
import ButtonUI from "../UI/Button";
import { Link } from "react-router-dom";
import styles from "./imgCard.module.scss";
interface IImgCardProps {
  imgUrl: string;
  title: string;
  btnTitle: string;
  id: number;
}

const ImgCard: FC<IImgCardProps> = ({ imgUrl, title, btnTitle, id }) => {
  return (
    <Link to={`/Products/${id}`} className={styles.imgWrapper}>
      <img src={imgUrl} alt={title} />
      <div className={styles.btnWrapper}>
        <ButtonUI type="button" disabled={false} width="200px">
          {btnTitle}
        </ButtonUI>
      </div>
    </Link>
  );
};

export default ImgCard;
