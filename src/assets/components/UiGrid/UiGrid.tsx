import cn from 'classnames';
import { motion } from 'framer-motion';
import { FC, PropsWithChildren, ReactNode } from 'react';

import getUiSx from '@utils/getUiSx';

import styles from './UiGrid.module.scss';
import type { UiGridProps } from './UiGrid.props';

const UiGrid: FC<PropsWithChildren<UiGridProps>> & {
	Section: FC<PropsWithChildren<UiGridProps>>;
	Article: FC<PropsWithChildren<UiGridProps>>;
} = ({ children, className }) => {
	return <div className={cn(styles.grid, className)}>{children}</div>;
};

UiGrid.Section = ({ children, className, cols, rows, gap, maxWidth }) => (
	<section
		style={{
			...getUiSx({
				cols,
				rows,
				gap,
				maxWidth,
			}),
		}}
		className={cn(styles.grid, className)}
	>
		{children}
	</section>
);

UiGrid.Article = ({ children, className, cols, rows, gap, maxWidth }) => (
	<article
		style={{
			...getUiSx({
				cols,
				rows,
				gap,
				maxWidth,
			}),
		}}
		className={cn(styles.grid, className)}
	>
		{children}
	</article>
);

export default UiGrid;
