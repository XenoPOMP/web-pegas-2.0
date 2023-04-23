import cn from 'classnames';
import { FC, PropsWithChildren } from 'react';

import styles from './UiContainer.module.scss';
import type { UiContainerProps } from './UiContainer.props';

const UiContainer: FC<PropsWithChildren<UiContainerProps>> & {
	Section: FC<PropsWithChildren<UiContainerProps>>;
	Article: FC<PropsWithChildren<UiContainerProps>>;
} = ({ children, className }) => {
	return <div className={cn(styles.container, className)}>{children}</div>;
};

UiContainer.Section = ({ children, className }) => (
	<section className={cn(styles.container, className)}>{children}</section>
);
UiContainer.Article = ({ children, className }) => (
	<article className={cn(styles.container, className)}>{children}</article>
);

export default UiContainer;
