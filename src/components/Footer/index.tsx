import { Col, Row, Space, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
// import { ReactComponent as FaceBookIcon } from "./../../assets/img/icons/facebook.svg";
import { ReactComponent as InstagramIcon } from "./../../assets/img/icons/instagram.svg";
import { ReactComponent as TelegramIcon } from "./../../assets/img/icons/telegram.svg";
import { ReactComponent as WhatsAppIcon } from "./../../assets/img/icons/whatsapp.svg";
import styles from "./footer.module.scss";
import { Image } from "antd";
import mapScreen from "../../assets/mapScreen.png";
interface IFooterItems {
  title: string;
  labels: IMobileFooter[];
}
interface IMobileFooter {
  label: string;
  href: string;
}
const { Title } = Typography;

const maplink =
  "https://www.google.com/maps/place/%D0%A1%D1%83%D0%B5%D1%80%D0%BA%D1%83%D0%BB%D0%BE%D0%B2%D0%B0+18+%D0%A2%D0%A6+%D0%96%D0%90%D0%A0%D0%90%D0%9B+mall/@42.836786,74.6123496,17z/data=!3m1!4b1!4m6!3m5!1s0x389eb66ccf32c655:0xea819df0509959e4!8m2!3d42.8367861!4d74.6172205!16s%2Fg%2F11hb7pst_7?entry=ttu";

const footerItems: IFooterItems[] = [
  {
    title: "Услуги",
    labels: [
      {
        label: "Как сделать заказ",
        href: "",
      },
      {
        label: "Способы оплаты",
        href: "",
      },
      {
        label: "Доставка",
        href: "",
      },
      {
        label: "Возврат товара",
        href: "",
      },
      {
        label: "Вопросы и ответы",
        href: "",
      },
    ],
  },
  // {
  //   title: "Покупателям",
  //   labels: ["Возврат товара", "Вопросы и ответы"],
  // },
  {
    title: "О компании MissDress",
    labels: [
      {
        label: "О нас",
        href: "/About",
      },
      {
        label: "Реквизиты",
        href: "",
      },

      {
        label: "Акции",
        href: "",
      },

      {
        label: "Новинки",
        href: "",
      },
    ],
  },
  {
    title: "Контакты",
    labels: [
      {
        label: "+996709240722",
        href: "tel:+996709240722",
      },
      {
        label: "missdress@gmail.com",
        href: "mailto:missdress@gmail.com",
      },
      {
        label: "Суеркулова, 18",
        href: maplink,
      },
    ],
  },
];
const mobileFooterItems: IMobileFooter[] = [
  { label: "О нас", href: "/About" },
  { label: "+996709240722", href: "/About" },
  { label: "missdress@gmail.com", href: "/About" },
  { label: "Суеркулова, 18", href: "/About" },
];

export const Footer: React.FC = () => (
  <div className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.social}>
        <Link to={"https://wa.me/+996709240722"}>
          <WhatsAppIcon className={styles.socialIcon} />
        </Link>
        <Link to={"https://t.me/m1ssdress"}>
          <TelegramIcon className={styles.socialIcon} />
        </Link>
        <Link to={"https://www.instagram.com/m1ssdress/"}>
          <InstagramIcon className={styles.socialIcon} />
        </Link>
        {/* <Link to={""}>
          <FaceBookIcon className={styles.socialIcon} />
        </Link> */}
      </div>
      <Row gutter={32} justify="space-between" className={styles.itemsFooter}>
        {footerItems.map((item, index) => (
          <Col key={index} className={styles.footerColumn}>
            <Title className={styles.title} level={3}>
              {item.title}
            </Title>
            {item.labels.map((item, index) => (
              <Link to={item.href} key={index} className={styles.label}>
                {item.label}
              </Link>
            ))}
          </Col>
        ))}
        <Link to={maplink}>
          <Image src={mapScreen} className={styles.map} />
        </Link>
      </Row>
      <Space size={15} direction="vertical" className={styles.mobileFooter}>
        {mobileFooterItems.map((item, index) => (
          <Link key={item.label} to={item.href} className={styles.label}>
            {item.label}
          </Link>
        ))}
      </Space>
    </div>
  </div>
);
