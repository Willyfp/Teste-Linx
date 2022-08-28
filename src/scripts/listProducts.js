const listProducts = document.querySelector(".list-products");

axios
  .get(
    "https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1"
  )
  .then((res) => {
    const { data } = res;

    data.products.forEach((product) => {
      const newProduct = createProduct(product);

      listProducts.innerHTML += newProduct;
    });
  });

const createProduct = (product) => {
  const { image, name, oldPrice, price, description, installments } = product;

  console.log(image);

  return `
    <div class="product">
      <img src="https:${image}" alt="${name}" />
      <h3>${name}</h3>
      <p>${description}</p>
      <p>De: R$${oldPrice.toFixed(2)}</p>
      <h2>Por: R$${price.toFixed(2)}</h2>
      <p>ou ${installments.count}x de R$${installments.value.toFixed(2)}</p>
      <button class="button button-product">Comprar</button>
    </div>
  `;
};
