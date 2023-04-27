import cn from 'classnames';
import { FC } from 'react';

import UiContainer from '@components/UiContainer/UiContainer';
import UiGrid from '@components/UiGrid/UiGrid';

import styles from './SolveSection.module.scss';
import type { SolveSectionProps } from './SolveSection.props';

const SolveSection: FC<SolveSectionProps> = ({}) => {
	return (
		<UiContainer.Section id={'solves'} className={cn(styles.solves)}>
			<h2>Решение задач</h2>

			<UiGrid className={cn(styles.cardGroup)} maxWidth={'unset'}>
				<UiGrid className={cn(styles.content)} maxWidth={'unset'}>
					<div className={cn(styles.card)}></div>
					<div className={cn(styles.card)}></div>
					<div className={cn(styles.card)}></div>
				</UiGrid>
			</UiGrid>
		</UiContainer.Section>
	);
};

export default SolveSection;
