interface IContainerChildren {
	children: JSX.Element;
}
import { FC } from 'react';
import styles from './container.module.scss';

const Container: FC<IContainerChildren> = ({ children }) => {
	return <div className={styles.container}>{children}</div>;
};

export default Container;
