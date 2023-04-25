import cn from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import UiContainer from '@components/UiContainer/UiContainer';
import UiGrid from '@components/UiGrid/UiGrid';

import BurgerNavbar from '@ui/BurgerNavbar/BurgerNavbar';
import Navbar from '@ui/Navbar/Navbar';
import ProgressiveImage from '@ui/ProgressiveImage/ProgressiveImage';
import MediaWidthView from '@ui/mediaQueries/MediaWidthView/MediaWidthView';

import banner from '@media/backgrounds/space.png';
import logotype from '@media/branding/logo.png';
import pegas from '@media/images/unicorn.png';

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
					<div className={cn(styles.textBlock)}>
						<h2>IT-компания “Веб-Пегас” приветствует вас.</h2>

						<div className={cn(styles.underHeader)}>
							Мы небольшая команда опытных и талантливых специалистов, которая
							ценится своей надежностью, ответственность и уникальными подходами
							к решению ваших задач или проблем.
						</div>

						<div className={cn(styles.seeMore)}>Подробнее</div>
					</div>

					<div className={cn(styles.pegasBlock)}>
						<div className={cn(styles.circle)}>
							<div className={cn(styles.pegasPlaceholder)}>
								<ProgressiveImage
									src={pegas}
									loaderColorScheme={{
										backgroundColor: 'trasparent',
										loaderColor: 'white',
									}}
								/>
							</div>
						</div>
					</div>

					<div className={cn(styles.patch)}>
						<div className={cn(styles.word)}>{`</Web Pegas>`}</div>
						<div className={cn(styles.word)}>{`</Web Pegas>`}</div>

						<div className={cn(styles.word)}>{`</Web Pegas>`}</div>

						<MediaWidthView maxWidth={405}>
							<div className={cn(styles.word)}>{`</Web Pegas>`}</div>
						</MediaWidthView>

						<MediaWidthView minWidth={644}>
							<div className={cn(styles.word)}>{`</Web Pegas>`}</div>
						</MediaWidthView>

						<MediaWidthView minWidth={952}>
							<div className={cn(styles.word)}>{`</Web Pegas>`}</div>
						</MediaWidthView>

						<MediaWidthView minWidth={1628}>
							<div className={cn(styles.word)}>{`</Web Pegas>`}</div>
						</MediaWidthView>
					</div>
				</UiGrid.Section>
			</div>
		</>
	);
};

export default Header;
