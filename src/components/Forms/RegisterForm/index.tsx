import styles from './registerForm.module.scss';

import { Checkbox, Space, Typography } from 'antd';
import {
	Controller,
	SubmitHandler,
	useForm,
	useFormState
} from 'react-hook-form';
import {
	telNumberValidation,
	userNameValidation,
	userSurnameValidation
} from '../../../core/utils/validation';
import ButtonUI from '../../UI/Button';
import InputUI from '../../UI/Input';
import { KyrgyzstanPhoneNumberMask } from '../../UI/InputTelMask';

const { Title } = Typography;

type Inputs = {
	userName: string;
	userSurname: string;
	telNumber: string;
	agreement: string;
};

const RegisterForm = () => {
	const { handleSubmit, control } = useForm<Inputs>({ mode: 'onChange' });
	const { errors, isValid } = useFormState({
		control
	});
	const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<Space direction='vertical' size={36} className={styles.formInner}>
				<Title level={3} className={styles.title}>
					Регистрация
				</Title>
				<Controller
					control={control}
					name='userName'
					rules={userNameValidation}
					render={({ field }) => (
						<>
							<InputUI
								placeholder='Имя'
								onChange={(e: React.ChangeEvent) => field.onChange(e)}
								value={field.value || ''}
							/>
							{errors?.userName && (
								<div>
									<p className={styles.helperText}>
										{errors?.userName?.message}
									</p>
								</div>
							)}
						</>
					)}
				/>
				<Controller
					control={control}
					name='userSurname'
					rules={userSurnameValidation}
					render={({ field }) => (
						<>
							<InputUI
								placeholder='Фамилия'
								onChange={(e: React.ChangeEvent) => field.onChange(e)}
								value={field.value || ''}
							/>
							{errors?.userSurname && (
								<div>
									<p className={styles.helperText}>
										{errors?.userSurname?.message}
									</p>
								</div>
							)}
						</>
					)}
				/>
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
				<Controller
					control={control}
					rules={{ required: 'Соглашение является обязательным' }}
					name='agreement'
					render={({ field: props }) => (
						<>
							<Checkbox
								{...props}
								checked={!!props.value}
								onChange={e => props.onChange(e.target.checked)}
								className={styles.checkbox}
							>
								Я согласен с условиями публичной оферты
							</Checkbox>
							{errors?.agreement && (
								<div>
									<p className={styles.helperText}>
										{errors?.agreement?.message}
									</p>
								</div>
							)}
						</>
					)}
				/>

				<ButtonUI type='submit' disabled={!isValid} children='Продолжить' />
			</Space>
		</form>
	);
};

export default RegisterForm;
