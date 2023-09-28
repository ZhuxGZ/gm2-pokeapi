import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Pokemon } from './pages';
import { AppLayout } from './components';

function App() {
	return (
		<AppLayout>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/pokemon/:id" element={<Pokemon />} />
				</Routes>
			</BrowserRouter>
		</AppLayout>
	);
}
export default App;
