import { useEffect, useState } from 'react';
import './Card.css';
interface CardProps {
	name: string;
}

export const Card: React.FC<CardProps> = ({ name }) => {
	const [image, setImage] = useState<string>();

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
			.then((response) => response.json())
			.then((data) => setImage(data.sprites.front_default));
	}, [name]);

	return (
		<div className="card">
			<img src={image} alt="" />
			<h3 className="card-name">{name}</h3>
		</div>
	);
};
