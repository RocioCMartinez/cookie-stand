'use strict';


//UNIVERSAL CODE//
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const storeArray = [];
// let hourlyTotal = [];



//WINDOW INTO SALES.HTML DOCUMENT//
let storeSection = document.getElementById('stores');


//FUNCTION FOR HEADER ROW//
function tableStart() {
  let table = document.createElement('table');
  storeSection.appendChild(table);

  let rowTitles = document.createElement('tr');
  table.appendChild(rowTitles);

  let startCell = document.createElement('th');
  rowTitles.appendChild(startCell);

  for (let i = 0; i < hours.length; i++) {
    let storeCell = document.createElement('th');
    storeCell.textContent = hours[i];
    rowTitles.appendChild(storeCell);
  }

  let firstRow = document.createElement('th');
  firstRow.textContent = 'Daily Location Totals';
  rowTitles.appendChild(firstRow);
}
//OJECT CONSTRUCTOR//
function Storedata(name, minCustomer, maxCustomer, avgCookieSale) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSale = avgCookieSale;
  this.customerNumber = 0;
  this.cookiePurchase = [];
  this.totalCookies = 0;
}
// FUNCTION TO CALL ALL STORES//
function renderAll() {
  for (let i = 0; i < storeArray.length; i++) {
    storeArray[i].render();
  }
}

//PROTOTYPE METHODS//
Storedata.prototype.randomNumCustomer = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
//PROTOTYPE METHOD//
Storedata.prototype.getNum = function () {
  this.customerNumber = this.randomNumCustomer(this.minCustomer, this.maxCustomer);
  return this.customerNumber;

};
//PROTOTYPE METHOD//
Storedata.prototype.render = function () {
  let table = document.querySelector('table');
  let cityRow = document.createElement('tr');
  table.appendChild(cityRow);

  let rowData = document.createElement('td');
  rowData.textContent = this.name;
  cityRow.appendChild(rowData);

  for (let i = 0; i < hours.length; i++) {
    let cookiesBought = Math.round(this.avgCookieSale * this.getNum());
    console.log(cookiesBought);
    this.totalCookies += cookiesBought;
    this.cookiePurchase.push(cookiesBought);
  }
  console.log(this.cookiePurchase);
  console.log('TotalSales:', this.totalCookies);

  // let articleEl = document.createElement('article');
  // storeSection.appendChild(articleEl);

  // let storeTitle = document.createElement('h2');
  // storeTitle.textContent = this.name;
  // articleEl.appendChild(storeTitle);

  // let saleList = document.createElement('ul');
  // storeSection.appendChild(saleList);

  for (let i = 0; i < this.cookiePurchase.length; i++) {
    let cookieSale = document.createElement('td');
    cookieSale.textContent = `${this.cookiePurchase[i]} `;
    cityRow.appendChild(cookieSale);
  }
  let salesTotal = document.createElement('td');
  salesTotal.textContent = `Total Sales: ${this.totalCookies}`;
  cityRow.appendChild(salesTotal);

};

//FOOTER FUNCTION//
function tableFooter() {
  let table = document.querySelector('table');
  let footerRow = document.createElement('tr');
  table.appendChild(footerRow);

  let startCell = document.createElement('th');
  startCell.textContent = 'Hourly Totals';
  footerRow.appendChild(startCell);

  let grandTotal = 0;
  for (let i = 0; i < hours.length; i++) {
    let hourlyTotal = 0;
    for (let j = 0; j < storeArray.length; j++){
      hourlyTotal += storeArray[j].cookiePurchase[i];
      grandTotal += storeArray[j].cookiePurchase[i];
    }
    let totalCells = document.createElement('td');
    totalCells.textContent = hourlyTotal;
    footerRow.appendChild(totalCells);
  }

  let grandCell = document.createElement('td');
  grandCell.textContent = grandTotal;
  footerRow.appendChild(grandCell);

  // let ftrTotal = 0;

  // for (let i = 0; i < storeArray.length; i++){
  //   ftrTotal += storeArray[i].cookiePurchase;
  //   for (let j = 0; j < storeArray[i].cookiePurchase.length; j++){
  //     hourlyTotal.push += storeArray[i].cookiePurchase[j];
  //     // hourlyTotal[j].push(ftrTotal);
  //   }
  // }
  //   console.log(`Here ${hourlyTotal}`);
  // }
  // for (let i = 0; i < hours.length; i++){
  //   let hourlyTotal = 0;
  //   for (let j = 0; j < storeArray.cookiePurchase.length; j++){
  //     hourlyTotal += storeArray[i].cookiePurchase[j];
  //     hrTotal.push(hourlyTotal);
  //   }
  // }
}

//EXECUTABLE CODE//

let seattle = new Storedata('Seattle', 23, 65, 6.3);

let tokyo = new Storedata('Tokyo', 3, 35, 1.2);

let dubai = new Storedata('Dubai', 11, 38, 3.7);

let paris = new Storedata('Paris', 20, 38, 2.3);

let lima = new Storedata('Lima', 2, 16, 4.6);

storeArray.push(seattle, tokyo, dubai, paris, lima);
tableStart();
renderAll();
tableFooter();
