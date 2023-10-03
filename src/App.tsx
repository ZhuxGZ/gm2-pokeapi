import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home, Pokemon } from './pages';
import { AppLayout } from './components';

function App() {
	return (
		<AppLayout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/pokemon/:id" element={<Pokemon />} />
			</Routes>
		</AppLayout>
	);
}
export default App;
