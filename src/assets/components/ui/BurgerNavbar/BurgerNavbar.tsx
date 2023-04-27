import cn from 'classnames';
import { motion } from 'framer-motion';
import { FC } from 'react';

import NavbarItem from '@ui/Navbar/NavbarItem/NavbarItem';
import RawNavbar from '@ui/RawNavbar/RawNavbar';

import useBoolean from '@hooks/useBoolean';

import styles from './BurgerNavbar.module.scss';
import type { BurgerNavbarProps } from './BurgerNavbar.props';

const BurgerNavbar: FC<BurgerNavbarProps> = ({}) => {
	const [isToggled, toggle] = useBoolean(false);

	return (
		<div className={cn(styles.burgerNavbar)}>
			<svg
				onClick={toggle}
				viewBox='0 0 15 10'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path d='M0 0H15V2H0V0Z' fill='white' />
				<path d='M0 4H15V6H0V4Z' fill='white' />
				<path d='M0 8H15V10H0V8Z' fill='white' />
			</svg>

			<motion.div
				initial={{
					height: isToggled ? 'unset' : 0,
				}}
				animate={{
					height: isToggled ? 'unset' : 0,
				}}
				transition={{
					ease: isToggled ? 'easeOut' : 'easeIn',
					duration: 0.3,
				}}
				className={cn(styles.menuPlaceholder)}
			>
				<div className={cn(styles.menu)}>
					<RawNavbar />
				</div>
			</motion.div>
		</div>
	);
};

export default BurgerNavbar;
