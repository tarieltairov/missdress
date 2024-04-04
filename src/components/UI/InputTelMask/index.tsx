import { Input } from 'antd';
import { ChangeEvent } from 'react';
import InputMask from 'react-input-mask';
import styles from './inputTelMask.module.scss';
interface KyrgyzstanPhoneNumberMaskProps {
	value: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	background?: string;
}

export const KyrgyzstanPhoneNumberMask: React.FC<
	KyrgyzstanPhoneNumberMaskProps
> = ({ value, onChange, background }) => {
	return (
		<InputMask
			className={styles.inputMask}
			mask='+\9\96 999 999 999'
			value={value}
			onChange={onChange}
			placeholder='Номер телефона'
			style={{ background }}
		>
			<Input className={styles.inputMask} placeholder='Номер телефона' />
		</InputMask>
	);
};
