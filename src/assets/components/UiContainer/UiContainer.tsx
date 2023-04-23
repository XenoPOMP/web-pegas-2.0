import cn from 'classnames';
import { FC, PropsWithChildren } from 'react';

import styles from './UiContainer.module.scss';
import type { UiContainerProps } from './UiContainer.props';

interface IUiContainerNestedProps extends PropsWithChildren<UiContainerProps> {}

const UiContainer: FC<IUiContainerNestedProps> & {
	Section: FC<IUiContainerNestedProps>;
	Article: FC<IUiContainerNestedProps>;
	Header: FC<IUiContainerNestedProps>;
} = ({ children, className }) => {
	return <div className={cn(styles.container, className)}>{children}</div>;
};

UiContainer.Section = ({ children, className }) => (
	<section className={cn(styles.container, className)}>{children}</section>
);
UiContainer.Article = ({ children, className }) => (
	<article className={cn(styles.container, className)}>{children}</article>
);
UiContainer.Header = ({ children, className }) => (
	<header className={cn(styles.container, className)}>{children}</header>
);

export default UiContainer;
