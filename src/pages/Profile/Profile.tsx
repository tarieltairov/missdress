import { Breadcrumb } from 'antd';
import React, { useState } from 'react';
import styles from './profile.module.scss';

import { Link } from 'react-router-dom';
import ProfileForm from '../../components/ProfileForm';
import Socials from '../../components/Socials';
import missLogo from './../../assets/img/logo.png';
import profileImg from './../../assets/img/profile-photo.png';
const Profile: React.FC = () => {
	const [openChat, setOpenChat] = useState<boolean>(false);

	const onClickChatHelper = () => {
		setOpenChat(true);
		console.log('clicked');
	};

	return (
		<>
			<div className={styles.profile}>
				<div className={styles.container}>
					<Breadcrumb className={styles.breadCrumb}>
						<Breadcrumb.Item>
							<Link to={'/main'}>Главная</Link>
						</Breadcrumb.Item>
						<Breadcrumb.Item>
							<Link to={'/profile'}>Профиль</Link>
						</Breadcrumb.Item>
					</Breadcrumb>
					<div className={styles.body}>
						<div className={styles.logo}>
							<img src={missLogo} alt='' />
						</div>
						<div className={styles.profilePhoto}>
							<img src={profileImg} alt='' />
						</div>
						<ProfileForm />
					</div>
					<Socials />
				</div>
			</div>
		</>
	);
};

export default Profile;
