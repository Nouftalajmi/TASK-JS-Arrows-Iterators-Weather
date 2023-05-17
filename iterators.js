/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/
const array = [1, 2, 3, 4, 5];
const logger = function (array) {
  array.forEach((eachElement) => console.log(eachElement));
};
logger(array);

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/
const temperatures = [68, 86, 104, 122];
const toCelsius = function (temperatures) {
  return temperatures.map((tValue) => (tValue - 32) * (5 / 9));
};
console.log(toCelsius(temperatures));

/*************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/
const threshhold = 70;
const hottestDays = function (temperatures, threshhold) {
  return temperatures.filter((eacht) => eacht > threshhold);
};
console.log(hottestDays(temperatures, threshhold));
/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 
 *******************************************/

const logHottestDays = function (temperatures, threshhold) {
  const filteredTemp = hottestDays(temperatures, threshhold);
  const tCelsius = toCelsius(filteredTemp);

  logger(tCelsius);
};

/* Uncomment the following lines to test your code... */

// logger([1, 2, 3, 4, 5, 6, 7]);
// console.log(toCelsius([212, 122])); // should be: [100, 50];
// console.log(hottestDays([1, 2, 3, 4, 5, 6, 7, 8, 13, 156, 1765], 5)); // should be : [6, 7, 8, 13, 156, 1765]
// logHottestDays([140, 68, 212, 45, 149, 122, 19], 80); // should log "60", "100", "65", and "50"

module.exports = { logger, toCelsius, hottestDays, logHottestDays };
