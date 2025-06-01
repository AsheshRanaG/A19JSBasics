const customer = [
  {
    custId: 1,
    name: "aurum",
    bought: [
      { id: 1, name: "t-shirt" },
      { id: 2, name: "earphone" },
    ],
  },
  {
    custId: 2,
    name: "ritesh",
    bought: [
      { id: 2, name: "earphone" },
      { id: 4, name: "mobile" },
    ],
  },
  {
    custId: 3,
    name: "ritu",
    bought: [
      { id: 7, name: "momo_and_sprite" },
      { id: 6, name: "ear-ring" },
    ],
  },
  {
    custId: 4,
    name: "smriti",
    bought: [
      { id: 7, name: "momo_and_sprite" },
      { id: 8, name: "pen" },
    ],
  },
];

const customerAPIresp = {
  status: 200,
  message: "customer data fetched",
  data: customer,
};

const getProductName = () => {
  if (customerAPIresp.status === 200) {
    let boughtProducts = [];
    customerAPIresp.data.forEach((customer) => {
      customer.bought.map((item) => {
        boughtProducts.unshift(item.name);
      });
    });
    return boughtProducts;
  }
};
// console.log(getProductName());

const getProductNum = () => {
  if (customerAPIresp.status === 200) {
    let productNumbers = {};
    customerAPIresp.data.forEach((customer) => {
      customer.bought.map((item) => {
        if (productNumbers[item.name]) {
          productNumbers[item.name] += 1;
        } else {
          productNumbers[item.name] = 1;
        }
      });
    });
    return productNumbers;
  }
};
console.log(getProductNum());
// const data={
//     earphone:2,
//     momo and sprite:2,
//     phone:1
// }
