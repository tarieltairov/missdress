import { Space } from 'antd';
import React from 'react';
import ButtonUI from '../UI/Button';
import InputUI from '../UI/Input';
import styles from './profileForm.module.scss';
const ProfileForm: React.FC = () => {
	return (
		<Space direction='vertical' size={36} className={styles.generalForm}>
			<Space direction='vertical' size={36} className={styles.profileForm}>
				<h4 className={styles.title}>Профиль</h4>
				<InputUI placeholder='Имя' />
				<InputUI placeholder='Фамилия' />
				<InputUI placeholder='Номер телефона' />
				<ButtonUI children='Изменить номер' disabled={false} />
			</Space>
			<Space direction='vertical' size={36} className={styles.addressForm}>
				<h4 className={styles.title}>Адрес доставки</h4>
				<InputUI placeholder='Страна' />
				<InputUI placeholder='Город' />
				<ButtonUI children='Сохранить' disabled={true} />
			</Space>
		</Space>
	);
};

export default ProfileForm;
