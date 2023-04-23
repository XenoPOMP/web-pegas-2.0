import cn from 'classnames';
import { FC, PropsWithChildren } from 'react';

import styles from './UiContainer.module.scss';
import type { UiContainerProps } from './UiContainer.props';

const UiContainer: FC<PropsWithChildren<unknown>> & {
	Section: FC<PropsWithChildren<unknown>>;
	Article: FC<PropsWithChildren<unknown>>;
} = ({ children }) => {
	return <div className={cn(styles.container)}>{children}</div>;
};

UiContainer.Section = ({ children }) => (
	<section className={cn(styles.container)}>{children}</section>
);
UiContainer.Article = ({ children }) => (
	<article className={cn(styles.container)}>{children}</article>
);

export default UiContainer;
