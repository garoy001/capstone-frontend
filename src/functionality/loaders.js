const URL = 'https://capstonebackend-eylv.onrender.com/inv';
const URL2 = 'https://capstonebackend-eylv.onrender.com/cart';

export const inventoryLoader = async () => {
	const response = await fetch(URL);
	const inventory = await response.json();
	console.log(inventory);
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
