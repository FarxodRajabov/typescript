interface Public {
    name: string,
    color: string,
    wheels: number
}

const cars = {
    name: 'BMW',
    color: 'red',
    wheels: 4
}

const myCar = (vehicles: Public ): void => {
    console.log(`
        My car ${vehicles.name},
        color is ${vehicles.color},
        number of wheels ${vehicles.wheels}
    `);
    
}

myCar(cars)