import React from 'react';
import './style/sass/m_pack.scss';
import {GlobalProvider} from './helper/context/Provider';
import {BrowserRouter as Router} from 'react-router-dom';
import PageRoutes from './routes';

function App() {
	return (
		<GlobalProvider>
			<Router>
				<PageRoutes />
			</Router>
		</GlobalProvider>
	);
}

export default App;
