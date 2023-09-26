import './Card.css';
interface CardProps {
	name: string;
	image: string;
}

export const Card: React.FC<CardProps> = ({ name, image }) => {
	return (
		<div className="card">
			<img src={image} alt="" />
			<h3 className="card-name">{name}</h3>
		</div>
	);
};
