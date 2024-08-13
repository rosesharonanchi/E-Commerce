let submit = document.querySelector("#submit");
let cards = document.querySelectorAll(".card");
let total = document.querySelector("#total");
let orderWrapper = document.querySelector(".order-container");

let noItem = document.querySelector(".no-order");
let orderMade = document.querySelector(".order-made");
let myOrder = document.querySelectorAll(".my-order");
const productsWrapper = document.getElementById("products");

// ... rest of the product objects
let products = [
  {
    id: 0,
    title: "Waffle",
    description: "Waffles with Berries",
    quantity: 0,

    imageDesktop: "assets/images/image-waffle-desktop.jpg",
    imageThumbnail: "assets/images/image-waffle-thumbnail.jpg",
    imageMobile: "assets/images/image-waffle-mobile.jpg",
    price: 6.5,
    totalPrice: 0,
  },
  {
    id: 1,
    title: "Creme Brulee",
    description: "Vanilla Bean Creme Brulee",
    quantity: 0,
    imageDesktop: "assets/images/image-creme-brulee-desktop.jpg",
    imageThumbnail: "assets/images/image-creme-brulee-thumbnail.jpg",
    imageMobile: "assets/images/image-creme-brulee-mobile.jpg",
    price: 6.5,
    totalPrice: 0,
  },

  {
    id: 2,
    title: "Macaron",
    description: "Macaron Mix of Five",
    quantity: 0,
    imageDesktop: "assets/images/image-macaron-desktop.jpg",
    imageThumbnail: "assets/images/image-macaron-thumbnail.jpg",
    imageMobile: "assets/images/image-macaron-mobile.jpg",
    price: 8.0,
    totalPrice: 0,
  },
  {
    id: 3,
    title: "Tiramisu",
    description: "Classic Tiramisu",
    quantity: 0,
    imageDesktop: "assets/images/image-tiramisu-desktop.jpg",
    imageThumbnail: "assets/images/image-tiramisu-thumbnail.jpg",
    imageMobile: "assets/images/image-tiramisu-mobile.jpg",
    price: 5.5,
    totalPrice: 0,
  },
  {
    id: 4,
    title: "Baklava",

    description: "Pistachio Baklava",
    quantity: 0,
    imageDesktop: "assets/images/image-baklava-desktop.jpg",
    imageThumbnail: "assets/images/image-baklava-thumbnail.jpg",
    imageMobile: "assets/images/image-baklava-mobile.jpg",
    price: 4.0,
    totalPrice: 0,
  },

  {
    id: 5,
    title: "Pie",
    description: "Lemon Meringue Pie",
    quantity: 0,
    imageDesktop: "assets/images/image-meringue-desktop.jpg",
    imageThumbnail: "assets/images/image-meringue-thumbnail.jpg",
    imageMobile: "assets/images/image-meringue-mobile.jpg",
    price: 5.0,
    totalPrice: 0,
  },
  {
    id: 6,
    title: "Cake",
    description: "Red Velvet Cake",
    quantity: 0,
    imageDesktop: "assets/images/image-cake-desktop.jpg",
    imageThumbnail: "assets/images/image-cake-thumbnail.jpg",
    imageMobile: "assets/images/image-cake-mobile.jpg",
    price: 4.5,
    totalPrice: 0,
  },
  {
    id: 7,
    title: "Brownie",
    description: "Salted Caramel Brownie",
    quantity: 0,
    imageDesktop: "assets/images/image-brownie-desktop.jpg",
    imageThumbnail: "assets/images/image-brownie-thumbnail.jpg",
    imageMobile: "assets/images/image-brownie-mobile.jpg",
    price: 5.5,
    totalPrice: 0,
  },
  {
    id: 8,
    title: "Panna Cotta",
    description: "Vanilla Panna Cotta",
    quantity: 0,
    imageDesktop: "assets/images/image-panna-cotta-desktop.jpg",
    imageThumbnail: "assets/images/image-panna-cotta-thumbnail.jpg",
    imageMobile: "assets/images/image-panna-cotta-mobile.jpg",
    price: 4.0,
    totalPrice: 0,
  },
];

