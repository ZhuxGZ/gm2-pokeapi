import './CardView.css';
import { Card } from '..';
import { IPokemon } from '../../pages/Home/Home';
import { usePageNumber } from '../../context/PageNumberContext';

interface ICardViewProps {
	pokemons: IPokemon[];
	numOfCards: number;
}

export const CardView = ({ pokemons, numOfCards }: ICardViewProps) => {
	const { pageNumber } = usePageNumber();
	return (
		<section className="card-view">
			{pokemons.map((pokemon, pokemonIndex) => {
				if (
					pokemonIndex <= (pageNumber + 1) * numOfCards - 1 &&
					pokemonIndex >= pageNumber * numOfCards
				)
					return <Card key={pokemon.url} name={pokemon.name} />;
			})}
		</section>
	);
};
