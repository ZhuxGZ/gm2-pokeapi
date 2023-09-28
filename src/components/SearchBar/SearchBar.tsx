import './SearchBar.css';

interface SearchBarProps {
	getFilter(value: string): void;
}

export const SearchBar = ({ getFilter }: SearchBarProps) => {
	return (
		<input
			onChange={(event) => getFilter(event.target.value)}
			className="search-bar"
			placeholder="Search a pokemon"
		></input>
	);
};
