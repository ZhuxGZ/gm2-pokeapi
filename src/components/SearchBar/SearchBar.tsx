import './SearchBar.css';

interface SearchBarProps {
	setSearchText: (value: string) => void;
}

export const SearchBar = ({ setSearchText }: SearchBarProps) => {
	return (
		<input
			onChange={(event) => setSearchText(event.target.value.toLowerCase() ?? '')}
			className="search-bar"
			placeholder="Search a pokemon"
		></input>
	);
};
