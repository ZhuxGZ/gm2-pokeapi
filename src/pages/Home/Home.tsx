import { Button, ButtonGroup, CardView, SearchBar } from '../../components';
import { useState } from 'react';

export const Home = () => {
	const [filterBy, setFilterBy] = useState('');
	const [index, setIndex] = useState(0);

	return (
		<>
			<div style={{ display: 'grid', placeContent: 'center' }}>
				<SearchBar getFilter={setFilterBy} />
			</div>
			<ButtonGroup>
				<Button handleClick={() => setIndex(index === 0 ? 0 : index - 1)}>Prev</Button>
				<Button handleClick={() => setIndex(index + 1)}>Next</Button>
			</ButtonGroup>
			<CardView filterBy={filterBy} index={index} />
		</>
	);
};
