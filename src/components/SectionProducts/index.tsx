import Title from "antd/es/typography/Title";
import { FC } from "react";
import Container from "../../Layout/Container/Container";
import ProductCard from "../ProductCard";
import ButtonUI from "../UI/Button";
import img01 from "./../../assets/img/mainPage/categories/01.png";
import styles from "./sectionProducts.module.scss";
import { IProduct, products } from "../../core/utils/products";
import { useNavigate } from "react-router";
interface ISectionProductsProps {
  sectionTitle: string;
  products: IProduct[];
  mainBtn: string;
}

const SectionProducts: FC<ISectionProductsProps> = ({
  sectionTitle,
  products,
  mainBtn,
}) => {
  const navigate = useNavigate();
  return (
    <section className={styles.section}>
      <Container>
        <>
          <Title level={2} className={styles.sectionTitle}>
            {sectionTitle}
          </Title>
          <div className={styles.sectionBody}>
            {products.map((item, index) => (
              <ProductCard key={index} product={item} />
            ))}
          </div>
          <div
            className={styles.btnWrapper}
            onClick={() => navigate("/Products")}
          >
            <ButtonUI>Смотреть все {mainBtn}</ButtonUI>
          </div>
        </>
      </Container>
    </section>
  );
};

export default SectionProducts;
