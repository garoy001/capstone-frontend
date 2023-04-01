import { BlackBox, WhiteBox, PlainBox } from '../components/boxes';

export const Home = () => {
	return (
		<div className="home-div">
			<section id="home">
				<div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
					<div class="col-md-5 p-lg-5 mx-auto my-5">
						<h1 class="display-4 fw-normal">Punny headline</h1>
						<p class="lead fw-normal">
							And an even wittier subheading to boot. Jumpstart your marketing
							efforts with this example based on Apple’s marketing pages.
						</p>
						<a class="btn btn-outline-secondary" href="#">
							Coming soon
						</a>
					</div>
					<div class="product-device shadow-sm d-none d-md-block"></div>
					<div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
				</div>
			</section>

			<section id="featured-products">
				<div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
					<WhiteBox
						title="black hat"
						subtitle="$3.99"
						itemInfo={{ name: 'black hat', price: '3.99', amount: '1' }}
					/>
					<BlackBox />
					<WhiteBox />
				</div>
				<div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
					<WhiteBox />
					<BlackBox />
				</div>
			</section>
			<section id="products">
				<div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
					<PlainBox />
					<PlainBox />
				</div>

				<div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
					<PlainBox />
					<PlainBox />
				</div>
			</section>
		</div>
	);
};
