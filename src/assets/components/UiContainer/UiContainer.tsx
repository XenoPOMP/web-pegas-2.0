import cn from 'classnames';
import { FC, PropsWithChildren } from 'react';

import styles from './UiContainer.module.scss';
import type { UiContainerProps } from './UiContainer.props';

const UiContainer: FC<PropsWithChildren<UiContainerProps>> = ({ children }) => {
	return <div className={cn(styles.container)}>{children}</div>;
};

export default UiContainer;
