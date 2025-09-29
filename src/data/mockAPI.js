import products from "./products";

export default function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
}

export function getProductById(id) {
  return new Promise((resolve) => {
    const producto = products.find((prod) => prod.id === Number(id));
    resolve(producto);
  });
}

export function getProductsByMarca(marca) {
  return new Promise((resolve) => {
      resolve(products.filter((prod) => prod.marca === marca));
  });
}