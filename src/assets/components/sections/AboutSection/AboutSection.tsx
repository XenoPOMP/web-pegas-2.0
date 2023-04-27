import cn from 'classnames';
import { FC, ReactNode } from 'react';

import UiGrid from '@components/UiGrid/UiGrid';

import ProgressiveImage from '@ui/ProgressiveImage/ProgressiveImage';
import MediaWidthView from '@ui/mediaQueries/MediaWidthView/MediaWidthView';

import lockImg from '@media/icons/lock-icon.svg';
import networkImg from '@media/icons/network-cion.svg';
import peopleImg from '@media/icons/people-icon.svg';
import aboutImg from '@media/images/aboutImg.png';

import styles from './AboutSection.module.scss';
import type { AboutSectionProps } from './AboutSection.props';

const AboutSection: FC<AboutSectionProps> = ({}) => {
	const IconItem: FC<{
		icon: ReactNode;
		text?: string;
	}> = ({ icon, text }) => {
		return (
			<div className={cn(styles.item)}>
				<div className={cn(styles.iconContainer)}>{icon}</div> <div>{text}</div>
			</div>
		);
	};

	return (
		<UiGrid.Section id={'about'} gap={0} className={cn(styles.about)}>
			<div className={cn(styles.imageBlock)}>
				<MediaWidthView maxWidth={1212}>
					<h2>О КОМПАНИИ</h2>
				</MediaWidthView>

				<ProgressiveImage
					src={aboutImg}
					loaderColorScheme={{
						backgroundColor: 'transparent',
						loaderColor: 'black',
					}}
					alt={'about-image'}
				/>
			</div>

			<div className={cn(styles.textBlock)}>
				<h2>О КОМПАНИИ</h2>

				<div className={cn(styles.iconGroup)}>
					<IconItem
						icon={<img src={peopleImg} alt={'people-'} />}
						text={
							'Мы небольшая команда опытных и талантливых специалистов, которая ценится своей надежностью, ответственность и уникальными подходами к решению ваших задач или проблем.'
						}
					/>

					<IconItem
						icon={<img src={networkImg} alt={'network-icon'} />}
						text={
							'В большом отличии от наших отечественных коллег-компаний, расположенных на территории России, мы сделали ставку на работу с юридическими лицами и каждый наш проект осуществляем эксклюзивно и отходим от стандартных шаблонов при сотрудничестве. '
						}
					/>

					<IconItem
						icon={<img src={lockImg} alt={'lock-icon'} />}
						text={
							'Самые главные отличия — это гарантируемая нами надежность и удобство оказываемых услуг при выполнении своих работ. Поскольку в наших интересах держать свои гарантии, мы используем в первую очередь первоклассных специалистов в области программирования, которые создают проекты на основе “чистого кода” и без использования посторонних программ, которые могут принести нестабильность в результат.'
						}
					/>
				</div>
			</div>
		</UiGrid.Section>
	);
};

export default AboutSection;
