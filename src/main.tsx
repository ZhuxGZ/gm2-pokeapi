import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { PageContext, numPageStore } from './store/pagNumberStore.ts';
import { ChakraProvider } from '@chakra-ui/react';

const store = numPageStore.create();

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<ChakraProvider>
				<PageContext.Provider value={store}>
					<App />
				</PageContext.Provider>
			</ChakraProvider>
		</BrowserRouter>
	</React.StrictMode>
);
