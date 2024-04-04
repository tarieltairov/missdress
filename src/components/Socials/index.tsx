import { Space } from 'antd';
import { useState } from 'react';
import Container from '../../Layout/Container/Container';
import { ReactComponent as ChatHelperIcon } from './../../assets/img/icons/chatHelper.svg';
import { ReactComponent as WhatsApp } from './../../assets/img/icons/telegramChat.svg';
import { ReactComponent as Telegram } from './../../assets/img/icons/whatsappChat.svg';
import styles from './socials.module.scss';

const Socials = () => {
	const [openChat, setOpenChat] = useState<boolean>(false);

	const onClickChatHelper = () => {
		setOpenChat(!openChat);
	};

	return (
		<div className={styles.socialsWrapper}>
			<Container>
				<Space direction='horizontal' size={20} className={styles.socials}>
					<button
						style={openChat ? { opacity: 1 } : { opacity: 0 }}
						className={styles.chatHelper}
						onClick={() => setOpenChat(!openChat)}
					>
						<Telegram />
					</button>
					<button onClick={onClickChatHelper} className={styles.chatHelper}>
						<ChatHelperIcon />
					</button>
					<button
						style={openChat ? { opacity: 1 } : { opacity: 0 }}
						className={styles.chatHelper}
					>
						<WhatsApp />
					</button>
				</Space>
			</Container>
		</div>
	);
};

export default Socials;
