import './Button.css';

interface IButtonProps {
	children: string;
}

export const Button: React.FC<IButtonProps> = ({ children }) => {
	return <button>{children}</button>;
};
