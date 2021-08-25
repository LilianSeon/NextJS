
const Menu = () => {

    return(
        <div className="header-container header-sticky home-three-header pt-50 pt-md-25 pb-md-15 pt-sm-25 pb-sm-15 ">
		<div className="container-fluid">
			<div className="row align-items-center">
				<div className="col-lg-5 order-3 order-lg-1">
					<div className="main-menu">
						<nav>
							<ul>
								<li className="active menu-item-has-children"><a href="index.html">HOME</a>
									<ul className="sub-menu">
										<li><a href="index.html">Home Shop 1</a></li>
										<li><a href="index-2.html">Home Shop 2</a></li>
										<li><a href="index-3.html">Home Shop 3</a></li>
										<li><a href="index-4.html">Home Shop 4</a></li>
									</ul>
								</li>
								<li className="menu-item-has-children"><a href="shop-left-sidebar.html">Shop</a>
									<ul className="sub-menu">
										<li className="menu-item-has-children"><a href="shop-4-column.html">shop grid</a>
											<ul className="sub-menu">
												<li><a href="shop-3-column.html">shop 3 column</a></li>
												<li><a href="shop-4-column.html">shop 4 column</a></li>
												<li><a href="shop-left-sidebar.html">shop left sidebar</a></li>
												<li><a href="shop-right-sidebar.html">shop right sidebar</a></li>
											</ul>
										</li>
										<li className="menu-item-has-children"><a href="shop-list.html">shop List</a>
											<ul className="sub-menu">
												<li><a href="shop-list.html">shop List</a></li>
												<li><a href="shop-list-left-sidebar.html">shop List Left Sidebar</a></li>
												<li><a href="shop-list-right-sidebar.html">shop List Right Sidebar</a></li>
											</ul>
										</li>
										<li className="menu-item-has-children"><a href="single-product.html">Single Product</a>
											<ul className="sub-menu">
												<li><a href="single-product.html">Single Product</a></li>
												<li><a href="single-product-variable.html">Single Product variable</a></li>
												<li><a href="single-product-affiliate.html">Single Product affiliate</a></li>
												<li><a href="single-product-group.html">Single Product group</a></li>
												<li><a href="single-product-tabstyle-2.html">Tab Style 2</a></li>
												<li><a href="single-product-tabstyle-3.html">Tab Style 3</a></li>
												<li><a href="single-product-gallery-left.html">Gallery Left</a></li>
												<li><a href="single-product-gallery-right.html">Gallery Right</a></li>
												<li><a href="single-product-sticky-left.html">Sticky Left</a></li>
												<li><a href="single-product-sticky-right.html">Sticky Right</a></li>
												<li><a href="single-product-slider-box.html">Slider Box</a></li>

											</ul>
										</li>
									</ul>
								</li>

								<li className="menu-item-has-children"><a href="#">PAGES</a>
									<ul className="mega-menu three-column">
										<li><a href="#">Column One</a>
											<ul>
												<li><a href="cart.html">Cart</a></li>
												<li><a href="checkout.html">Checkout</a></li>
												<li><a href="wishlist.html">Wishlist</a></li>

											</ul>
										</li>
										<li><a href="#">Column Two</a>
											<ul>
												<li><a href="my-account.html">My Account</a></li>
												<li><a href="login-register.html">Login Register</a></li>
												<li><a href="faq.html">FAQ</a></li>
											</ul>
										</li>
										<li><a href="#">Column Three</a>
											<ul>
												<li><a href="compare.html">Compare</a></li>
												<li><a href="contact.html">Contact</a></li>
												<li><a href="about.html">About Us</a></li>
											</ul>
										</li>
										<li className="megamenu-banner text-center d-none d-lg-block">
											<a href="shop-left-sidebar.html">
												<img src="../assets/images/banners/megamenu-banner.jpg" className="img-fluid" alt=""/>
											</a>
										</li>
									</ul>
								</li>
								<li className="menu-item-has-children"><a href="#">BLOG</a>
									<ul className="sub-menu">
										<li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
										<li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
										<li><a href="blog-post-left-sidebar.html">Blog Post Left Sidebar</a></li>
										<li><a href="blog-post-right-sidebar.html">Blog Post Right Sidebar</a></li>
										<li><a href="blog-post-image-format.html">Blog Post Image Format</a></li>
										<li><a href="blog-post-image-gallery.html">Blog Post Image Gallery Format</a></li>
										<li><a href="blog-post-audio-format.html">Blog Post Audio Format</a></li>
										<li><a href="blog-post-video-format.html">Blog Post Video Format</a></li>
									</ul>
								</li>
								<li><a href="contact.html">CONTACT</a></li>
							</ul>
						</nav>
					</div>
				</div>
				<div className="col-12 col-lg-2 col-md-6 col-sm-6 order-1 order-lg-2 text-left text-lg-center">

					<div className="logo">
						<a href="index-3.html" className="img-fluid">
							<img src="../assets/images/logo2.png" alt=""/>
						</a>
					</div>

				</div>
				<div className="col-12 col-lg-5 order-2 order-lg-3 col-md-6 col-sm-6">

					<div className="header-icons d-flex justify-content-end">

						<div className="search-icon-menutop d-inline-block mr-20">
							<a href="" id="search-overlay-active-button">
								<i className="icon ion-md-search"></i>
							</a>
						</div>

						<div className="minicart-icon mr-20">
							<a href="" id="cart-icon">
								<span className="image"><i className="icon ion-md-cart"></i></span>
							</a>

							<div className="cart-floating-box hidden" id="cart-floating-box">
								<div className="cart-items">
									<div className="cart-float-single-item d-flex">
										<span className="remove-item" id="remove-item"><a href="#"><i className="icon ion-md-close"></i></a></span>
										<div className="cart-float-single-item-image">
											<a href="single-product.html"><img src="../assets/images/products/product01.jpg" className="img-fluid" alt=""/></a>
										</div>
										<div className="cart-float-single-item-desc">
											<p className="product-title"> <a href="single-product.html">Duis pulvinar obortis eleifend </a></p>
											<p className="quantity"> Qty: 1</p>
											<p className="price">$20.50</p>
										</div>
									</div>
									<div className="cart-float-single-item d-flex">
										<span className="remove-item"><a href="#"><i className="icon ion-md-close"></i></a></span>
										<div className="cart-float-single-item-image">
											<a href="single-product.html"><img src="../assets/images/products/product02.jpg" className="img-fluid" alt=""/></a>
										</div>
										<div className="cart-float-single-item-desc">
											<p className="product-title"> <a href="single-product.html">Fusce ultricies dolor vitae</a></p>
											<p className="quantity"> Qty: 1</p>
											<p className="price">$20.50</p>
										</div>
									</div>
								</div>
								<div className="cart-calculation">
									<div className="calculation-details">
										<p className="total">Subtotal <span>$22</span></p>
									</div>
									<div className="floating-cart-btn text-center">
										<a className="fl-btn pull-left" href="cart.html">View Cart</a>
										<a className="fl-btn pull-right" href="checkout.html">Checkout</a>
									</div>
								</div>
							</div>
						</div>


						<div className="settings-icon mr-20">
							<a href="" id="settings-icon">
								<i className="fa fa-cog"></i>
							</a>
							<div className="language-currency-list hidden" id="languageList">
								<ul>
									<li><a href="#">Language</a></li>
									<li><a href="#">- English</a></li>
									<li><a href="#">- Dutch</a></li>
									<li><a href="#">Currency</a></li>
									<li><a href="#">- USD</a></li>
									<li><a href="#">- EURO</a></li>
								</ul>
							</div>
						</div>


						<div className="user-icon">
							<a href="" id="user-icon">
								<i className="fa fa-user-circle"></i>
							</a>

							<div className="language-currency-list hidden" id="accountList">
								<ul>
									<li><a href="cart.html">Cart</a></li>
									<li><a href="checkout.html">Checkout</a></li>
									<li><a href="my-account.html">My Account</a></li>
									<li><a href="login-register.html">Login</a></li>
								</ul>
							</div>
						</div>

					</div>



				</div>
				<div className="col-12 order-4 d-block d-lg-none">
					<div className="mobile-menu"></div>
				</div>
			</div>
		</div>
	</div>
    );
};

export default Menu;