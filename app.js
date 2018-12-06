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
  thEl.textContent = '';
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
