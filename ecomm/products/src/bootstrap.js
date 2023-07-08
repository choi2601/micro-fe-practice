import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 3; i++) {
    const name = faker.commerce.productName();

    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

// Context/Situation #1
// Running this file in development in isolation
// Using local index.html file
// Which DEFNITELY has an element with an id of 'dev-products'
// want to immediately render app into that element

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");

  // Assuming container doen't have an element
  // with id dev-products
  if (el) {
    // probably running in isolation
    mount(el);
  }
}

// Context/Situation #2
// Running this file in development or production
// through the CONTAINER app
// NO GUARANTEE that an element with an id of 'dev-products'
// DO NOT WANT try to immediately render the app

export { mount };
