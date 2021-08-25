import Image from 'next/image'

const Product = ({ product }) => {
    //console.log(product)
  return (
      <div className="five wide column ui card">
        <a className="image" href="#link">
          <Image className="ui medium centered image" height="360" width="350" loader={() => product.media.source} src={product.media.source} title={product.name} alt={product.name}/>
        </a>
        <div className="content">
          <a className="header" href="#link">{product.name}</a>
          <div className="meta">
            <a className="time">{product.price.formatted_with_code}</a>
          </div>
        </div>
      </div>
  );
};

export default Product;
