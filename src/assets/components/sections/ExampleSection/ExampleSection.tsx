import cn from 'classnames';
import { FC } from 'react';
import { tw } from 'tailwindcss-typescript';

import UiGrid from '@components/UiGrid/UiGrid';

import DragMenu from '@ui/DragMenu/DragMenu';
import ProgressiveImage from '@ui/ProgressiveImage/ProgressiveImage';

import notebookImg from '@media/images/notebook.png';
import zaraImg from '@media/images/zaraParfum.png';

import styles from './ExampleSection.module.scss';
import type { ExampleSectionProps } from './ExampleSection.props';

const ExampleSection: FC<ExampleSectionProps> = ({}) => {
	return (
		<UiGrid.Section className={cn(styles.example)}>
			<div className={cn(styles.textBlock)}>
				<h2>Примеры наших работ</h2>

				<div className={cn(styles.subTitleText)}>
					Посмотрите на реализованные проекты и получите заряд вдохновения! Ваш
					будущий сайт может стать одним из них
				</div>

				<div className={cn(styles.portfolioButton)}>Перейти в порфолио</div>
			</div>

			<DragMenu
				axis={'x'}
				classNames={{
					constraint: cn(styles.slideGroup),
					draggable: cn(styles.draggable),
				}}
			>
				<div className={cn(styles.card, 'bg-[#5FA6DA] text-[white]')}>
					<div className={cn(styles.imagePlaceholder)}>
						<ProgressiveImage
							loaderColorScheme={{
								backgroundColor: 'transparent',
								loaderColor: 'black',
							}}
							src={notebookImg}
							alt={'computer-house-example'}
						/>
					</div>

					<div className={cn(styles.text)}>
						<h3>Сайт для “computer house”</h3>

						<div className={cn(styles.seeButton)}>Посмотреть</div>
					</div>
				</div>

				<div className={cn(styles.card, 'bg-[#171E43] text-[white]')}>
					<div className={cn(styles.imagePlaceholder)}>
						<ProgressiveImage
							loaderColorScheme={{
								backgroundColor: 'transparent',
								loaderColor: 'black',
							}}
							src={zaraImg}
							alt={'zara-parfum-example'}
						/>
					</div>

					<div className={cn(styles.text)}>
						<h3>Интернет-магазин “ZaraParfum”</h3>

						<div className={cn(styles.seeButton)}>Посмотреть</div>
					</div>
				</div>
			</DragMenu>
		</UiGrid.Section>
	);
};

export default ExampleSection;
