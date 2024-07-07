import { BrowserRouter } from 'react-router-dom';
import Router from '../components/Router';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { Provider } from 'react-redux';
import store from './store.js';

const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Header />
				<Router />
				<Footer />
			</BrowserRouter>
		</Provider>
	);
};

export default App;
