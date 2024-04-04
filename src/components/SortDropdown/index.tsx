import { useState } from 'react';
import { ReactComponent as DropdownIcon } from './../../assets/img/icons/dropdownIcon.svg';
import styles from './sortDropdown.module.scss';

interface IDropdown {
	id: number;
	title: string;
}

const sortDropdown: IDropdown[] = [
	{ id: 1, title: 'По обновлению' },
	{ id: 2, title: 'По цене' },
	{ id: 3, title: 'По алфавиту' },
	{ id: 4, title: 'По умолчанию' }
];

const SortDropDown = () => {
	const [dropdown, setDropdown] = useState<boolean>(false);
	const toggleDropdown = () => {
		setDropdown(!dropdown);
	};

	return (
		<div className={styles.dropwdownProducts}>
			<button className={styles.dropdownBtn} onClick={toggleDropdown}>
				Сортировать по
				<DropdownIcon
					className={styles.dropdownIcon}
					style={
						dropdown
							? { transform: 'rotate(90deg)' }
							: { transform: 'rotate(0)' }
					}
				/>
			</button>
			{dropdown && (
				<ul className={styles.dropdownList}>
					{sortDropdown.map(item => (
						<li key={item.id} className={styles.dropdownItem}>
							{item.title}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default SortDropDown;
