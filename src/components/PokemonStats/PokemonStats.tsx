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
			<h2>Base Stats</h2>
			{stats &&
				stats.map((stat) => {
					if (stat.stat.name === 'special-attack' || stat.stat.name === 'special-defense')
						return;
					return (
						<div key={stat.stat.name} className="stat">
							<label>{stat.stat.name}</label>
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
