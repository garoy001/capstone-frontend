import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router-dom';
import App from './App';
import { Home } from './pages/home';
import { Checkout } from './pages/checkout';
import {
	inventoryLoader,
	itemLoader,
	cartLoader,
} from './functionality/loaders';
import {
	createAction,
	updateAction,
	deleteAction,
} from './functionality/actions';
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />} loader={inventoryLoader}>
			<Route path="" element={<Home />} />
			<Route path="checkout" element={<Checkout />} />
			<Route path="create" action={createAction} />
			<Route path="update/:id" action={updateAction} />
			<Route path="delete/:id" action={deleteAction} />
		</Route>
	)
);

export default router;
