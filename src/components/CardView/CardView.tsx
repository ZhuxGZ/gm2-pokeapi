import './CardView.css';
import { useEffect, useState } from 'react';
import { Card } from '..';

interface IPokemons {
	name: string;
	url: string;
}

export const CardView = () => {
	const [pokemons, setPokemons] = useState<IPokemons[]>([]);
	useEffect(() => {
		try {
			fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
				.then((response) => response.json())
				.then((data) => setPokemons(data.results));
		} catch (error) {
			console.log(Error);
		}
	}, []);

	return (
		<section className="card-view">
			{pokemons &&
				pokemons.map((pokemon) => {
					return <Card name={pokemon.name} />;
				})}
		</section>
	);
};
