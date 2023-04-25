import cn from 'classnames';

import Page from '@components/Page/Page';

import AboutSection from '@sections/AboutSection/AboutSection';

import styles from './MainPage.module.scss';

const MainPage = () => {
	return (
		<Page meta={{ pageTitle: 'Main', pageDescription: '', keywords: '' }}>
			<AboutSection />
		</Page>
	);
};

export default MainPage;
