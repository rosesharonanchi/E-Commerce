let submit = document.querySelector("#submit");
let cards = document.querySelectorAll(".card");
let total = document.querySelector("#total");
let orderWrapper = document.querySelector(".order-container");

let noItem = document.querySelector(".no-order");
let orderMade = document.querySelector(".order-made");
let myOrder = document.querySelectorAll(".my-order");
const productsWrapper = document.getElementById("products");

// ... rest of the product objects
const products = [
  {
    id: 0,
    title: "Waffle",
    description: "Waffles with Berries",
    quantity: 0,
    
    imageDesktop: "assets/images/image-waffle-thumbnail.jpg",
    price: 6.5,
    totalPrice: 0,
  },
  {
    id: 1,
    title: "Creme Brulee",
    description: "Vanilla Bean Creme Brulee",
    quantity: 0,
    imageDesktop: "assets/images/image-waffle-thumbnail.jpg",
    price: 6.5,
    totalPrice: 0,
  },
  {
    id: 2,
    title: "Waffle",
    description: "Waffles with Berries",
    quantity: 0,
    imageDesktop: "assets/images/image-waffle-thumbnail.jpg",
    price: 7.0,
    totalPrice: 0,
  },
  {
    id: 3,
    title: "Macaron",
    description: "Macaron Mix of Five",
    quantity: 0,
    imageDesktop: "assets/images/image-waffle-thumbnail.jpg",
    price: 8.0,
    totalPrice: 0,
  },
  {
    id: 4,
    title: "Tiramisu",
    description: "Classic Tiramisu",
    quantity: 0,
    imageDesktop: "assets/images/image-waffle-thumbnail.jpg",
    price: 5.5,
    totalPrice: 0,
  },
  {
    id: 5,
    title: "Baklava",

    description: "Pistachio Baklava",
    quantity: 0,
    imageDesktop: "assets/images/image-waffle-thumbnail.jpg",
    price: 4.0,
    totalPrice: 0,
  },

  {
    id: 6,
    title: "Pie",
    description: "Lemon Meringue Pie",
    quantity: 0,
    imageDesktop: "assets/images/image-waffle-thumbnail.jpg",
    price: 5.0,
    totalPrice: 0,
  },
  {
    id: 7,
    title: "Cake",
    description: "Red Velvet Cake",
    quantity: 0,
    imageDesktop: "assets/images/image-waffle-thumbnail.jpg",
    price: 4.5,
    totalPrice: 0,
  },
  {
    id: 8,
    title: "Brownie",
    description: "Salted Caramel Brownie",
    quantity: 0,
    imageDesktop: "assets/images/image-waffle-thumbnail.jpg",
    price: 5.5,
    totalPrice: 0,
  },
];

// Displaying all the products to the screen
let productsText = "";
for (const product of products) {
  productsText += `<div class="card">
            <div class="image">
              <img src="assets/images/image-creme-brulee-desktop.jpg" alt="" />
            </div>
            <div class="add">
              <div class="add1">
                <span cart-tray>
                  <img src="assets/images/icon-add-to-cart.svg" alt="" />
                </span>

                <p>Add to Cart</p>
              </div>
              <div class="add2">
                <div class="icons">
                  <svg
                    id="decrement"
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="2"
                    viewBox="0 0 10 2"
                  >
                    <path fill="currentValue" d="M0 .375h10v1.25H0V.375Z" />
                  </svg>
                </div>
                <div class="amount">0</div>
                <div class="icons">
                  <svg
                    id="increment"
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
              <p class="food-name">Creme Brulee</p>
              <h5>Vanilla Bean creme Brulee</h5>
              <span class="red">6.50</span>
            </div>
          </div>
          
 `;
}

productsWrapper.innerHTML = productsText;

let orders = [];
let updateTotal = () => {
  let myTotalPrice = products.reduce(
    (acc, product) => acc + product.totalPrice,
    0
  );
  total.innerHTML = `$${myTotalPrice.toFixed(2)}`;
};

let number = document.querySelectorAll(".number");
cards.forEach((card, i) => {
  let add = card.querySelector("#increment");
  let remove = card.querySelector("#decrement");
  let amount = card.querySelector(".amount");

  add.addEventListener("click", () => {
    products[i].quantity++;
    products[i].totalPrice = products[i].quantity * products[i].price;
    amount.innerHTML = products[i].quantity;
    updateTotal();
    upadateOrder(i);
    noItem.style.display = "none";
    orderMade.style.display = "block";
    myOrder.forEach((order, i) => {
      let deleteButton = order.querySelector(".delete-icon");
      deleteButton.addEventListener("click", () => {
        console.log(order);
        console.log(i);
      });
    });
  });

  remove.addEventListener("click", () => {
    if (products[i].quantity <= 0) {
      amount.innerHTML = 0;
      removeOrder();
    } else {
      products[i].quantity--;
      products[i].totalPrice = products[i].quantity * products[i].price;
      amount.innerHTML = `${products[i].quantity}`;
      upadateOrder(i);
      updateTotal();
    }
  });
});

