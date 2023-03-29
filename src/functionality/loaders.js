// const URL = 'https://cetamdapi.onrender.com/gigs/';
const URL = 'http://localhost:8888/inv';
const URL2 = 'http://localhost:8888/cart';

export const inventoryLoader = async () => {
	// const authToken = document.cookie.split('token=')[1]
	// console.log(authToken)
	const response = await fetch(URL);
	const inventory = await response.json();
	return inventory;
};

export const itemLoader = async ({ params }) => {
	const response = await fetch(URL + '/' + params.id);
	const item = await response.json();
	return item;
};

export const cartLoader = async () => {
	const response = await fetch(URL2);
	const user = await response.json();
	const cart = user.cart;
	return cart;
};
