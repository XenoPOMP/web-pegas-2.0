import cn from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import Portal from '@components/Portal/Portal';
import UiContainer from '@components/UiContainer/UiContainer';

import Navbar from '@ui/Navbar/Navbar';

import banner from '@media/backgrounds/space.png';
import logotype from '@media/branding/logo.png';

import styles from './Header.module.scss';
import type { HeaderProps } from './Header.props';

const Header: FC<HeaderProps> = ({}) => {
	return (
		<>
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

			<div
				className={cn(styles.banner)}
				style={{
					background: `url(${banner}) center`,
				}}
			>
				<UiContainer>12</UiContainer>
			</div>
		</>
	);
};

export default Header;
