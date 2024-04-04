import { FC } from 'react';
import InputUI from '../UI/Input';
import styles from './searchModal.module.scss';

interface SerachModalProps {
	isOpen: boolean;
	setIsOpen: (isOpen: any) => void;
}

const SearchModal: FC<SerachModalProps> = () => {
	return (
		<div className={styles.search}>
			<InputUI placeholder='Поиск' background='#F1DAC5' />
		</div>
	);
};

export default SearchModal;
