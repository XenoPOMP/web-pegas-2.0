import cn from 'classnames';

import Page from '@components/Page/Page';

import AboutSection from '@sections/AboutSection/AboutSection';
import ExampleSection from '@sections/ExampleSection/ExampleSection';
import ServiceSection from '@sections/ServiceSection/ServiceSection';
import SolveSection from '@sections/SolveSection/SolveSection';

import styles from './MainPage.module.scss';

const MainPage = () => {
	return (
		<Page meta={{ pageTitle: 'Main', pageDescription: '', keywords: '' }}>
			<AboutSection />

			<ServiceSection />

			<ExampleSection />

			<SolveSection />
		</Page>
	);
};

export default MainPage;
