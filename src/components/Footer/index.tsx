import { Col, Row, Space, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
// import { ReactComponent as FaceBookIcon } from "./../../assets/img/icons/facebook.svg";
import { ReactComponent as InstagramIcon } from "./../../assets/img/icons/instagram.svg";
import { ReactComponent as TelegramIcon } from "./../../assets/img/icons/telegram.svg";
import { ReactComponent as WhatsAppIcon } from "./../../assets/img/icons/whatsapp.svg";
import styles from "./footer.module.scss";

interface IFooterItems {
  title: string;
  labels: string[];
}
interface IMobileFooter {
  label: string;
  href: string;
}
const { Title } = Typography;

const footerItems: IFooterItems[] = [
  {
    title: "Услуги",
    labels: [
      "Как сделать заказ",
      "Способы оплаты",
      "Доставка",
      "Возврат товара",
      "Вопросы и ответы",
    ],
  },
  // {
  //   title: "Покупателям",
  //   labels: ["Возврат товара", "Вопросы и ответы"],
  // },
  {
    title: "О компании MissDress",
    labels: ["О нас", "Реквизиты", "Акции", "Новинки"],
  },
  {
    title: "Контакты",
    labels: ["+996709240722", "missdress@gmail.com", "Суеркулова, 18"],
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
        <Link to={""}>
          <WhatsAppIcon className={styles.socialIcon} />
        </Link>
        <Link to={""}>
          <TelegramIcon className={styles.socialIcon} />
        </Link>
        <Link to={""}>
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
            {item.labels.map((label) => (
              <Link to={""} key={label} className={styles.label}>
                {label}
              </Link>
            ))}
          </Col>
        ))}
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
