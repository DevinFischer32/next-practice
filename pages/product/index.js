import Link from "next/dist/client/link";

function Product({ productId = 100 }) {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h1>
        <Link href="/product/1">
          <a>Product 1</a>
        </Link>
      </h1>
      <h1>
        <Link href="/product/2">
          <a>Product 2</a>
        </Link>
      </h1>
      <h1>
        <Link href="/product/3">
          <a>Product 3</a>
        </Link>
      </h1>
      <h1>
        <Link href={`/product/${productId}`}>
          <a>Product {productId}</a>
        </Link>
      </h1>
    </>
  );
}

export default Product;
