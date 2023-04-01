import { Form } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { useState, useContext } from 'react';
import { CartContext } from '../App';
export const CartItem = (props) => {
	const { cartData, setCartData } = useContext(CartContext);
	let count = 0;
	const handleInput = (event) => {
		props[event.target.name] = event.target.value;
	};

	const [displayData, setDisplayData] = useState('block');
	const [updateData, setUpdateData] = useState('none');
	const handleClick = () => {
		if (count == 0) {
			setUpdateData('block');
			setDisplayData('none');
			count = 1;
		} else if (count == 1) {
			setUpdateData('none');
			setDisplayData('block');
			count = 0;
		}
	};

	return (
		<div className="cart-item-container">
			<img
				className="cart-item-img"
				src={props.img}
				style={{ display: displayData }}
			/>
			<p className="cart-item-name" style={{ display: displayData }}>
				{props.name}
			</p>
			<p className="cart-item-cost" style={{ display: displayData }}>
				${props.cost}
			</p>
			<div className="updater" style={{ display: updateData }}>
				<Form action={`/update/${props.id}`} method="post">
					<input
						type="text"
						name="itemName"
						placeholder={props.name}
						value={props.name}
					/>
					<input type="text" name="itemPrice" placeholder={props.cost} />
					<input type="submit" value={`✅`} />
				</Form>
			</div>
			<div className="btn-container" style={{ display: displayData }}>
				<Form action={`/delete/${props.id}`} method="post">
					<input type="submit" value={`X`} />
				</Form>
			</div>
			<button
				className="btn btn-primary"
				onClick={() => {
					handleClick();
				}}
			>
				<AiOutlineEdit style={{ fontSize: '15px' }} />
			</button>
		</div>
	);
};
