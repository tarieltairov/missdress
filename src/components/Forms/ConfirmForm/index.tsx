import styles from './confirmForm.module.scss';

import { Space, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import {
	Controller,
	SubmitHandler,
	useForm,
	useFormState
} from 'react-hook-form';
import { userNameValidation } from '../../../core/utils/validation';
import ButtonUI from '../../UI/Button';
import InputUI from '../../UI/Input';

type Inputs = {
	userName: string;
};

const { Title } = Typography;

const ConfirmForm = () => {
	const [seconds, setSeconds] = useState<number>(60);

	useEffect(() => {
		const timer =
			seconds > 0 &&
			setInterval(() => {
				setSeconds(seconds - 1);
			}, 1000);
		return () => clearInterval(timer);
	}, [seconds]);
	const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

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
					name='userName'
					rules={userNameValidation}
					render={({ field }) => (
						<>
							<InputUI
								placeholder='Введите код подтверждения'
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

				<ButtonUI type='submit' disabled={!isValid} children='Подтвердить' />
				<Title level={3} className={styles.smsLabel}>
					Не пришло SMS?
				</Title>
				<ButtonUI
					type='button'
					disabled={seconds !== 0}
					children={` ${
						seconds !== 0
							? `Отправить снова 0:${formattedSeconds}`
							: 'Отправить снова'
					}`}
				/>
			</Space>
		</form>
	);
};

export default ConfirmForm;
