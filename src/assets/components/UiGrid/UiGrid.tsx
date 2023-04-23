import cn from 'classnames';
import { motion } from 'framer-motion';
import { FC, PropsWithChildren, ReactNode } from 'react';

import getUiSx from '@utils/getUiSx';

import styles from './UiGrid.module.scss';
import type { UiGridProps } from './UiGrid.props';

const UiGrid: FC<PropsWithChildren<unknown>> & {
	Section: FC<PropsWithChildren<UiGridProps>>;
	Article: FC<PropsWithChildren<UiGridProps>>;
} = ({ children }) => {
	return <div className={cn(styles.grid)}>{children}</div>;
};

UiGrid.Section = ({ children, cols, rows, gap, maxWidth }) => (
	<section
		style={{
			...getUiSx({
				cols,
				rows,
				gap,
				maxWidth,
			}),
		}}
		className={cn(styles.grid)}
	>
		{children}
	</section>
);

UiGrid.Article = ({ children, cols, rows, gap, maxWidth }) => (
	<article
		style={{
			...getUiSx({
				cols,
				rows,
				gap,
				maxWidth,
			}),
		}}
		className={cn(styles.grid)}
	>
		{children}
	</article>
);

export default UiGrid;
