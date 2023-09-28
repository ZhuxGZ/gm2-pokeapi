import { Button, ButtonGroup, CardView, SearchBar } from '../../components';
import { useState, useEffect } from 'react';

export interface IPokemon {
	name: string;
	url: string;
}

export const Home = () => {
	const [index, setIndex] = useState(0);
	const [pokemons, setPokemons] = useState<IPokemon[]>([]);
	const [searchText, setSearchText] = useState<string>('');
	const [pokemonsCount, setPokemonsCount] = useState<number>(0);

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0`)
			.then((response) => response.json())
			.then((data) => {
				setPokemonsCount(data.count);
				console.log(data.count);
				setPokemons(data.results);
			});
	}, []);

	const filteredPokemons = pokemons.filter((p) => p.name.includes(searchText));
	const pageQuantity = Math.floor(pokemonsCount / 20); //20 is the number of cards per page

	const incrementIndex = () => {
		setIndex(index === pageQuantity ? pageQuantity : index + 1);
	};
	const decrementIndex = () => {
		setIndex(index === 0 ? 0 : index - 1);
	};

	return (
		<>
			<div style={{ display: 'grid', placeContent: 'center' }}>
				<SearchBar setSearchText={setSearchText} />
			</div>
			<ButtonGroup>
				<Button handleClick={decrementIndex}>Prev</Button>
				<Button handleClick={incrementIndex}>Next</Button>
			</ButtonGroup>
			<CardView pokemons={filteredPokemons} index={index} />
		</>
	);
};
