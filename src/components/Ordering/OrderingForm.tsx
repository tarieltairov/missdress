import { Col, Divider, Row } from 'antd';
import { useForm } from 'react-hook-form';
import ButtonUI from '../UI/Button';
import InputUI from '../UI/Input';
import styles from './ordering.module.scss';

type Props = {};

type FormData = {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    country: string;
    city: string;
};

const OrderingForm = (props: Props) => {
    const { register, handleSubmit } = useForm<FormData>();

    const someshit = handleSubmit((data) => console.log(data));

    return (
        <form onSubmit={someshit} className={styles.form}>
            <div className={styles.form_header}>
                <h1>Оформление заказа</h1>
                <Divider
                    style={{
                        border: '0.5px solid #372E24',
                    }}
                />
            </div>
            <Row justify={'space-between'} gutter={[0, 16]}>
                <Col xs={24} xl={11}>
                    <InputUI
                        height='75px'
                        background='#F1DAC5'
                        placeholder='Ваше имя'
                    />
                </Col>
                <Col xs={24} xl={11}>
                    <InputUI
                        height='75px'
                        background='#F1DAC5'
                        placeholder='Ваша фамилия'
                    />
                </Col>
                <Col xs={24} xl={11}>
                    <InputUI
                        height='75px'
                        background='#F1DAC5'
                        placeholder='Номер телефона'
                    />
                </Col>
                <Col xs={24} xl={11}>
                    <InputUI
                        height='75px'
                        background='#F1DAC5'
                        placeholder='Страна'
                    />
                </Col>
                <Col xs={24} xl={11}>
                    <InputUI
                        height='75px'
                        background='#F1DAC5'
                        placeholder='Город'
                    />
                </Col>
                <Col xs={24} xl={11}>
                    <ButtonUI height='75px' type='submit'>
                        Сохранить
                    </ButtonUI>
                </Col>
            </Row>
        </form>
    );
};

export default OrderingForm;
