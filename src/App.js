import { Outlet } from 'react-router-dom';
import { Nav } from './components/nav';
import { Footer } from './components/footer';
import './App.css';
import './styling.scss';

function App() {
	return (
		<div className="App">
			<Nav />
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
