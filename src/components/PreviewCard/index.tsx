import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import ImgCard from "../ImgCard";
import styles from "./previewCard.module.scss";

interface IPreviewCardProps {
  title: string;
  imgUrl: string;
  id: number;
  type: string;
}

const PreviewCard: FC<IPreviewCardProps> = ({ title, imgUrl, id, type }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.card}>
      <Link to={""}>
        <ImgCard imgUrl={imgUrl} btnTitle="Смотреть" title={title} id={id} />
      </Link>
      <span
        onClick={() => navigate("/Products", { state: type })}
        className={styles.title}
      >
        {title}
      </span>
    </div>
  );
};

export default PreviewCard;
