'use strict';

var hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];

var pike = {
  location: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  randomNumber: 0,
  avgCookiesSoldPerHour: [],
  randomCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)+ this.minCust);
  },
  calculateAvgCookiesSold: function() {
    for (var i = 0; i < hours.length; i++) {
      var avgCookiesSold = Math.floor(this.randomCust () * this.avgCookies);
      this.avgCookiesSoldPerHour.push(avgCookiesSold);
    }
  }
};
pike.calculateAvgCookiesSold();
console.log(pike.avgCookiesSoldPerHour);

var seatac = {
  location: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  randomNumber: 0,
  avgCookiesSoldPerHour: [],
  randomCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)+ this.minCust);
  },
  calculateAvgCookiesSold: function() {
    for (var i = 0; i < hours.length; i++) {
      var avgCookiesSold = Math.floor(this.randomCust () * this.avgCookies);
      this.avgCookiesSoldPerHour.push(avgCookiesSold);
    }
  }
};
seatac.calculateAvgCookiesSold();
console.log(pike.avgCookiesSoldPerHour);

var seattleCenter = {
  location: 'Seattle Center',
  minCust: 11,
  maxCust: 24,
  avgCookies: 3.7,
  randomNumber: 0,
  avgCookiesSoldPerHour: [],
  randomCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)+ this.minCust);
  },
  calculateAvgCookiesSold: function() {
    for (var i = 0; i < hours.length; i++) {
      var avgCookiesSold = Math.floor(this.randomCust () * this.avgCookies);
      this.avgCookiesSoldPerHour.push(avgCookiesSold);
    }
  }
};
seattleCenter.calculateAvgCookiesSold();
console.log(seattleCenter.avgCookiesSoldPerHour);


var capHill = {
  location: 'Capital Hill',
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  randomNumber: 0,
  avgCookiesSoldPerHour: [],
  randomCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)+ this.minCust);
  },
  calculateAvgCookiesSold: function() {
    for (var i = 0; i < hours.length; i++) {
      var avgCookiesSold = Math.floor(this.randomCust () * this.avgCookies);
      this.avgCookiesSoldPerHour.push(avgCookiesSold);
    }
  }
};
capHill.calculateAvgCookiesSold();
console.log(capHill.avgCookiesSoldPerHour);

var alki = {
  location: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  randomNumber: 0,
  avgCookiesSoldPerHour: [],
  randomCust: function() {
    return Math.floor(Math.random() * (this.maxCrust - this.minCust)+ this.minCust);
  },
  calculateAvgCookiesSold: function() {
    for (var i = 0; i < hours.length; i++) {
      var avgCookiesSold = Math.floor(this.randomCust () * this.avgCookies);
      this.avgCookiesSoldPerHour.push(avgCookiesSold);
    }
  }
};
alki.calculateAvgCookiesSold();
console.log(alki.avgCookiesSoldPerHour);

