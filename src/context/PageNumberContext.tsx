import { useState, useContext, createContext } from 'react';

export const PageNumberContext = createContext();

export const usePageNumber = () => {
	return useContext(PageNumberContext);
};

export const PageNumberProvider = ({ children }) => {
	const [pageNumber, setPageNumber] = useState(0);

	const incrementPageNumber = () => {
		setPageNumber(pageNumber + 1);
	};

	const decrementPageNumber = () => {
		setPageNumber(pageNumber - 1);
	};

	return (
		<PageNumberContext.Provider value={{ pageNumber, incrementPageNumber, decrementPageNumber }}>
			{children}
		</PageNumberContext.Provider>
	);
};
