import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Cart } from './cart';
import { useState, useContext } from 'react';
import { CartContext } from '../App';
import * as $AB from 'jquery';
export const Nav = () => {
	$AB('#myDD').on('hide.bs.dropdown', function (e) {
		if (e.clickEvent) {
			e.preventDefault();
		}
	});

	const [opa, setOpa] = useState(1);
	const handleEnter = (e) => {
		setOpa(0.6);
	};
	const handleExit = (e) => {
		setOpa(1);
	};
	const { cartData, setCartData } = useContext(CartContext);
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
					<div
						class="nav-item dropdown align-items-center justify-content-center"
						id="myDD"
					>
						<a
							class="nav-link dropdown-toggle cart-container py-0 "
							href="#"
							data-toggle="dropdown"
							aria-expanded="false"
						>
							<AiOutlineShoppingCart
								style={{ color: 'white', fontSize: '2rem', opacity: opa }}
								className="cart-cart-ico hoverIco"
								onMouseEnter={handleEnter}
								onMouseLeave={handleExit}
							/>
							<div
								className="cartNumDisplay hoverIco"
								onMouseEnter={handleEnter}
								onMouseLeave={handleExit}
								style={{ opacity: opa }}
							>
								{cartData.length}
							</div>
						</a>
						<Cart />
					</div>
				</div>
			</div>
		</nav>
	);
};
