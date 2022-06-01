const cars = {
    name: 'BMW',
    color: 'red',
    wheels: 4
}

const myCar = (vehicles: {
    name: string,
    color: string,
    wheels: number
}): void => {
    console.log(`
        My car ${vehicles.name},
        color is ${vehicles.color},
        number of wheels ${vehicles.wheels}
    `);
    
}

myCar(cars)