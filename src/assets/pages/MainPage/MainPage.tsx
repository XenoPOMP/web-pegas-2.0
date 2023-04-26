import cn from 'classnames';

import Page from '@components/Page/Page';

import AboutSection from '@sections/AboutSection/AboutSection';
import ServiceSection from '@sections/ServiceSection/ServiceSection';

import styles from './MainPage.module.scss';

const MainPage = () => {
	return (
		<Page meta={{ pageTitle: 'Main', pageDescription: '', keywords: '' }}>
			<AboutSection />

			<ServiceSection />
		</Page>
	);
};

export default MainPage;
