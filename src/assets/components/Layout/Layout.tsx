import cn from 'classnames';
import { FC, PropsWithChildren } from 'react';

import GlobalProvider from '@providers/GlobalProvider/GlobalProvider';

import Header from '@ui/Header/Header';

import styles from './Layout.module.scss';
import { LayoutProps } from './Layout.props';

const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children }) => {
	return (
		<GlobalProvider>
			<Header />

			<main className={cn(styles.appMain)}>{children}</main>
		</GlobalProvider>
	);
};

export default Layout;
