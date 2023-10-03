import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home, Pokemon } from './pages';
import { AppLayout } from './components';
import { PageNumberProvider } from './context/PageNumberContext';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
	return (
		<ChakraProvider>
			<AppLayout>
				<PageNumberProvider>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/pokemon/:id" element={<Pokemon />} />
					</Routes>
				</PageNumberProvider>
			</AppLayout>
		</ChakraProvider>
	);
}
export default App;
