import { Space, Typography } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as InstagramIcon } from "./../../assets/img/icons/contactInsta.svg";
import { ReactComponent as TelegramIcon } from "./../../assets/img/icons/telegramChat.svg";
import { ReactComponent as WhatsAppIcon } from "./../../assets/img/icons/whatsappChat.svg";
import styles from "./contacts.module.scss";

const { Title, Text } = Typography;
const Contacts: FC = () => {
  return (
    <div className={styles.contacts}>
      <Title level={1} className={styles.contactsTitle}>
        Контакты
      </Title>
      <Space direction="vertical" size={36} className={styles.contactWrapper}>
        <Text className={styles.telNumberWrapper}>
          Тел.: <span className={styles.telNumber}> +996709240722</span>
          <span className={styles.telNumber}> +996774064534</span>
        </Text>
        <Space.Compact direction="horizontal" className={styles.contactsItem}>
          <Link to={"https://wa.me/+996709240722"}>
            <WhatsAppIcon width={55} className={styles.socialIcon} />
          </Link>
          <Title className={styles.telNumber}>+996709240722</Title>
        </Space.Compact>
        <Space.Compact direction="horizontal" className={styles.contactsItem}>
          <Link to={"https://t.me/m1ssdress"}>
            <TelegramIcon width={55} className={styles.socialIcon} />
          </Link>
          <Title className={styles.telNumber}>+996709240722</Title>
        </Space.Compact>
        <Space.Compact direction="horizontal" className={styles.contactsItem}>
          <Link to={"https://www.instagram.com/m1ssdress/"}>
            <InstagramIcon className={styles.socialIcon} />
          </Link>
          <Title className={styles.telNumber}>@missdress</Title>
        </Space.Compact>
        <Space.Compact direction="horizontal" className={styles.contactsItem}>
          <Title className={styles.telNumberWrapper}>
            Email:
            <span className={styles.telNumber}>
              <a href="mailto:missdress@gmail.com">missdress@gmail.com</a>
            </span>
          </Title>
        </Space.Compact>
        <Text className={styles.workDay}>
          Рабочие дни: Пн. - Пт.: с 10:00 до 20:00 Выходные дни: Сб-Вс
        </Text>
      </Space>
    </div>
  );
};

export default Contacts;
