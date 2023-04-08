import { CartState } from "../context/Context";

const Home = () => {
  const {
    state: { products },
  } = CartState();
  console.log(products);
  return (
    <div className="home">
      {/* <Filters /> */}
      <div className="product-container">
        {products.map((prod) => (
          <h1 key={prod.id}>{prod.name}</h1>
        ))}
      </div>
    </div>
  );
};

export default Home;
