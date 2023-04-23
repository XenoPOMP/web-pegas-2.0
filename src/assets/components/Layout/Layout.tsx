import { FC, PropsWithChildren } from 'react';

import GlobalProvider from '@providers/GlobalProvider/GlobalProvider';

import Header from '@ui/Header/Header';

import { LayoutProps } from './Layout.props';

const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children }) => {
	return (
		<GlobalProvider>
			<Header />

			<main>{children}</main>
		</GlobalProvider>
	);
};

export default Layout;
