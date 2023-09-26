import './App.css';
import { Header, Button, ButtonGroup, CardView } from './components';

function App() {
	return (
		<>
			<Header />
			<main>
				<ButtonGroup>
					<Button>Prev</Button>
					<Button>Next</Button>
				</ButtonGroup>
				<CardView />
			</main>
		</>
	);
}

export default App;
