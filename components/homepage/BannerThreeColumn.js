const BannerThreeColumn = () => {
    return (
        <div className="banner-three-column mb-45">
		<div className="container">
			<div className="row">
				<div className="col-lg-4 col-md-4 mb-sm-30">

					<div className="single-banner">
						<a href="shop-left-sidebar.html">
							<img src="../../assets/images/banners/outdoor.jpg" className="img-fluid" alt=""/>
						</a>
					 <div className="text-content">
							<h5>Design Creative</h5>
							<h3>Modern and Clean</h3>
							<h4>From  $60.99 - Sale 20%</h4>
						</div>
					</div>

				</div>
				<div className="col-lg-4 col-md-4 mb-sm-30">
					<div className="single-banner">
						<a href="shop-left-sidebar.html">
							<img src="../../assets/images/banners/minimal.jpg" className="img-fluid" alt=""/>
						</a>
						<div className="text-content">
							<h5>Bestselling Products</h5>
							<h3>Ceiling Light Modern</h3>
							<h4>Only  from  $79.00</h4>
						</div> 
					</div>

				</div>
				<div className="col-lg-4 col-md-4">

					<div className="single-banner">
						<a href="shop-left-sidebar.html">
							<img src="../../assets/images/banners/clean.jpg" className="img-fluid" alt=""/>
						</a>
						 <div className="text-content">
							<h5>Onsale Products</h5>
							<h3>Drop Chair - Quickship</h3>
							<h4>Selling Off  30%</h4>
						</div> 
					</div>
				</div>
			</div>
		</div>
	</div>
    )
}

export default BannerThreeColumn;