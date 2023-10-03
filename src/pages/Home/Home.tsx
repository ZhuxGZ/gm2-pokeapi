import { Button, ButtonGroup, CardView, SearchBar } from '../../components';
import { useState, useEffect } from 'react';
import { usePageNumber } from '../../context/PageNumberContext';
import { usePage } from '../../store/pagNumberStore';
import { observer } from 'mobx-react-lite';

export interface IPokemon {
	name: string;
	url: string;
}

export const Home = observer(() => {
	const { pagNumber, increment, decrement } = usePage();
	const [pokemons, setPokemons] = useState<IPokemon[]>([]);
	const [searchText, setSearchText] = useState<string>('');
	const [pokemonsCount, setPokemonsCount] = useState<number>(0);
	const quantityOfCards = 20;

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0`)
			.then((response) => response.json())
			.then((data) => {
				setPokemonsCount(data.count);
				setPokemons(data.results);
			});
	}, []);

	const filteredPokemons = pokemons.filter((p) => p.name.includes(searchText));
	const pageQuantity = Math.floor(pokemonsCount / quantityOfCards); //20 is the number of cards per page

	const incrementPagNum = () => {
		pagNumber === pageQuantity ? pageQuantity : increment();
	};
	const decrementPagNum = () => {
		pagNumber === 0 ? 0 : decrement();
	};

	return (
		<>
			<div style={{ display: 'grid', placeContent: 'center' }}>
				<SearchBar setSearchText={setSearchText} />
			</div>
			<ButtonGroup>
				<Button handleClick={decrementPagNum}>Prev</Button>
				<Button>{`${pagNumber + 1} / ${pageQuantity + 1}`}</Button>
				<Button handleClick={incrementPagNum}>Next</Button>
			</ButtonGroup>
			<CardView pokemons={filteredPokemons} numOfCards={quantityOfCards} />
		</>
	);
});
