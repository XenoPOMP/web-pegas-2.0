import cn from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import UiContainer from '@components/UiContainer/UiContainer';

import Navbar from '@ui/Navbar/Navbar';

import logotype from '@media/branding/logo.png';

import styles from './Header.module.scss';
import type { HeaderProps } from './Header.props';

const Header: FC<HeaderProps> = ({}) => {
	return (
		<header className={cn(styles.appHeader)}>
			<UiContainer className={cn(styles.headerContainer)}>
				<Link to={'/'}>
					<img className={cn(styles.logo)} src={logotype} alt={'logo'} />
				</Link>

				<Navbar />

				<Link
					to={'/'}
					style={{
						opacity: 0,
						pointerEvents: 'none',
					}}
				>
					<img className={cn(styles.logo)} src={logotype} alt={'logo'} />
				</Link>
			</UiContainer>
		</header>
	);
};

export default Header;
