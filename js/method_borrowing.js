'use strict';

const jetairways = {
  airline: 'Jet Airways',
  iataCode: '9W',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

jetairways.book(154, 'Rakesh Mondal');

// COPYING THE FUNCTION
const book = jetairways.book;

book();

const indigo = {
  airline: 'IndiGo',
  iataCode: '6E',
  bookings: [],
};

// USED call METHOD TO REFER this KEYWORD
book.call(indigo, 299, 'Mr. Rakesh');
// USED bind METHOD TO REFER this KEYWORD
const boundGetX = book.bind(indigo);
boundGetX(334, 'Lorem ipsum');

console.log(jetairways.bookings);
console.log(indigo.bookings);
