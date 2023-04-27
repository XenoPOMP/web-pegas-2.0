import cn from 'classnames';
import { FC, PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';

import { smoothScroll } from '@utils/smooth-scroll';

import styles from './NavbarItem.module.scss';
import type { NavbarItemProps } from './NavbarItem.props';

const NavbarItem: FC<PropsWithChildren<NavbarItemProps>> = ({
	children,
	href,
}) => {
	return /^#/gi.test(href) ? (
		<div
			onClick={() => {
				smoothScroll(href, {
					duration: 1000,
					delay: 0,
					ease: 'easeOut',
					offset: 0,
				});
			}}
			className={cn(styles.item)}
		>
			{children}
		</div>
	) : (
		<NavLink to={href} className={cn(styles.item)}>
			{children}
		</NavLink>
	);
};

export default NavbarItem;