// Displaying all the products to the screen
let productsText = "";
for (const product of products) {
  productsText += `<div class="card">
          <input type="hidden" id="productId" value="${product.id}">
            <div class="image">
              <img src="${product.imageDesktop}" alt="" id="desktop" />
              <img src="${product.imageMobile}" alt="" id= "mobile" />
             
            </div>
            <div class="add">
              <div class="add1">
                <span cart-tray>
                  <img src="assets/images/icon-add-to-cart.svg" alt="" />
                </span>

                <p>Add to Cart</p>
              </div>
              <div class="add2">
                <div class="icons"  onclick="decrement(${product.id})">
                  <svg id="decrement"
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="2"
                    viewBox="0 0 10 2"
                  >
                    <path fill="currentValue" d="M0 .375h10v1.25H0V.375Z" />
                  </svg>
                </div>
                <div class="amount" id="amount-${product.id}">${
    product.quantity
  }</div>
                <div class="icons" onclick="increment(${product.id})">
                  <svg id="increment"
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                  >
                    <path fill="currentValue" d="M10
                    4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="cart-description">
              <p class="food-name">${product.title}</p>
              <h5>${product.description}</h5>
              <span class="red">$${product.price.toFixed(2)}</span>
            </div>
          </div>
          
 `;
}
productsWrapper.innerHTML = productsText;
const orders = [];

const increment = (id) => {
  // console.log("Befevug")
  const index = products.findIndex((p) => {
    return p.id === id;
  });
  // console.log(index);
  const product = products[index];
  // console.log(product);
  const quantity = product.quantity + 1;
  // console.log(quantity);
  const updatedProduct = {
    ...product,
    quantity,
    totalPrice: product.price,
  };
  // console.log(updatedProduct)

  products.splice(index, 1, updatedProduct);
  // console.log(products[index]);
  // Updating the html
  const amountEl = document.getElementById(`amount-${product.id}`);
  amountEl.innerText = updatedProduct.quantity;

  // orders
  const orderIndex = orders.findIndex((o) => o.id === updatedProduct.id);
  if (orderIndex === -1) {
    // Add a new order
    orders.push(updatedProduct);
    console.log(orders);
  } else {
    // Update that order
    const order = orders[orderIndex];
    const updatedOrder = {
      ...order,
      totalPrice: order.price * quantity,
      quantity,
    };
    orders.splice(orderIndex, 1, updatedOrder);
    console.log(orders);
  }
  if (orders.length !== 0) {
    console.log(`The length is :${orders.length} `);
    orderMade.style.display = "block";
    console.log(orders);
    noItem.style.display = "none";
  }
  updateCart();
  updateTotal();
};
const remove = (id) => {
  // console.log("Befevug")
  const index = products.findIndex((p) => {
    return p.id === id;
  });
  // console.log(index);
  const product = products[index];
  // console.log(product);
  const quantity = 0;
  // console.log(quantity);
  const updatedProduct = {
    ...product,
    quantity,
    totalPrice: product.price,
  };
  // console.log(updatedProduct)

  products.splice(index, 1, updatedProduct);
  // console.log(products[index]);
  // Updating the html
  const amountEl = document.getElementById(`amount-${product.id}`);
  amountEl.innerText = updatedProduct.quantity;

  // orders
  const orderIndex = orders.findIndex((o) => o.id === updatedProduct.id);
  if (orderIndex === -1) {
    // Add a new order
   return
  } else {
    // Update that order
    const order = orders[orderIndex];
    const updatedOrder = {
      ...order,
      totalPrice: order.price * quantity,
      quantity,
    };
    orders.splice(orderIndex, 1, updatedOrder);
    orders.splice(orderIndex, 1)
    console.log(orders);
  }
  if (orders.length == 0) {
    orderMade.style.display = "none";

    noItem.style.display = "block";
  }
  updateCart();
  updateTotal();
};
const decrement = (id) => {
  // console.log("Befevug")
  console.log(orders);
  const index = products.findIndex((p) => p.id === id);
  const product = products[index];
  const quantity = product.quantity - 1;
  const updatedProduct = {
    ...product,
    quantity,
    totalPrice: product.price,
  };

  const amountEl = document.getElementById(`amount-${product.id}`);

  if (product.quantity > 0) {
    const updatedProduct = { ...product, quantity: product.quantity - 1 };
    products.splice(index, 1, updatedProduct);
    amountEl.innerText = updatedProduct.quantity;
    // console.log(updatedProduct.quantity);

    // orders
    const orderIndex = orders.findIndex((o) => o.id === updatedProduct.id);
    if (orderIndex === -1) {
      // Add a new order
      return orders;
    } else {
      // Update that order
      const order = orders[orderIndex];
      const updatedOrder = {
        ...order,
        totalPrice: order.price * quantity,
        quantity,
      };
      if (updatedOrder.quantity === 0) {
        orders.splice(orderIndex, 1);
      } else {
        orders.splice(orderIndex, 1, updatedOrder);
      }

      // console.log(orders);
      // console.log(updatedOrder.quantity)
    }
  }
  if (orders.length === 0) {
    (orderMade.style.display = "none"), (noItem.style.display = "block");
    console.log(`The length is : 0 `);
  }

  updateCart();
  updateTotal();
};

