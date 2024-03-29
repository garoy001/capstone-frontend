export const Footer = () => {
	return (
		<div class="container">
			<footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
				<p class="col-md-4 mb-0 text-muted">&copy; 2022 Capstone, Inc</p>

				<a
					href="/"
					class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
				></a>

				<ul class="nav col-md-4 justify-content-end">
					<li class="nav-item">
						<a href="#home" class="nav-link px-2 text-muted">
							Home
						</a>
					</li>
					<li class="nav-item">
						<a href="#products" class="nav-link px-2 text-muted">
							Products
						</a>
					</li>
					<li class="nav-item">
						<a href="#" class="nav-link px-2 text-muted">
							About
						</a>
					</li>
				</ul>
			</footer>
		</div>
	);
};
