import './PokemonTypes.css';
import { Badge } from '@chakra-ui/react';
import { IType } from '../../assets/types/PokemonType';

interface PokemonTypesProps {
	types: IType[];
}

const TYPE_COLORS = {
	normal: 'gray',
	fire: 'red',
	water: 'blue',
	grass: 'green',
	electric: 'yellow',
	flying: 'blue',
};

export const PokemonTypes = ({ types }: PokemonTypesProps) => {
	return (
		<div className="pokemon-types">
			{types.map((type) => {
				return (
					<Badge
						key={type.type.name}
						margin={'0.5em'}
						fontSize={'1em'}
						colorScheme={TYPE_COLORS[type.type.name as keyof typeof TYPE_COLORS]}
					>
						{type.type.name}
					</Badge>
				);
			})}
		</div>
	);
};
