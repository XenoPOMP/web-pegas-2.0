import cn from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import UiContainer from '@components/UiContainer/UiContainer';
import UiGrid from '@components/UiGrid/UiGrid';

import BurgerNavbar from '@ui/BurgerNavbar/BurgerNavbar';
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

					<MediaWidthView maxWidth={1511}>
						<BurgerNavbar />
					</MediaWidthView>

					<MediaWidthView minWidth={1512}>
						<Link
							to={'/'}
							style={{
								opacity: 0,
								pointerEvents: 'none',
							}}
						>
							<img className={cn(styles.logo)} src={logotype} alt={'logo'} />
						</Link>
					</MediaWidthView>
				</UiContainer>
			</header>

			<div
				className={cn(styles.banner)}
				style={{
					background: `url(${banner}) center`,
				}}
			>
				<UiGrid.Section className={cn(styles.bannerContainer)}>
					<div className={cn(styles.textBlock)}>1</div>
				</UiGrid.Section>
			</div>
		</>
	);
};

export default Header;
