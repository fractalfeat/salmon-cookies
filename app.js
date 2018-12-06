'use strict';

var salmonTable = document.getElementById('salmon-cookies');
var hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];
Salmon.allStores = [];

function Salmon(location, min, max, avgCookies) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.avgCookies = avgCookies;
  this.totalCookiesPerDay = 0;
  this.cookiesPerHour = [];
  Salmon.allStores.push(this);
}

Salmon.allStores = [];

Salmon.prototype.render = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.location;
  trEl.appendChild(tdEl);
  salmonTable.appendChild(trEl);

  for(var i = 0; i < hours.length; i++) {
    var randomNumberCookies = Math.round( (Math.round( Math.random() * (this.max - this.min) + this.min )) * this.avgCookies);
 
    tdEl = document.createElement('td');
    tdEl.textContent = randomNumberCookies;
    trEl.appendChild(tdEl);
    this.cookiesPerHour.push(randomNumberCookies);
  }
}

Salmon.renderHeader = function() {
  var headerRow = document.createElement('tr');
  var thEl = document.createElement('th');
  // thEl.textContent = 'Stores';
  headerRow.appendChild(thEl);
  for(var i = 0; i < hours.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    headerRow.appendChild(thEl);
  }
  salmonTable.prepend(headerRow);
};

Salmon.renderFooter = function() {
  var footerRow = document.createElement('tr');
  var dailyTotals = [];
  for( var i = -1; i <dailyTotals.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = footerRow[i];
    footerRow.appendChild(thEl)
  }
  salmonTable.append(footerRow);
};

var pike = new Salmon('1st and Pike', '23', '65', '6.3');
var seatac = new Salmon('SeaTac', '3', '24', '1.2');
var seattleCenter = new Salmon('Seattle Center', '11', '24','3.7');
var capHill = new Salmon('Capital Hill', '20', '38', '2.3');
var alki = new Salmon('Alki', '2', '16', '4.6');

Salmon.renderHeader();
pike.render();
seatac.render();
seattleCenter.render();
capHill.render();
alki.render();
Salmon.renderFooter();

// var pike = {
//   location: '1st and Pike',
//   minCust: 23,
//   maxCust: 65,
//   avgCookies: 6.3,
//   randomNumber: 0,
//   avgCookiesSoldPerHour: [],
//   totalDailySales: 0,
//   randomCust: function() {
//     return Math.round(Math.random() * (this.maxCust - this.minCust)+ this.minCust);
//   },
//   calculateAvgCookiesSold: function() {
//     for (var i = 0; i < hours.length; i++) {
//       var avgCookiesSold = Math.floor(this.randomCust() * this.avgCookies);
//       this.avgCookiesSoldPerHour.push(avgCookiesSold);
//     }
//   },
//   generatePikeTotalDailySales: function() {
//     for (var i = 0; i < this.avgCookiesSoldPerHour.length; i++) {
//       this.totalDailySales += this.avgCookiesSoldPerHour[i];
//     }
//     console.log(this.totalDailySales);
//   },
//   render: function() {
//     var pikeElement = document.getElementById('pike'); 
//      for (var i = 0; i < hours.length; i++) {
//        var liEl = document.createElement('li');
//        liEl.textContent = `${hours[i]}: ${this.avgCookiesSoldPerHour[i]} cookies`;
//        pikeElement.appendChild(liEl); 
//      }
//     liEl = document.createElement('li');
//     liEl.textContent = `Total: ${this.totalDailySales} cookies`;
//     pikeElement.appendChild(liEl);
//   }
// };
// pike.calculateAvgCookiesSold();
// pike.generatePikeTotalDailySales();
// pike.render();
// console.log(pike.avgCookiesSoldPerHour);

// var seatac = {
//   location: 'SeaTac Airport',
//   minCust: 3,
//   maxCust: 24,
//   avgCookies: 1.2,
//   randomNumber: 0,
//   avgCookiesSoldPerHour: [],
//   totalDailySales: 0,
//   randomCust: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust)+ this.minCust);
//   },
//   calculateAvgCookiesSold: function() {
//     for (var i = 0; i < hours.length; i++) {
//       var avgCookiesSold = Math.floor(this.randomCust () * this.avgCookies);
//       this.avgCookiesSoldPerHour.push(avgCookiesSold);
//     }
//   },
//   generateSeatacTotalDailySales: function() {
//     for (var i = 0; i < this.avgCookiesSoldPerHour.length; i++) {
//       this.totalDailySales += this.avgCookiesSoldPerHour[i];
//     }
//     console.log(this.totalDailySales);
//   },
//   render: function() {
//     var seatacElement = document.getElementById('sea-tac');
//     for (var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = `${hours[i]}: ${this.avgCookiesSoldPerHour[i]} cookies`;
//       seatacElement.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = `Total: ${this.totalDailySales} cookies`;
//     seatacElement.appendChild(liEl);
//   }
// };
// seatac.calculateAvgCookiesSold();
// seatac.generateSeatacTotalDailySales();
// seatac.render();
// console.log(seatac.avgCookiesSoldPerHour);

