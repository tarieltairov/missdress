import Container from "../../Layout/Container/Container";
import { products } from "../../core/utils/products";
import PreviewCard from "../PreviewCard";
import styles from "./categories.module.scss";

interface ICategories {
  id: number;
  title: string;
  imgUrl: string;
  type: string;
}

const categories: ICategories[] = [
  {
    id: products[0].id,
    title: "Джинсы",
    imgUrl: products[0].image,
    type: "jeans",
  },
  {
    id: products[1].id,
    title: "Платья",
    imgUrl: products[1].image,
    type: "dress",
  },
  {
    id: products[2].id,
    title: "Юбки",
    imgUrl: products[2].image,
    type: "skirt",
  },
];

const Categories = () => {
  return (
    <section className={styles.categories}>
      <Container>
        <div className={styles.body}>
          {categories.map((cat) => (
            <PreviewCard
              key={cat.id}
              title={cat.title}
              imgUrl={cat.imgUrl}
              id={cat.id}
              type={cat.type}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Categories;
