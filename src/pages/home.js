import { BlackBox, WhiteBox, PlainBox } from '../components/boxes';
import { Fade } from 'react-reveal';
export const Home = () => {
	return (
		<div className="home-div">
			<section id="home">
				<div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
					<div class="col-md-5 p-lg-5 mx-auto my-5">
						<h1 class="display-4 fw-normal">All Kinds of Shopping</h1>
						<p class="lead fw-normal">
							Shop your heart out with our completely random supply of items
						</p>
					</div>
					<div class="product-device shadow-sm d-none d-md-block"></div>
					<div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
				</div>
			</section>

			<section id="products">
				<div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
					<Fade>
						<WhiteBox
							title="black hat"
							subtitle="$3.99"
							img="https://images.unsplash.com/photo-1618354691792-d1d42acfd860?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
							itemInfo={{
								name: 'black hat',
								price: '3.99',
								amount: '1',
								image:
									'https://images.unsplash.com/photo-1618354691792-d1d42acfd860?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80',
							}}
						/>
					</Fade>
					<Fade>
						<BlackBox
							title="apple"
							subtitle="$1.99"
							img="https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
							itemInfo={{
								name: 'apple',
								price: '1.99',
								amount: '1',
								image:
									'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
							}}
						/>
					</Fade>
					<Fade>
						<WhiteBox
							title="black shoes"
							subtitle="$19.99"
							img="https://images.unsplash.com/photo-1582898967731-b5834427fd66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
							itemInfo={{
								name: 'black shoes',
								price: '19.99',
								amount: '1',
								image:
									'https://images.unsplash.com/photo-1582898967731-b5834427fd66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
							}}
						/>
					</Fade>
				</div>
				<div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
					<Fade>
						<WhiteBox title="" subtitle="" iteminfo={{}} />
					</Fade>
					<Fade>
						<BlackBox title="" subtitle="" iteminfo={{}} />
					</Fade>
				</div>
			</section>
			<section>
				<div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
					<Fade>
						<PlainBox title="" subtitle="" iteminfo={{}} />
					</Fade>
					<Fade>
						<PlainBox title="" subtitle="" iteminfo={{}} />
					</Fade>
				</div>

				<div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
					<Fade>
						<PlainBox title="" subtitle="" iteminfo={{}} />
					</Fade>

					<Fade>
						<PlainBox title="" subtitle="" iteminfo={{}} />
					</Fade>
				</div>
			</section>
		</div>
	);
};
