import cn from 'classnames';
import { FC } from 'react';

import RawNavbar from '@ui/RawNavbar/RawNavbar';

import styles from './Navbar.module.scss';
import type { NavbarProps } from './Navbar.props';

const Navbar: FC<NavbarProps> = ({}) => {
	return (
		<nav className={cn(styles.appNav)}>
			<RawNavbar />
		</nav>
	);
};

export default Navbar;
