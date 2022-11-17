const SingleProduct = ({ prod }) => {
    return (
        <div className="products">
            <img src={prod.image} alt={prod.name} />
            <div className="productDesc">
                <span style={{ fontWeight: 700}}>{prod.name}</span>
                <span>{prod.price%1==0 ? parseInt(prod.price) : prod.price}&nbsp;€</span>
            </div>
            <button className="add">Add to cart</button>
        </div>
    );
}

export default SingleProduct;