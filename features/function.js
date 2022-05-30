"use strict";
exports.__esModule = true;
// const calc = (a: number, b: number) => {
//     return a + b
// }
// const loggerCalc = (a: number, b: number): number => {
//   return  a + b;
// }
// const sayErr = (msg: string): void => {
//   throw new Error(msg); 
// }
var Mycar = {
    name: "BMW",
    isAirBag: true
};
var loggerCar = function (_a) {
    var name = _a.name, isAirBag = _a.isAirBag;
    console.log("My car ".concat(name, ", has airbag ").concat(isAirBag));
};
loggerCar(Mycar);
var mers = {
    color: "black",
    isAirbag: true,
    locations: {
        country: "German",
        city: "bayern"
    },
    setColor: function (color) {
        this.color = color;
    }
};
var color = mers.color;
var _a = mers.locations, country = _a.country, city = _a.city;
