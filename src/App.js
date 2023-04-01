import { Outlet, useLoaderData } from 'react-router-dom';
import { Nav } from './components/nav';
import { Footer } from './components/footer';
import { createContext, useState } from 'react';

import './App.css';
import './styling.scss';
export const CartContext = createContext({
	cartData: [],
	setCartData: () => {},
});
function App() {
	const inventory = useLoaderData();
	const [cartData, setCartData] = useState(inventory);
	inventory.map((e) => {
		console.log(e, '<<<<<<<<<<');
	});

	return (
		<div className="App">
			<CartContext.Provider value={{ cartData, setCartData }}>
				<Nav />
				<Outlet />
				<Footer />
			</CartContext.Provider>
		</div>
	);
}

export default App;
