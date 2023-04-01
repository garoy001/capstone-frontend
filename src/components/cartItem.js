export const CartItem = (props) => {
	console.log(props, ' p rops');
	return (
		<div className="cart-item-container">
			<img className="cart-item-img" src={props.img} />
			<p className="cart-item-name">{props.name}</p>
			<p className="cart-item-cost">{props.cost}</p>
			<div className="cart-item-amount-box">
				<p className="cart-item-amount">{props.amount}</p>
			</div>
			<button className="btn btn-danger">X</button>
		</div>
	);
};
