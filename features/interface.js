var cars = {
    name: 'BMW',
    color: 'red',
    wheels: 4
};
var myCar = function (vehicles) {
    console.log("\n        My car ".concat(vehicles.name, ",\n        color is ").concat(vehicles.color, ",\n        number of wheels ").concat(vehicles.wheels, "\n    "));
};
myCar(cars);
