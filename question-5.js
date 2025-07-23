// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];
const promotionCode = ""
// เริ่มเขียนโค้ดตรงนี้
let calculateTotalPrice = (products,promotionCode) => {
  let total = products[0]
  let totalSum = 0;
  for (let i = 0;i < products.length;i++){
    total = products[i].price * products[i].quantity
    totalSum += total 
  };
  if (promotionCode === ""){
    return totalSum
  } else if (promotionCode === "SALE20"){
    return totalSum - (totalSum * 0.2)
  } else if (promotionCode === "SALE50"){
    return totalSum - (totalSum * 0.5)
  };
  
};


 console.log(calculateTotalPrice(products,"SALE50"));