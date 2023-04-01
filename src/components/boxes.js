import { addToCart, updateCart } from '../functionality/actions';
const handleClick = (iteminfo) => {
	addToCart(iteminfo);
	updateCart();
};
export const WhiteBox = (props) => {
	console.log(props);
	return (
		<div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden boxHover">
			<div class="my-3 py-3 boxText">
				<h2 class="display-5">{props.title}</h2>
				<p class="lead">{props.subtitle}</p>
			</div>
			<div
				class="bg-light shadow-sm mx-auto boxShow"
				style={{
					backgroundImage: 'url(' + props.img + ')',
				}}
			></div>
			<div>
				<button
					className="btn btn-success mt-5 mb-5"
					onClick={() => {
						handleClick(props.itemInfo);
					}}
				>
					Add To Cart
				</button>
			</div>
		</div>
	);
};
export const BlackBox = (props) => {
	return (
		<div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden boxHover">
			<div class="my-3 p-3 boxText">
				<h2 class="display-5">{props.title}</h2>
				<p class="lead">{props.subtitle}</p>
			</div>
			<div
				class="bg-dark shadow-sm mx-auto boxShow"
				style={{
					backgroundImage: 'url(' + props.img + ')',
				}}
			></div>
			<div>
				<button
					className="btn btn-success mt-5 mb-5"
					onClick={() => {
						handleClick(props.itemInfo);
					}}
				>
					Add To Cart
				</button>
			</div>
		</div>
	);
};
export const PlainBox = (props) => {
	return (
		<div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden boxHover">
			<div class="my-3 py-3 boxText">
				<h2 class="display-5">{props.title}</h2>
				<p class="lead">{props.subtitle}</p>
			</div>
			<div
				class="bg-body shadow-sm mx-auto boxShow"
				style={{
					backgroundImage: 'url(' + props.img + ')',
				}}
			></div>
			<div>
				<button
					className="btn btn-success mt-5 mb-5"
					onClick={() => {
						handleClick(props.itemInfo);
					}}
				>
					Add To Cart
				</button>
			</div>
		</div>
	);
};
