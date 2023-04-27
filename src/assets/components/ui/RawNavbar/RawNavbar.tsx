import { FC } from 'react';

import NavbarItem from '@ui/Navbar/NavbarItem/NavbarItem';

import type { RawNavbarProps } from './RawNavbar.props';

const RawNavbar: FC<RawNavbarProps> = ({}) => {
	return (
		<>
			<NavbarItem href={'/'}>О компании</NavbarItem>
			<NavbarItem href={'/'}>Услуги</NavbarItem>
			<NavbarItem href={'/'}>Примеры работ</NavbarItem>
			<NavbarItem href={'/'}>Продукты</NavbarItem>
			<NavbarItem href={'/'}>Ответы на вопросы</NavbarItem>
		</>
	);
};

export default RawNavbar;
