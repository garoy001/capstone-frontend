import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Cart } from './cart';
import { createContext, useState } from 'react';
export const CartContext = createContext({
	cartData: {},
	setCartData: () => {},
});
export const Nav = () => {
	const [cartData, setCartData] = useState(0);
	return (
		<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark ">
			<div class="container justify-content-center">
				<a class="navbar-brand" href="#">
					Capstone Shopping
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarCollapse"
					aria-controls="navbarCollapse"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarCollapse">
					<ul class="navbar-nav me-auto mb-2 mb-md-0">
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="#home">
								Home
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#featured-products">
								Featured
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#products">
								Products
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#about">
								About
							</a>
						</li>
					</ul>
				</div>
				<div>
					<CartContext.Provider value={{ cartData, setCartData }}>
						<div class="nav-item dropdown align-items-center justify-content-center">
							<a
								class="nav-link dropdown-toggle cart-container py-0 "
								href="#"
								data-toggle="dropdown"
								aria-expanded="false"
							>
								<AiOutlineShoppingCart
									style={{ color: 'white', fontSize: '2rem' }}
								/>
								<div className="cartNumDisplay">{cartData}</div>
							</a>
							<Cart />
						</div>
					</CartContext.Provider>
				</div>
			</div>
		</nav>
	);
};
