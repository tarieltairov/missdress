import { Pagination, PaginationProps } from 'antd';
import { FC } from 'react';
import styles from './pagination.module.scss';

import { ReactComponent as Next } from './../../../assets/img/icons/nextPagination.svg';
import { ReactComponent as Prev } from './../../../assets/img/icons/prevPagination.svg';

const PaginationUI: FC = () => {
	const itemRender: PaginationProps['itemRender'] = (
		_,
		type,
		originalElement
	) => {
		if (type === 'prev') {
			return (
				<a>
					<Prev fill='currentColor' />
				</a>
			);
		}
		if (type === 'next') {
			return (
				<a>
					<Next fill='currentColor' />
				</a>
			);
		}
		return originalElement;
	};

	return (
		<Pagination
			className={styles.item}
			defaultCurrent={1}
			total={200}
			itemRender={itemRender}
		/>
	);
};

export default PaginationUI;
