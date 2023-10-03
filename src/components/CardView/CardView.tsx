import './CardView.css';
import { Card } from '..';
import { IPokemon } from '../../pages/Home/Home';
import { usePage } from '../../store/pagNumberStore';

interface ICardViewProps {
	pokemons: IPokemon[];
	numOfCards: number;
}

export const CardView = ({ pokemons, numOfCards }: ICardViewProps) => {
	const { pagNumber } = usePage();
	return (
		<section className="card-view">
			{pokemons.map((pokemon, pokemonIndex) => {
				if (
					pokemonIndex <= (pagNumber + 1) * numOfCards - 1 &&
					pokemonIndex >= pagNumber * numOfCards
				)
					return <Card key={pokemon.url} name={pokemon.name} />;
			})}
		</section>
	);
};
