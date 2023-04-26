import cn from 'classnames';
import { FC } from 'react';

import Portal from '@components/Portal/Portal';
import UiGrid from '@components/UiGrid/UiGrid';

import ProgressiveImage from '@ui/ProgressiveImage/ProgressiveImage';

import patchImg from '@media/images/underServicePatch.svg';
import cardZero from '@media/services/service-card-0.svg';
import cardOne from '@media/services/service-card-1.svg';

import styles from './ServiceSection.module.scss';
import type { ServiceSectionProps } from './ServiceSection.props';

const ServiceSection: FC<ServiceSectionProps> = ({}) => {
	return (
		<>
			<UiGrid.Section className={cn(styles.service)}>
				<h2>Услуги</h2>

				<div className={cn(styles.services)}>
					<ProgressiveImage
						loaderColorScheme={{
							backgroundColor: 'transparent',
							loaderColor: 'black',
						}}
						src={cardZero}
						alt={'card-zero'}
					/>

					<ProgressiveImage
						loaderColorScheme={{
							backgroundColor: 'transparent',
							loaderColor: 'black',
						}}
						src={cardOne}
						alt={'card-one'}
					/>
				</div>
			</UiGrid.Section>

			<div className={cn(styles.underServicePatch)}>
				<img src={patchImg} alt={'patch'} />

				<Portal enabled={false}>
					<div className={cn(styles.wordGroup)}>
						<div className={cn(styles.word)}>{`</Web Pegas>`}</div>
					</div>
				</Portal>
			</div>
		</>
	);
};

export default ServiceSection;
