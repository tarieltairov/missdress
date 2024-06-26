import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import { ConfigProvider, MenuProps } from "antd";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import styles from "./productCategories.module.scss";
import {
  IProduct,
  ProductsTypes,
  products,
  productsTypes,
} from "../../core/utils/products";

type Props = {
  items: any;
  bgColor?: string;
  width?: number | string;
  setChangebleProducts: (products: any[]) => void;
  locationCategory: keyof ProductsTypes;
};

const rootSubmenuKeys = ["sub1"];

const ProductCategories = ({
  items,
  bgColor = "inherit",
  width = 256,
  setChangebleProducts,
  locationCategory,
}: Props) => {
  const [openKeys, setOpenKeys] = useState([""]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  // логика того что когда мы переходим из главной по одной карточке из коллекции
  useEffect(() => {
    if (locationCategory) {
      handleClick({ key: locationCategory });
    }
  }, [locationCategory]);

  //   функция для фильтрации по кактегории товаров
  const handleClick = ({ key }: { key: keyof ProductsTypes }) => {
    setChangebleProducts(
      products.filter((item) => item.type === productsTypes[key])
    );
    setSelectedKeys([key]);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#E5A66E",
          colorBgLayout: "orange",
        },
      }}
    >
      <Menu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        className={styles.custom_menu}
        style={{
          width: width,
          backgroundColor: bgColor,
          border: "none",
          color: "black",
        }}
        expandIcon={(icon) =>
          icon.isOpen ? (
            <CaretUpOutlined
              style={{
                fontSize: "16px",
                color: "#E5A66E",
              }}
            />
          ) : (
            <CaretDownOutlined
              style={{
                fontSize: "16px",
                color: "#000",
              }}
            />
          )
        }
        selectedKeys={selectedKeys}
        items={items.map((item: any) => ({
          ...item,
          onClick: () => handleClick(item), // Добавляем обработчик события клика для каждого элемента меню
        }))}
      />
    </ConfigProvider>
  );
};

export default ProductCategories;
