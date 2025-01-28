import useFetch from "./index.jsx";

export default function UseFetchHookTest() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  console.log(data, error, pending);

  return (
    <div>
      <h1>Use fetch hook</h1>
      {pending ? <h3>Pending! please wait...</h3> : null}
      {error ? <h3>{error}</h3> : null}
      {data && data.products && data.products.length
        ? data.products.map((productItem) => {
            return <p key={productItem.key}>{productItem.title}</p>;
          })
        : null}
    </div>
  );
}