// var seattleCenter = {
//   location: 'Seattle Center',
//   minCust: 11,
//   maxCust: 24,
//   avgCookies: 3.7,
//   randomNumber: 0,
//   avgCookiesSoldPerHour: [],
//   totalDailySales: 0,
//   randomCust: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust)+ this.minCust);
//   },
//   calculateAvgCookiesSold: function() {
//     for (var i = 0; i < hours.length; i++) {
//       var avgCookiesSold = Math.floor(this.randomCust () * this.avgCookies);
//       this.avgCookiesSoldPerHour.push(avgCookiesSold);
//     }
//   },
//   generateSeaCenTotalDailySales: function() {
//     for (var i = 0; i < this.avgCookiesSoldPerHour[i]; i++) {
//       this.totalDailySales += this.avgCookiesSoldPerHour[i];
//     }
//     console.log(this.totalDailySales);
//   },
//   render: function() {
//     var seacenElement = document.getElementById('seattle-center');
//     for (var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = `${hours[i]}: ${this.avgCookiesSoldPerHour[i]} cookies`;
//       seacenElement.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = `Total: ${this.totalDailySales} cookies`;
//     seacenElement.appendChild(liEl);
//   }
// };
// seattleCenter.calculateAvgCookiesSold();
// seattleCenter.generateSeaCenTotalDailySales();
// seattleCenter.render();
// console.log(seattleCenter.avgCookiesSoldPerHour);


// var capHill = {
//   location: 'Capital Hill',
//   minCust: 20,
//   maxCust: 38,
//   avgCookies: 2.3,
//   randomNumber: 0,
//   avgCookiesSoldPerHour: [],
//   totalDailySales: 0,
//   randomCust: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust)+ this.minCust);
//   },
//   calculateAvgCookiesSold: function() {
//     for (var i = 0; i < hours.length; i++) {
//       var avgCookiesSold = Math.floor(this.randomCust () * this.avgCookies);
//       this.avgCookiesSoldPerHour.push(avgCookiesSold);
//     }
//   }, 
//   generateCapHillTotalDailySales: function() {
//     for (var i = 0; i < this.avgCookiesSoldPerHour[i]; i++) {
//       this.totalDailySales += this.avgCookiesSoldPerHour[i];
//     }
//     console.log(this.totalDailySales);
//   },
//   render: function() {
//     var capHillElement = document.getElementById('cap-hill');
//     for ( var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = `${hours[i]}: ${this.avgCookiesSoldPerHour[i]} cookies`;
//       capHillElement.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = `Total: ${this.totalDailySales} cookies`;
//     capHillElement.appendChild(liEl);
//   }
// };
// capHill.calculateAvgCookiesSold();
// capHill.generateCapHillTotalDailySales();
// capHill.render();
// console.log(capHill.avgCookiesSoldPerHour);

// var alki = {
//   location: 'Alki',
//   minCust: 2,
//   maxCust: 16,
//   avgCookies: 4.6,
//   randomNumber: 0,
//   avgCookiesSoldPerHour: [],
//   totalDailySales: 0,
//   randomCust: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust)+ this.minCust);
//   },
//   calculateAvgCookiesSold: function() {
//     for (var i = 0; i < hours.length; i++) {
//       var avgCookiesSold = Math.floor(this.randomCust () * this.avgCookies);
//       this.avgCookiesSoldPerHour.push(avgCookiesSold);
//     }
//   },
//   generateAlkiTotalDailySales: function() {
//     for (var i = 0; i < hours.length; i++) {
//       this.totalDailySales += this.avgCookiesSoldPerHour[i];
//     }
//     console.log(this.totalDailySales);
//   },
//   render: function() {
//     var alkiElement = document.getElementById('alki');
//     for (var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = `${hours[i]}: ${this.avgCookiesSoldPerHour[i]} cookies`;
//       alkiElement.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = `Total: ${this.totalDailySales} cookies`;
//     alkiElement.appendChild(liEl);
//   }
// };
// alki.calculateAvgCookiesSold();
// alki.generateAlkiTotalDailySales();
// alki.render();
// console.log(alki.avgCookiesSoldPerHour);