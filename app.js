'use strict';


let storeSection = document.getElementById('stores');


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


let seattle = {
  name: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieSale: 6.3,
  customerNumber: 0,
  randomNumCustomer: function (min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);// from MDN
  },
  getNum: function () {
    this.customerNumber = this.randomNumCustomer(this.minCustomer, this.maxCustomer);

    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  getNum: function () {
    this.customerNumber = this.randomNumCustomer(23, 65); //from mdn

    return this.customerNumber;
  },

  cookiePurchase: [],
  totalCookies: 0,

  render: function () {

    for (let i = 0; i < hours.length; i++) {
      let cookiesBought = Math.round(this.avgCookieSale * this.getNum());

    // this.getNum();
    for (let i = 0; i < hours.length; i++) {
      let cookiesBought = (this.avgCookieSale * this.getNum());

      console.log(cookiesBought);
      this.totalCookies += cookiesBought;
      this.cookiePurchase.push(cookiesBought);
      // let totalCookies = this.cookiePurchase


      // let totalCookies = 0;

      // for (let i = 0; i < this.cookiePurchase.length; i++){
      //   totalCookies += this.cookiePurchase[i];
      //   return this.totalCookies;
      // }
    }
    console.log(this.cookiePurchase);

    console.log('TotalSales:', this.totalCookies);

    let storeTitle = document.createElement('h2');
    storeTitle.textContent = this.name;
    storeSection.appendChild(storeTitle);

    let saleList = document.createElement('ul');
    storeSection.appendChild(saleList);

    for(let i = 0; i < this.cookiePurchase.length; i++){
      let cookieSale = document.createElement('li');
      cookieSale.textContent = `${hours[i]}: ${this.cookiePurchase[i]} cookies`;
      saleList.appendChild(cookieSale);
    }
    let salesTotal = document.createElement('li');
    salesTotal.textContent = `Total Sales: ${this.totalCookies}`;
    saleList.appendChild(salesTotal);


    // console.log(this.totalCookies);
    console.log('TotalSales:', this.totalCookies);


  },
};

let tokyo = {
  name: 'Tokyo',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookieSale: 1.2,
  customerNumber: 0,
  randomNumCustomer: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  getNum: function () {

    this.customerNumber = this.randomNumCustomer(this.minCustomer, this.maxCustomer);
    return this.customerNumber;
  },

  cookiePurchase: [],
  totalCookies: 0,

  render: function () {
    for (let i = 0; i < hours.length; i++) {
      let cookiesBought = Math.round(this.avgCookieSale * this.getNum());
      console.log(cookiesBought);
      this.totalCookies += cookiesBought;
      this.cookiePurchase.push(cookiesBought);
    }
    console.log(this.cookiePurchase);
    console.log('TotalSales:', this.totalCookies);

    let storeTitle = document.createElement('h2');
    storeTitle.textContent = this.name;
    storeSection.appendChild(storeTitle);

    let saleList = document.createElement('ul');
    storeSection.appendChild(saleList);

    for(let i = 0; i < this.cookiePurchase.length; i++){
      let cookieSale = document.createElement('li');
      cookieSale.textContent = `${hours[i]}: ${this.cookiePurchase[i]} cookies`;
      saleList.appendChild(cookieSale);
    }
    let salesTotal = document.createElement('li');
    salesTotal.textContent = `Total Sales: ${this.totalCookies}`;
    saleList.appendChild(salesTotal);

    this.customerNumber = this.randomNumCustomer(3, 24);
  },
  render: function () {
    this.getNum();

  },
};

let dubai = {
  name: 'Dubai',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookieSale: 3.7,
  customerNumber: 0,
  randomNumCustomer: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  getNum: function () {

    this.customerNumber = this.randomNumCustomer(this.minCustomer, this.maxCustomer);
    return this.customerNumber;
  },
  cookiePurchase: [],
  totalCookies: 0,

  render: function () {
    for (let i = 0; i < hours.length; i++) {
      let cookiesBought = Math.round(this.avgCookieSale * this.getNum());
      console.log(cookiesBought);
      this.totalCookies += cookiesBought;
      this.cookiePurchase.push(cookiesBought);
    }
    console.log(this.cookiePurchase);
    console.log('TotalSales:', this.totalCookies);

    let storeTitle = document.createElement('h2');
    storeTitle.textContent = this.name;
    storeSection.appendChild(storeTitle);

    let saleList = document.createElement('ul');
    storeSection.appendChild(saleList);

    for(let i = 0; i < this.cookiePurchase.length; i++){
      let cookieSale = document.createElement('li');
      cookieSale.textContent = `${hours[i]}: ${this.cookiePurchase[i]} cookies`;
      saleList.appendChild(cookieSale);
    }
    let salesTotal = document.createElement('li');
    salesTotal.textContent = `Total Sales: ${this.totalCookies}`;
    saleList.appendChild(salesTotal);

    this.customerNumber = this.randomNumCustomer(11, 38);
  },
  render: function () {
    this.getNum();

  },
};

let paris = {
  name: 'Paris',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookieSale: 2.3,
  customerNumber: 0,
  randomNumCustomer: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  getNum: function () {

    this.customerNumber = this.randomNumCustomer(this.minCustomer, this.maxCustomer);
    return this.customerNumber;
  },
  cookiePurchase: [],
  totalCookies: 0,

  render: function () {
    for (let i = 0; i < hours.length; i++) {
      let cookiesBought = Math.round(this.avgCookieSale * this.getNum());
      console.log(cookiesBought);
      this.totalCookies += cookiesBought;
      this.cookiePurchase.push(cookiesBought);
    }
    console.log(this.cookiePurchase);
    console.log('TotalSales:', this.totalCookies);

    let storeTitle = document.createElement('h2');
    storeTitle.textContent = this.name;
    storeSection.appendChild(storeTitle);

    let saleList = document.createElement('ul');
    storeSection.appendChild(saleList);

    for(let i = 0; i < this.cookiePurchase.length; i++){
      let cookieSale = document.createElement('li');
      cookieSale.textContent = `${hours[i]}: ${this.cookiePurchase[i]} cookies`;
      saleList.appendChild(cookieSale);
    }
    let salesTotal = document.createElement('li');
    salesTotal.textContent = `Total Sales: ${this.totalCookies}`;
    saleList.appendChild(salesTotal);

    this.customerNumber = this.randomNumCustomer(20, 38);
  },
  render: function () {
    this.getNum();

  },
};

let lima = {
  name: 'Lima',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookieSale: 4.6,
  customerNumber: 0,
  randomNumCustomer: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  getNum: function () {

    this.customerNumber = this.randomNumCustomer(this.minCustomer, this.maxCustomer);
    return this.customerNumber;
  },
  cookiePurchase: [],
  totalCookies: 0,

  render: function () {
    for (let i = 0; i < hours.length; i++) {
      let cookiesBought = Math.round(this.avgCookieSale * this.getNum());
      console.log(cookiesBought);
      this.totalCookies += cookiesBought;
      this.cookiePurchase.push(cookiesBought);
    }
    console.log(this.cookiePurchase);
    console.log('TotalSales:', this.totalCookies);

    let storeTitle = document.createElement('h2');
    storeTitle.textContent = this.name;
    storeSection.appendChild(storeTitle);

    let saleList = document.createElement('ul');
    storeSection.appendChild(saleList);

    for(let i = 0; i < this.cookiePurchase.length; i++){
      let cookieSale = document.createElement('li');
      cookieSale.textContent = `${hours[i]}: ${this.cookiePurchase[i]} cookies`;
      saleList.appendChild(cookieSale);
    }
    let salesTotal = document.createElement('li');
    salesTotal.textContent = `Total Sales: ${this.totalCookies}`;
    saleList.appendChild(salesTotal);

    this.customerNumber = this.randomNumCustomer(2, 16);
  },
  render: function () {
    this.getNum();

  },
};


seattle.render();
console.log(seattle.customerNumber);

tokyo.render();
console.log(tokyo.customerNumber);

dubai.render();
console.log(dubai.customerNumber);

paris.render();
console.log(paris.customerNumber);

lima.render();
console.log(lima.customerNumber);


