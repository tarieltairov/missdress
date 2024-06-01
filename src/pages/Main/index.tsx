import { Space } from "antd";

import styles from "./main.module.scss";

import Advantages from "../../components/Advantages";
import Categories from "../../components/Categories/Categories";
import Collections from "../../components/Collections";
import Intro from "../../components/Intro";
import MenuBurger from "../../components/MenuBurger";
import News from "../../components/News";
import SectionProducts from "../../components/SectionProducts";
import Socials from "../../components/Socials";
import ModalRegister from "../../components/ModalRegister";
import { products } from "../../core/utils/products";

export const Main = () => {
  const hitProducts = [products[4], products[3], products[5]];
  const newProducts = [products[6], products[7], products[8]];

  return (
    <>
      {/* <ModalRegister /> */}
      <Space direction="vertical" size={110} className={styles.mainWrapper}>
        <Intro />
        <Categories />
        <SectionProducts
          sectionTitle="Хит продаж"
          products={hitProducts}
          mainBtn="хиты"
        />
        <SectionProducts
          sectionTitle="Новинки"
          products={newProducts}
          mainBtn="новинки"
        />
        <Collections />
        <Advantages />
        <News />
        <Socials />
      </Space>
    </>
  );
};

export default Main;
