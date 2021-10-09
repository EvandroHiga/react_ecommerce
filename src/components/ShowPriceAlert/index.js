const showPrice = (price) => {
    alert(`---> R$ ${price}`);
};

function ShowPriceAlert({ product }){
    if(product.price <= 500)
        return <p>R$ {product.price}</p>
    else
        return <button onClick={ () => showPrice(product.price) }> Show me the price!!! </button>
}

export default ShowPriceAlert;