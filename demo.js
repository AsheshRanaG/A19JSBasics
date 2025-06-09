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
// console.log(getProductNum());
// const data={
//     earphone:2,
//     momo and sprite:2,
//     phone:1
// }

const potentialMatch = [
  {
    id: 1,
    Fname: "abdul",
    Lname: "rahman",
    age: 25,
    gender: "male",
    maritalStatus: "single",
    location: [
      { city: "delhi", country: "India" },
      { city: "bangalore", country: "India" },
    ],
  },
  {
    id: 2,
    Fname: "shradha",
    Lname: "bhattrai",
    age: 24,
    gender: "female",
    maritalStatus: "single",
    location: [
      { city: "kawasoti", country: "Nawalpur" },
      { city: "Texas", country: "USA" },
    ],
  },
  {
    id: 3,
    Fname: "sumit",
    Lname: "oli",
    age: 22,
    gender: "male",
    maritalStatus: "married",
    partnerName: "sushmita",
    location: [
      { city: "delhi", country: "India" },
      { city: "bangalore", country: "India" },
    ],
  },
];

const shadiwebAPIresp = {
  status: 200,
  message: "data fetched",
  data: potentialMatch,
};

const getMyPerfectMatch = () => {
  if (shadiwebAPIresp.status === 200) {
    shadiwebAPIresp.data.map((candidate) => {
      const { gender, age, maritalStatus, location } = candidate;
      const myRequirement =
        (gender === "female" && maritalStatus === "single") || age > 20;

      if (myRequirement) {
        location.currentLocation.country === "USA"
          ? console.log(
              `My perfect match is ${candidate.Fname} ${candidate.Lname}, who is ${age} years old, lives in ${location.currentLocation.city}, ${location.currentLocation.country}, and is ${maritalStatus}.`
            )
          : console.log("sorry, you're still single, keep searching!");
      }
    });
  }
};
// getMyPerfectMatch();

const getCountryNames = () => {
  let countryNames = [];
  shadiwebAPIresp.data.map((candidate) => {
    candidate.location.map((loc) => {
      // !countryNames.includes(loc.country)
      //   ? countryNames.push(loc.country)
      //   : null;
      countryNames.push(loc.country);
    });
  });
  const result = countryNames.filter((country, index) => {
    return countryNames.indexOf(country) === index;
  });

  return result;
  // return [...new Set(countryNames)]; // Using Set to remove duplicates
};
const arr = [1, 1, 2, 3, 4, 5, 5, 6];

const result = arr.filter((num, index) => {
  return arr.indexOf(num) === index;
});

console.log(getCountryNames());
