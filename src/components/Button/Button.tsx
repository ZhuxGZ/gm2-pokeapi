import './Button.css';

interface IButtonProps {
	children: string;
	handleClick?(): void;
}

export const Button: React.FC<IButtonProps> = ({ children, handleClick }) => {
	return <button onClick={handleClick}>{children}</button>;
};
