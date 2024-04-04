import { FC } from 'react';
import RegisterForm from '../Forms/RegisterForm';

import { ReactComponent as Logo } from './../../assets/img/logo.svg';
import styles from './modalRegister.module.scss';

interface IModalRegisterProps {
	setOpenRegister: (openRegister: boolean) => void;
}

const ModalRegister: FC<IModalRegisterProps> = ({ setOpenRegister }) => {
	document.body.style.overflow = 'hidden';

	const onClickOutside = () => {
		setOpenRegister(false);
	};

	return (
		<div className={styles.blur} onClick={onClickOutside}>
			<div className={styles.register} onClick={e => e.stopPropagation()}>
				<Logo className={styles.logo} />
				<RegisterForm />
				{/* <AuthForm /> */}
				{/* <ConfirmForm /> */}
			</div>
		</div>
	);
};

export default ModalRegister;
