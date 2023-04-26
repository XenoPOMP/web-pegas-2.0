import cn from 'classnames';
import { motion } from 'framer-motion';
import {
	FC,
	PropsWithChildren,
	ReactNode,
	useLayoutEffect,
	useRef,
	useState,
} from 'react';

import styles from './DragMenu.module.scss';
import { DragMenuProps } from './DragMenu.props';

const DragMenu: FC<PropsWithChildren<DragMenuProps>> = ({
	children,
	classNames,
	axis,
}) => {
	const constraintRef = useRef<HTMLDivElement | null>(null);

	return (
		<motion.div
			ref={constraintRef}
			className={cn(classNames?.constraint, styles.dragElement)}
		>
			<motion.div
				drag={axis}
				dragConstraints={constraintRef}
				dragElastic={0.2}
				className={classNames?.draggable}
			>
				{children}
			</motion.div>
		</motion.div>
	);
};

export default DragMenu;
