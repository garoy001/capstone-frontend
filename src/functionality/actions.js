import { redirect } from 'react-router-dom';
const url = 'https://capstonebackend-eylv.onrender.com';

export const createAction = async ({ request }) => {
	const formData = await request.formData();

	const newUser = {
		name: formData.get('name'),
		cart: [],
	};

	await fetch(url + '/cart', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(newUser),
	});
	return redirect('/inv');
};
export const addToCart = async (item) => {
	await fetch(url + '/inv', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(item),
	});
	window.location.reload(false);
	return redirect('/');
};
export const updateCart = async () => {
	const response = await fetch(url + '/inv');
	const inventory = await response.json();
	console.log(inventory);
	window.localStorage.setItem('currentCart', JSON.stringify(inventory));
	window.location.reload(false);

	return inventory;
};

export const updateAction = async ({ request, params }) => {
	console.log('update action >>>> ');
	const formData = await request.formData();
	const id = params.id;

	const updatedCart = {
		name: formData.get('itemName'),
		price: formData.get('itemPrice'),
	};

	console.log('update action >>>> id= ' + id);
	console.table(updatedCart);
	await fetch(url + '/inv/' + id, {
		method: 'put',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(updatedCart),
	});
	// window.location.reload(false);
	return redirect('/');
};
export const deleteAction = async ({ params }) => {
	const id = params.id;
	await fetch(url + '/inv/' + id, {
		method: 'delete',
	});
	window.location.reload(false);
	return redirect('/');
};
