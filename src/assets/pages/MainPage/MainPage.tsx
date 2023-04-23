import cn from 'classnames';

import Page from '@components/Page/Page';
import UiContainer from '@components/UiContainer/UiContainer';
import UiGrid from '@components/UiGrid/UiGrid';

import styles from './MainPage.module.scss';

const MainPage = () => {
	return (
		<Page meta={{ pageTitle: 'Main', pageDescription: '', keywords: '' }}>
			<UiGrid.Section cols={12} rows={3}>
				123
			</UiGrid.Section>
		</Page>
	);
};

export default MainPage;
