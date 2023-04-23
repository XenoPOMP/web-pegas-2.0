import cn from 'classnames';
import { FC } from 'react';

import NavbarItem from '@ui/Navbar/NavbarItem/NavbarItem';

import styles from './Navbar.module.scss';
import type { NavbarProps } from './Navbar.props';

const Navbar: FC<NavbarProps> = ({}) => {
	return (
		<nav className={cn(styles.appNav)}>
			<NavbarItem href={'/'}>О компании</NavbarItem>
			<NavbarItem href={'/'}>Услуги</NavbarItem>
			<NavbarItem href={'/'}>Примеры работ</NavbarItem>
			<NavbarItem href={'/'}>Продукты</NavbarItem>
			<NavbarItem href={'/'}>Ответы на вопросы</NavbarItem>
		</nav>
	);
};

export default Navbar;
