'use strict';


//UNIVERSAL CODE//
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const storeArray = [];

// Form Listener //
let myForm = document.getElementById('store-form');//Window to HTML element//



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
//OBJECT CONSTRUCTOR//
function Storedata(name, minCustomer, maxCustomer, avgCookieSale) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSale = avgCookieSale;
  this.customerNumber = 0;
  this.cookiePurchase = [];
  this.totalCookies = 0;
}


// FUNCTION TO CALL ALL STORES-HELPER FUNCTION//
function renderAll() {
  for (let i = 0; i < storeArray.length; i++) {
    storeArray[i].render();
  }
}


//CALLBACK FUNCTION//
function handleSubmit(event){
  event.preventDefault();

  //GRAB THE VALUES FROM FORM BY NAME //
  let storename = event.target.storename.value;
  let minCust =  typeof +event.target.minCust.value;
  let maxCust =  typeof +event.target.maxCust.value;
  let avgCookie = typeof +event.target.avgCookie.value;

  //PUT VALUES IN CONSTRUCTOR FOR NEW STORE //
  let newStore = new Storedata(storename, minCust, maxCust, avgCookie);
  storeArray.push(newStore);
  newStore.render();

}
// EVENT LISTENER //
myForm.addEventListener('submit', handleSubmit);


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
    for (let j = 0; j < storeArray.length; j++) {
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



