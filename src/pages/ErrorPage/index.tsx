import Title from 'antd/es/typography/Title';
import React from 'react';
import { Footer } from '../../components/Footer';
import imgError from './../../assets/img/error-page-bg.png';
import styles from './errorPage.module.scss';
const ErrorPage: React.FC = () => {
	return (
		<div className={styles.errorWrapper}>
			<div className={styles.boxImg}>
				<img
					src={imgError}
					alt='Упс, Страница не найдена!'
					className={styles.img}
				/>
				<div className={styles.labelWrapper}>
					<Title level={2} className={styles.errorLabel}>
						Упс, Страница не найдена!
					</Title>
					<Title level={1} className={styles.errorNum}>
						404
					</Title>
				</div>
			</div>
		</div>
	);
};

export default ErrorPage;
