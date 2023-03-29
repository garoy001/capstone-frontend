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

export const updateAction = async ({ request, params }) => {
	console.log('update action >>>> ');
	const formData = await request.formData();
	const id = params.id;
	const updatedCart = {
		name: formData.get('name'),
		price: formData.get('price'),
		amount: formData.get('amount'),
		image: formData.get('image'),
	};
	const bodyObj = {
		cart: updatedCart,
		operation: params.op,
	};
	console.log('update action >>>> id= ' + id);
	console.table(updatedCart);
	await fetch(url + '/cart/' + id, {
		method: 'put',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(bodyObj),
	});
	return redirect('/inv');
};
export const deleteAction = async ({ params }) => {
	const id = params.id;
	await fetch(url + '/cart/' + id, {
		method: 'delete',
	});
	return redirect('/inv');
};
