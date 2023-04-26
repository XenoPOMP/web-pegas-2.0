import cn from 'classnames';
import { FC } from 'react';

import UiGrid from '@components/UiGrid/UiGrid';

import cardZero from '@media/services/service-card-0.svg';
import cardOne from '@media/services/service-card-1.svg';

import styles from './ServiceSection.module.scss';
import type { ServiceSectionProps } from './ServiceSection.props';

const ServiceSection: FC<ServiceSectionProps> = ({}) => {
	return (
		<UiGrid.Section className={cn(styles.service)}>
			<h2>Услуги</h2>

			<div className={cn(styles.services)}>
				<img src={cardZero} alt={'card-zero'} />

				<img src={cardOne} alt={'card-one'} />
			</div>
		</UiGrid.Section>
	);
};

export default ServiceSection;
