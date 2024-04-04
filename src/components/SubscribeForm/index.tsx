import { Select, Space } from 'antd';
import Title from 'antd/es/typography/Title';
import { FC } from 'react';
import {
	Controller,
	SubmitHandler,
	useForm,
	useFormState
} from 'react-hook-form';
import {
	selectCategoriesValidation,
	telNumberValidation,
	userNameValidation
} from '../../core/utils/validation';
import ButtonUI from '../UI/Button';
import InputUI from '../UI/Input';
import { KyrgyzstanPhoneNumberMask } from '../UI/InputTelMask';
import styles from './subscribeForm.module.scss';

type Inputs = {
	userName: string;
	telNumber: string;
	categories: string;
};

const SubscribeForm: FC = () => {
	const { handleSubmit, control } = useForm<Inputs>({ mode: 'onChange' });
	const { errors, isValid } = useFormState({
		control
	});
	const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

	const handleChange = (value: string) => {
		console.log(`selected ${value}`);
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<Title level={3} className={styles.formTitle}>
				Оформить подписку
			</Title>
			<Space direction='vertical' size={47} className={styles.formInner}>
				<Controller
					control={control}
					name='userName'
					rules={userNameValidation}
					render={({ field }) => (
						<>
							<InputUI
								placeholder='Ваше Ф.И.О.'
								background='rgba(241, 218, 197, 0.8)'
								onChange={(e: React.ChangeEvent) => field.onChange(e)}
								value={field.value || ''}
							/>
							{errors?.userName && (
								<div>
									<p
										style={{
											color: '#FF5050',
											padding: '0 15px',
											fontSize: 25,
											fontWeight: 600,
											marginTop: 10
										}}
									>
										{errors?.userName?.message}
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
								background='rgba(241, 218, 197, 0.8)'
							/>
							{errors?.telNumber && (
								<div>
									<p
										style={{
											color: '#FF5050',
											padding: '0 15px',
											fontSize: 25,
											marginTop: 10,
											fontWeight: 600
										}}
									>
										{errors?.telNumber?.message}
									</p>
								</div>
							)}
						</>
					)}
				/>
				<Controller
					control={control}
					defaultValue=''
					rules={selectCategoriesValidation}
					name='categories'
					render={({ field }) => (
						<>
							<Select
								className={styles.select}
								onChange={(e: React.ChangeEvent) => field.onChange(e)}
								placeholder='Выберите категорию'
								options={[
									{ value: 'jack', label: 'Jack' },
									{ value: 'lucy', label: 'Lucy' },
									{ value: 'Yiminghe', label: 'yiminghe' },
									{ value: 'disabled', label: 'Disabled', disabled: true }
								]}
							></Select>
							{errors?.categories && (
								<div>
									<p
										style={{
											color: '#FF5050',
											padding: '0 15px',
											fontSize: 20,
											marginTop: 10,
											fontWeight: 400
										}}
									>
										{errors?.telNumber?.message}
									</p>
								</div>
							)}
						</>
					)}
				/>
			</Space>
			<div className={styles.btnWrapper}>
				<ButtonUI type='submit'>Подписаться</ButtonUI>
			</div>
		</form>
	);
};

export default SubscribeForm;
