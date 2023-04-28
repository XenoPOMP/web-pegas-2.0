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
				<div className={cn(styles.content)}>
					<div className={cn(styles.card)}>
						<div className={cn(styles.container)}>
							<h3>Бриф</h3>

							<div className={cn(styles.text)}>
								Стоит отметить, если же вы не нашли подходящую вам услугу или не
								можете закончить формулирование вашей идеи, то мы окажем вам
								наиболее эффективное сотрудничество.
							</div>
						</div>
					</div>
					<div className={cn(styles.card, styles.reversed)}>
						<div className={cn(styles.container)}>
							<h3>Решение</h3>

							<div className={cn(styles.text)}>
								Далее для решения мы озадачим наших лучших специалистов, как и
								на территории Российской Федерации, так и других страны, которые
								имеют огромный опыт для составления более результативного
								решения.
							</div>
						</div>
					</div>
					<div className={cn(styles.card)}>
						<div className={cn(styles.container)}>
							<h3>Результат</h3>

							<div className={cn(styles.text)}>
								Мы рассчитываем на доверительное и долгосрочное сотрудничество
								без привлечения третьих лиц в наши с вами взаимоотношения, в
								основе которого будем сохранять политику конфиденциальности
								обеих сторон.
							</div>
						</div>
					</div>
				</div>
			</UiGrid>
		</UiContainer.Section>
	);
};

export default SolveSection;
