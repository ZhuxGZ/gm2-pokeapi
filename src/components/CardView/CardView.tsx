import './CardView.css';
import { Card } from '..';
import { IPokemon } from '../../pages/Home/Home';

interface ICardViewProps {
	pokemons: IPokemon[];
	index: number;
}

export const CardView = ({ index, pokemons }: ICardViewProps) => {
	return (
		<section className="card-view">
			{pokemons.map((pokemon, pokemonIndex) => {
				if (pokemonIndex <= (index + 1) * 20 && pokemonIndex >= index * 20)
					return <Card key={pokemon.url} name={pokemon.name} />;
			})}
		</section>
	);
};
