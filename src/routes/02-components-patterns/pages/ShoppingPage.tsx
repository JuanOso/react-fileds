import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components/ProductCard";

const product = {
  id: "1",
  title: "coffee Mug",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title={""} />
          <ProductButtons />
          <h1>hola mundo</h1>
        </ProductCard>
      </div>
    </div>
  );
};
