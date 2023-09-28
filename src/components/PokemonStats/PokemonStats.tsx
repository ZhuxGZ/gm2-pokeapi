import './PokemonStats.css';
import { Progress } from '@chakra-ui/react';
import { IStats } from '../../assets/types/PokemonType';

interface IPokemonStatsProps {
	stats: IStats[];
}

const COLORS = {
	hp: 'green',
	attack: 'red',
	defense: 'blue',
	speed: 'orange',
};

export const PokemonStats = ({ stats }: IPokemonStatsProps) => {
	return (
		<div className="pokemon-stats">
			{stats &&
				stats.map((stat) => {
					if (stat.stat.name === 'special-attack' || stat.stat.name === 'special-defense')
						return;
					return (
						<div key={stat.stat.name} className="stat">
							<p>{stat.stat.name}</p>
							<Progress
								value={stat.base_stat}
								colorScheme={COLORS[stat.stat.name as keyof typeof COLORS]}
								sx={{ borderRadius: '1em' }}
							/>
						</div>
					);
				})}
		</div>
	);
};