const updateCart = () => {
  let ordersText = "";
  for (const order of orders) {
    ordersText += `<div class="myorder" id="order${order.id}">
  <div class="details-wrapper" >
    <div class="food">${order.title}</div>
    <div class="details">
      <div class="number">x${order.quantity}</div>
      <div class="price">$${order.price.toFixed(2)}</div>
      <div class="total-price">$${order.totalPrice.toFixed(2)}</div>
    </div>
  </div>
  <div class="delete-icon" id=deleteMe onclick = "remove(${order.id})">
    <img src="assets/images/icon-remove-item.svg" alt="" />
  </div>
</div>`;
  }
  orderWrapper.innerHTML = ordersText;
};

let mytotal;
let updateTotal = () => {
  let myTotalPrice = orders.reduce(
    (acc, product) => acc + product.totalPrice,
    0
  );
  mytotal = myTotalPrice.toFixed(2);
  total.innerHTML = mytotal;
};


let ordersReceived = document.querySelector(".all-orders");
let alert = document.querySelector(".alert");
let body = document.querySelector("body");
let container = document.querySelector(".container");
let finalTotal = document.querySelector("#finalTotal");
const receiveOrder = (order) => {
  for (order of orders) {
    ordersReceived.innerHTML += `<div class="order-flex">
    <div class="flex-left">
      <div>
       <img src="${order.imageThumbnail}" alt="" />
      </div>
      <div class="left-info">
        <p>${order.description}</p>
        <div class="quantityPrice">
          <span class="quantity">x${order.quantity}</span>
          <div class="price">$${order.price.toFixed(2)}</div>
        </div>
      </div>
    </div>
    <div class="flex-right">
     <div class="total-price">$${order.totalPrice.toFixed(2)}</div>
    
    </div>
  </div>`;
  }
 container.classList.add("events");
  finalTotal.innerHTML = `$${mytotal}`;
  alert.style.display = "block";
  body.style.zIndex = "999";
  container.style.opacity = ".9";
  container.style.transition = "opacity 0.8s";
  
  container.style.backgroundColor = ''
};
submit.addEventListener("click", receiveOrder);

let refresh = document.querySelector('#submit1')
refresh.addEventListener(
  "click", ()=>{
    location.reload();
  }
)