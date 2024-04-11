import { Space, Typography } from "antd";
import { FC } from "react";
import BreadCrumbs from "../BreadCrumbs";
import ProductCard from "../ProductCard";
import Socials from "../Socials";
import SortDropDown from "../SortDropdown";
import PaginationUI from "../UI/Pagination";
import styles from "./bodyProducts.module.scss";
import { IProduct } from "../../core/utils/products";

interface IBodyProducts {
  title: string;
  products: IProduct[];
}
const { Title } = Typography;

const BodyProducts: FC<IBodyProducts> = ({ title, products }) => {
  return (
    <>
      {/* <BreadCrumbs /> */}
      <div className={styles.productsHeader}>
        <Title level={1} className={styles.title}>
          {title}
        </Title>
        <SortDropDown />
      </div>
      <Space className={styles.body}>
        {products.length ? (
          products.map((i) => <ProductCard product={i} key={i.id} />)
        ) : (
          <Title level={1}>Нет товаров</Title>
        )}
      </Space>
      <PaginationUI />
      <Socials />
    </>
  );
};

export default BodyProducts;
