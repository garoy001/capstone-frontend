import { useState, useContext } from 'react';
import { CartContext } from '../App';
import { CartItem } from './cartItem';
export const Cart = () => {
	let cartTotal;
	const [cartItems, setCartItems] = useState({});
	const { cartData, setCartData } = useContext(CartContext);
	console.log('///// ', cartData);
	return (
		<ul class="dropdown-menu cart-dropdown">
			{cartData.map((item) => {
				console.log(item);
				return (
					<li>
						<CartItem
							img={item.image}
							name={item.name}
							cost={item.price}
							amount={item.amount}
						/>
					</li>
				);
			})}
			<li>
				<a class="dropdown-item cart-dropdown-item" href="#">
					<button className="btn btn-primary cart-dropdown-checkout-button">
						Checkout
					</button>
				</a>
			</li>
		</ul>
	);
};
