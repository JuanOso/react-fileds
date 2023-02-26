import { ProductButtons, ProductImage, ProductTitle } from "../components";
import { ProductCard } from "../components";

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
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title="Taza de Café" />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
