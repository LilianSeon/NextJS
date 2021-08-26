import Image from 'next/image'

const Product = ({ product }) => {
  //console.log(product)
  return (
    <div className="owl-item active" style={{ width: '223.8px', marginRight: '10px' }}>
      <div className="row_items ">
        <div className="product-layout product-customize">
          <div className="product-thumb transition">
            <div className="image">
              <a href="http://demo.towerthemes.com/tt_furnilife/index.php?route=product/product&amp;product_id=54">
                <Image height="213" width="213" className="img-responsive" loader={() => product.media.source} src={product.media.source} alt={product.media.source} />
              </a>

              <div className="actions-link">
                <button className="btn-wishlist" type="button" data-toggle="tooltip" title="" onclick="wishlist.add('54');" data-original-title="Add to Wish List"><i className="ion-android-favorite-outline"></i><span>Add to Wish List</span></button>
              </div>
              <div id="Countdown54-0-230" className="box-timer"></div> 						</div>
            <div className="product-inner">
              <p className="manufacture-product">
                <a href="http://demo.towerthemes.com/tt_furnilife/index.php?route=product/manufacturer/info&amp;manufacturer_id=8">Buxton</a>
              </p>
              <h4 className="product-name"><a href="http://demo.towerthemes.com/tt_furnilife/index.php?route=product/product&amp;product_id=54">{product.name}</a></h4>

              <div className="product-caption">
                <div className="ratings">
                  <div className="rating-box">
                    <div className="rating4">rating</div>
                    <span className="text-rating">(4)</span>
                  </div>
                </div>
                <p className="price">
                  {product.price.formatted_with_code}
                  <span className="price-tax">Ex Tax: $102.99</span>
                </p>
              </div>
              <div className="product-intro">

                <div className="action-link2">
                  <button className="btn-cart" type="button" data-toggle="tooltip" title="" onclick="" data-original-title="Add to Cart"><i className="ion-android-cart"></i><span>Add to Cart</span></button>
                  <button className="btn-compare" type="button" data-toggle="tooltip" title="" onclick="" data-original-title="Compare this Product"><i className="ion-android-options"></i><span>Compare this Product</span></button>
                  <button className="btn-quickview" type="button" data-toggle="tooltip" title="" onclick="" data-original-title="Quick View"><i className="ion-android-open"></i><span>Quick View</span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></div>


  );
};

export default Product;
