import './CardView.css';
import { useEffect, useState } from 'react';
import { Card } from '..';
import { filter } from '@chakra-ui/react';
interface IPokemon {
	name: string;
	url: string;
}

interface ICardViewProps {
	filterBy: string;
	index: number;
}

export const CardView = ({ filterBy, index }: ICardViewProps) => {
	const [pokemons, setPokemons] = useState<IPokemon[]>([]);
	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0`)
			.then((response) => response.json())
			.then((data) => setPokemons(data.results));
	}, []);

	useEffect(() => {
		if (filterBy !== '') {
			const filterPokemons = pokemons.filter((pokemon) => pokemon.name.includes(filterBy));
			setPokemons(filterPokemons);
		}
	}, [filterBy]);

	return (
		<section className="card-view">
			{pokemons.map((pokemon) => {
				return <Card key={pokemon.url} name={pokemon.name} />;
			})}
		</section>
	);
};
