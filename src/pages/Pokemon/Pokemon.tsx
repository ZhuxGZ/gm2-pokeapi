import './Pokemon.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IPokemonDetailed } from '../../assets/types/PokemonType';
import { useParams } from 'react-router-dom';
import { PokemonStats, PokemonTypes } from '../../components';

export const Pokemon = () => {
	const [pokemonData, setPokemonData] = useState<IPokemonDetailed>();
	const [loading, setLoading] = useState(false);
	const { id } = useParams();

	useEffect(() => {
		setLoading(true);

		fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
			.then((response) => response.json())
			.then((pokemon) => setPokemonData(pokemon))
			.catch((error) => console.log(error))
			.finally(() => setLoading(false));
	}, [id]);

	if (!pokemonData) return null;

	return (
		<div>
			<Link to={'/'}>Back</Link>
			<img className="pokemon-image" src={pokemonData.sprites.front_default} alt="" />
			<h1 className="pokemon-name">{pokemonData.name}</h1>
			<PokemonTypes types={pokemonData.types} />
			<PokemonStats stats={pokemonData.stats} />
		</div>
	);
};
