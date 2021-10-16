import { Link } from "react-router-dom";

import { products } from "../../products";

import ProductAlert from "../../components/ProductAlert";
import ShowPriceAlert from "../../components/ShowPriceAlert";

function Home() {
  
  const handleShare = (id) => {
    alert(`O produto [ ${id} ] foi compartilhado.`);
  };

  const handleNotify = () => {
    alert("Vc sera notificado assim que este produto estiver em promocao");
  };

  return (
    <>
      <h1>:: All Products List ::</h1>
      
      <br />

      {products.map((product) => (
        <div key={product.id} style={{ flexDirection:"column" }}>
          <p>
            <Link to = {`/products/${product.id}`}> # {product.name} </Link>
          </p>

          <p>
            Descricao: {product.description}
          </p>

          <ShowPriceAlert product={product} />
          <br />

          <button onClick={() => handleShare(product.id)}> Share </button>
          <br />
          
          <ProductAlert product={product} handler={handleNotify} />
          <br /><br />
        </div>
      ))}
    </>
  );
}

export default Home;