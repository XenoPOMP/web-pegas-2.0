import { FC } from 'react';

import NavbarItem from '@ui/Navbar/NavbarItem/NavbarItem';

import type { RawNavbarProps } from './RawNavbar.props';

const RawNavbar: FC<RawNavbarProps> = ({}) => {
	return (
		<>
			<NavbarItem href={'#about'}>О компании</NavbarItem>
			<NavbarItem href={'#services'}>Услуги</NavbarItem>
			<NavbarItem href={'#examples'}>Примеры работ</NavbarItem>
			<NavbarItem href={'/'}>Продукты</NavbarItem>
			<NavbarItem href={'/'}>Ответы на вопросы</NavbarItem>
		</>
	);
};

export default RawNavbar;
