let submit = document.querySelector("#submit");
let cards = document.querySelectorAll(".card");
let total = document.querySelector("#total");
let orderWrapper = document.querySelector(".order-container");
let deleteButton = document.querySelectorAll(".delete-icon");

// ... rest of the product objects
let products = [
  {
    id: 0,
    title: "Waffle",
    description: "Waffles with Berries",
    quantity: 0,
    imageDesktop: "assets/images/image-waffle-thumbnail.jpg",
    price: 6.5,
    totalPrice: 0
  },
  {
    id: 1,
    title: "Waffle",
    description: "Waffles with Berries",
    quantity: 0,
    imageDesktop: "assets/images/image-waffle-thumbnail.jpg",
    price: 6.5,
    totalPrice: 0
  },
  {
    id: 2,
    title: "Waffle",
    description: "Waffles with Berries",
    quantity: 0,
    imageDesktop: "assets/images/image-waffle-thumbnail.jpg",
    price: 6.5,
    totalPrice: 0
  },
  {
    id: 3,
    title: "Waffle",
    description: "Waffles with Berries",
    quantity: 0,
    imageDesktop: "assets/images/image-waffle-thumbnail.jpg",
    price: 6.5,
    totalPrice: 0
  },
  {
    id: 4,
    title: "Waffle",
    description: "Waffles with Berries",
    quantity: 0,
    imageDesktop: "assets/images/image-waffle-thumbnail.jpg",
    price: 6.5,
    totalPrice: 0
  },
  {
    id: 5,
    title: "Waffle",
    description: "Waffles with Berries",
    quantity: 0,
    imageDesktop: "assets/images/image-waffle-thumbnail.jpg",
    price: 6.5,
    totalPrice: 0
  },
  {
    id: 6,
    title: "Waffle",
    description: "Waffles with Berries",
    quantity: 0,
    imageDesktop: "assets/images/image-waffle-thumbnail.jpg",
    price: 6.5,
    totalPrice: 0
  },
  {
    id: 7,
    title: "Waffle",
    description: "Waffles with Berries",
    quantity: 0,
    imageDesktop: "assets/images/image-waffle-thumbnail.jpg",
    price: 6.5,
    totalPrice: 0
  },
  {
    id: 8,
    title: "Waffle",
    description: "Waffles with Berries",
    quantity: 0,
    imageDesktop: "assets/images/image-waffle-thumbnail.jpg",
    price: 6.5,
    totalPrice: 0
  },
  
];
let orders = [];

let number = document.querySelectorAll('.number');
cards.forEach((card, i) => {
  let add = card.querySelector("#increment");
  let remove = card.querySelector("#decrement");
  let amount = card.querySelector(".amount");

  add.addEventListener("click", () => {
    products[i].quantity++;
    products[i].totalPrice = products[i].quantity * products[i].price;
    amount.innerHTML = `${products[i].quantity}`;
    upadateOrder(i);
  });

  remove.addEventListener("click", () => {
    if (products[i].quantity <= 0) {
      amount.innerHTML = 0;
      
    } else {
      products[i].quantity--;
      products[i].totalPrice = products[i].quantity * products[i].price;
      amount.innerHTML = `${products[i].quantity}`;
      upadateOrder(i)
    }
  });
});

const upadateOrder = (index)=>{
  let order = {
    id: products[index].id,
    title: products[index].title,
    quantity: products[index].quantity,
    price: products[index].price,
    description: products[index].description,
    totalPrice: products[index].totalPrice,
    index: index
  }
  let existingOrder = orders.find(
    (o) => o.id === order.id
  );
  if(existingOrder){
    updateDetails(order)
  }
  else{
    addNewOrder(order);
    orders.push(order);
  }
}

const addNewOrder = (order)=>{
  orderWrapper.innerHTML += `<div class="order">
  <div class="details-wrapper">
    <div class="food">${order.title}</div>
    <div class="details">
      <div class="number">x${order.quantity}</div>
      <div class="price">$${order.price}</div>
      <div class="total-price">$${order.totalPrice.toFixed(2)}</div>
    </div>
  </div>
  <div class="delete-icon">
    <img src="assets/images/icon-remove-item.svg" alt="" />
  </div>
</div>`;
}

const updateDetails = (order) =>{
  let orderElement = orderWrapper.querySelector(
    `.order:nth-child(${order.id + 1})`
  );
  orderElement.querySelector(".number").innerHTML = `x${order.quantity}`;
  orderElement.querySelector(
    ".total-price"
  ).innerHTML = `$${order.totalPrice.toFixed(2)}`;  
}



// deleteButton.forEach(
//     (button)=>{
//        button.addEventListener('click', (e)=>{
//        e.parentElement.parentElement.remove()
//        })
//     }
// )

