import styles from './authForm.module.scss';

import { Space, Typography } from 'antd';
import {
	Controller,
	SubmitHandler,
	useForm,
	useFormState
} from 'react-hook-form';
import { telNumberValidation } from '../../../core/utils/validation';
import ButtonUI from '../../UI/Button';
import { KyrgyzstanPhoneNumberMask } from '../../UI/InputTelMask';

type Inputs = {
	telNumber: string;
};

const { Title } = Typography;

const AuthForm = () => {
	const { handleSubmit, control } = useForm<Inputs>({ mode: 'onChange' });
	const { errors, isValid } = useFormState({
		control
	});
	const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<Space direction='vertical' size={36} className={styles.formInner}>
				<Title level={3} className={styles.title}>
					Вход
				</Title>

				<Controller
					control={control}
					defaultValue=''
					rules={telNumberValidation}
					name='telNumber'
					render={({ field }) => (
						<>
							<KyrgyzstanPhoneNumberMask
								onChange={(e: React.ChangeEvent) => field.onChange(e)}
								value={field.value}
							/>
							{errors?.telNumber && (
								<div>
									<p className={styles.helperText}>
										{errors?.telNumber?.message}
									</p>
								</div>
							)}
						</>
					)}
				/>

				<ButtonUI type='submit' disabled={!isValid} children='Войти' />
				<button className={styles.registerBtn}>Зарегистрироваться</button>
			</Space>
		</form>
	);
};

export default AuthForm;
