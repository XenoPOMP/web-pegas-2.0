import cn from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import Portal from '@components/Portal/Portal';
import UiContainer from '@components/UiContainer/UiContainer';

import Navbar from '@ui/Navbar/Navbar';
import MediaWidthView from '@ui/mediaQueries/MediaWidthView/MediaWidthView';

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

					<MediaWidthView minWidth={1512}>
						<Navbar />
					</MediaWidthView>

					<MediaWidthView maxWidth={1511}>Burger menu</MediaWidthView>

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
