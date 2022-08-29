const listProducts = document.querySelector(".list-products-email");

const createProduct = (product) => {
  const { image, name, oldPrice, price, description, installments } = product;

  return `
      <div class="product">
        <div class="image-div">
          <img src="https:${image}" alt="${name}" />
        </div>
  
        <div class="info-product">
          <h3>${name}</h3>
          <p class="description">${description}</p>
          <p>De: R$${oldPrice.toFixed(2)}</p>
          <h2>Por: R$${price.toFixed(2)}</h2>
          <p>ou ${installments.count}x de R$${installments.value.toFixed(2)}</p>
          <button class="button button-product">Comprar</button>
        </div>
      </div>
    `;
};

// Função que faz a chamada da próxima página da api
axios
  .get(
    "https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1"
  )
  .then((res) => {
    const { data } = res;

    data.products.forEach((product, index) => {
      if (index < 2) {
        const newProduct = createProduct(product);

        listProducts.innerHTML += newProduct;
      }
    });
  });
