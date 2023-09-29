import './Button.css';

interface ButtonProps {
	children: string | number;
	handleClick?(): void;
}

export const Button: React.FC<ButtonProps> = ({ children, handleClick }) => {
	return <button onClick={handleClick}>{children}</button>;
};