const upadateOrder = (index) => {
  let order = {
    id: products[index].id,
    title: products[index].title,
    quantity: products[index].quantity,
    price: products[index].price,
    description: products[index].description,
    totalPrice: products[index].totalPrice,
    index: index,
  };
  let existingOrder = orders.find((o) => o.id === order.id);
  if (existingOrder) {
    updateDetails(order);
  } else {
    addNewOrder(order);
    orders.push(order);
    updateTotal();
  }
};

const addNewOrder = (order) => {
  orderWrapper.innerHTML += `<div class="myorder" id="order${order.id}">
  <div class="details-wrapper" >
    <div class="food">${order.title}</div>
    <div class="details">
      <div class="number">x${order.quantity}</div>
      <div class="price">$${order.price.toFixed(2)}</div>
      <div class="total-price">$${order.totalPrice.toFixed(2)}</div>
    </div>
  </div>
  <div class="delete-icon" id=deleteMe>
    <img src="assets/images/icon-remove-item.svg" alt="" />
  </div>
</div>`;
  deleteOrder(order);
};

// const updateDetails = (order) => {
//   let orderElement = orderWrapper.querySelector(
//     `.myorder:nth-child(${order.id + 1})`
//   );
//   orderElement.querySelector(".number").innerHTML = `x${order.quantity}`;
//   orderElement.querySelector(
//     ".total-price"
//   ).innerHTML = `$${order.totalPrice.toFixed(2)}`;
// };
// const updateDetails = (order) => {
//     let orderElement = orderWrapper.querySelectorAll(".myorder")[order.id];
//     if (orderElement) {
//       orderElement.querySelector(".number").innerHTML = `x${order.quantity}`;
//       orderElement.querySelector(
//         ".total-price"
//       ).innerHTML = `$${order.totalPrice.toFixed(2)}`;
//     }
//   };
const updateDetails = (order) => {
  //   let orderElement = document.querySelector(
  //     `.myorder:nth-child(${order.index + 1})`
  //   );

  let orderElement = document.querySelector(`#order${order.id}`);

  // console.log(order.quantity);
  // console.log(orderElement);
  if (orderElement) {
    orderElement.querySelector(".number").innerHTML = `x${order.quantity}`;
    orderElement.querySelector(
      ".total-price"
    ).innerHTML = `$${order.totalPrice.toFixed(2)}`;
  }
};
// deleteButton.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     e.parentElement.parentElement.remove();
//   });
// });

const deleteOrder = (order) => {
  let orderElement = document.querySelector(`#order${order.id}`);
  let deleteButton = orderElement.querySelector("#deleteMe");

  deleteButton.addEventListener("click", () => {
    // deleteButton.parentElement.style.display = 'none'
    console.log(orders);
    orders.splice(order.id, 1);
    console.log(orders);
    updateTotal();
  });
};

// submit.addEventListener("click", () => {
//   console.log('hello');
//   console.log('hi');
//   console.log(myOrder)
//  });
let ordersReceived = document.querySelector(".all-orders");
let alert = document.querySelector(".alert");
let body = document.querySelector("body");
let container = document.querySelector(".container");

const receiveOrder = (order) => {
  ordersReceived.innerHTML += `<div class="order-flex">
      <div class="flex-left">
        <div></div>
        <div class="left-info">
          <p>Classic Tiramisu</p>
          <div class="quantityPrice">
            <span class="quantity">x1</span>
            <div class="price">$5.0</div>
          </div>
        </div>
      </div>
      <div class="flex-right">
       <div class="total-price">$30.0</div>
      </div>
    </div>`;
  alert.style.display = "block";
  alert.classList.add("show");
  // body.style.zIndex = '999'
  container.style.opacity = ".8";
  // container.style.visibility = 'hidden'
  body.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
  container.style.transition = "opacity 0.8s, visibility 0.3s";
  container.style.pointerEvents = "none";
  container.style.position = "fixed";
  //container.style.backgroundColor = 'transparent'
};
submit.addEventListener("click", receiveOrder);
