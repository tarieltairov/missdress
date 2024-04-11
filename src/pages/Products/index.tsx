import { Col, Row, Typography } from "antd";
import { FC, useEffect, useState } from "react";
import Container from "../../Layout/Container/Container";
import styles from "./products.module.scss";
import ProductCard from "../../components/ProductCard";
import { ReactComponent as DropdownIcon } from "./../../assets/img/icons/dropdownIcon.svg";
import ProductCategories from "../../components/ProductCategories";
import useMediaQuery from "../../hooks/useMediaQuery";
import { MenuProps } from "antd";
import { IProduct, products } from "../../core/utils/products";
import { useAppSelector } from "../../core/hooks/redux";

const { Title } = Typography;

interface IDropdown {
  id: number;
  title: string;
}

const sortDropdown: IDropdown[] = [
  { id: 2, title: "По цене" },
  { id: 3, title: "По алфавиту" },
  { id: 4, title: "По умолчанию" },
];

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    children,
    label,
    type,
  } as MenuItem;
}

const sideItems: MenuItem[] = [
  getItem("Верхняя одежда", "sub1", [
    getItem("Пальто", "sub1-1"),
    getItem("Пуховик", "sub1-2"),
    getItem("Тренч", "sub2", [
      getItem("Осенний", "sub2-1"),
      getItem("Весенний", "sub2-2"),
    ]),
  ]),
  getItem("Платья", "dress"),
  getItem("Юбки", "skirt"),
  getItem("Джинсы", "jeans"),
  getItem("Брюки", "5"),
  getItem("Футболки", "6"),
  getItem("Шорты", "7"),
  getItem("Топы", "8"),
];

const mobileItems: MenuItem[] = [
  getItem("Категория", "some", [
    getItem("Верхняя одежда", "sub1", [
      getItem("Пальто", "sub1-1"),
      getItem("Пуховик", "sub1-2"),
      getItem("Тренч", "sub2", [
        getItem("Осенний", "sub2-1"),
        getItem("Весенний", "sub2-2"),
      ]),
    ]),
    getItem("Платья", "dress"),
    getItem("Юбки", "skirt"),
    getItem("Джинсы", "jeans"),
    getItem("Брюки", "5"),
    getItem("Футболки", "6"),
    getItem("Шорты", "7"),
    getItem("Топы", "8"),
  ]),
];

const Products: FC = () => {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const matches = useMediaQuery("(max-width: 1100px)");
  const [changebleProducts, setChangebleProducts] =
    useState<IProduct[]>(products);

  const onSort = (type: string) => {
    if (type === "По цене") {
      const sorted = [...changebleProducts].sort((a, b) => a.price - b.price);
      setChangebleProducts(sorted);
    }
    if (type === "По алфавиту") {
      const sortedByTitle = [...changebleProducts].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setChangebleProducts(sortedByTitle);
    }
    if (type === "По умолчанию") {
      setChangebleProducts(products);
    }
    toggleDropdown();
  };

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className={styles.products}>
      <Container>
        <>
          <div className={styles.productsBody}>
            {!matches && (
              <div className={styles.productsCategories}>
                <Title level={3} className={styles.categoryTitle}>
                  Категория
                </Title>
                <ProductCategories
                  items={sideItems}
                  setChangebleProducts={setChangebleProducts}
                />
              </div>
            )}
            <div className={styles.productsWrapper}>
              <div className={styles.productsHeader}>
                {matches ? (
                  <ProductCategories
                    items={mobileItems}
                    bgColor="#F1DAC5"
                    width={"48%"}
                    setChangebleProducts={setChangebleProducts}
                  />
                ) : (
                  <Title level={1} className={styles.productsTitle}>
                    Все товары
                  </Title>
                )}
                <div className={styles.dropwdownProducts}>
                  <button
                    className={styles.dropdownBtn}
                    onClick={toggleDropdown}
                  >
                    Сортировать по
                    <DropdownIcon
                      className={styles.dropdownIcon}
                      style={
                        dropdown
                          ? {
                              transform: "rotate(90deg)",
                            }
                          : { transform: "rotate(0)" }
                      }
                    />
                  </button>
                  {dropdown && (
                    <ul className={styles.dropdownList}>
                      {sortDropdown.map((item) => (
                        <li
                          key={item.id}
                          className={styles.dropdownItem}
                          onClick={() => onSort(item.title)}
                        >
                          {item.title}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <Row gutter={{ xs: 6, sm: 12, md: 24, lg: 44 }}>
                {changebleProducts.length ? (
                  changebleProducts.map((item) => (
                    <Col
                      style={{ marginBottom: "50px" }}
                      xs={12}
                      xl={12}
                      key={item.id}
                    >
                      <ProductCard product={item} />
                    </Col>
                  ))
                ) : (
                  <div
                    style={{
                      width: "63vw",
                      height: "20vh",
                      textAlign: "center",
                      fontSize: "30px",
                    }}
                  >
                    Этих товаров нет в наличии
                  </div>
                )}
              </Row>
              <div className={styles.pagination}>
                <div className={styles.paginationItem}>1</div>
                <div className={styles.paginationItem}>2</div>
                <div className={styles.paginationItem}>3</div>
                <div className={styles.paginationItem}>4</div>
                <div className={styles.paginationItem}>5</div>
              </div>
            </div>
          </div>
        </>
      </Container>
    </div>
  );
};

export default Products;
