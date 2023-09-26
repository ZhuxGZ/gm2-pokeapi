import './ButtonGroup.css';
import { ReactNode, ReactPropTypes } from 'react';

export interface IButtonGroupProps extends ReactPropTypes {
	children: ReactNode[];
	position?: string;
}

export const ButtonGroup: React.FC<IButtonGroupProps> = ({ children, position = 'center' }) => {
	return (
		<div
			className={children.length === undefined ? '' : 'button-group'}
			style={{ display: 'flex', justifyContent: position }}
		>
			{children}
		</div>
	);
};
