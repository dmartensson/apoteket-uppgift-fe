export const ProductsPage = () => {
  // TODO fetch products
  const products = [{ name: "Alvedon" }, { name: "Ipren" }];

  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <div>{product.name}</div>
      ))}
    </div>
  );
};
