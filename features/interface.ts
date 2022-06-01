interface Public {
    name: string,
    color: string,
    wheels: number,
    speed(): number
}

const cars = {
    name: 'BMW',
    color: 'red',
    wheels: 4,
    speed(): number {
        return 150 * this.wheels
    }
}

const bus = {
    name: 'KUR',
    color: 'yellow',
    wheels: 2,
    speed(): number {
        return 100 * this.wheels
    }
}

const myCar = (vehicles: Public ): void => {
    console.log(`
        My car ${vehicles.name},
        color is ${vehicles.color},
        number of wheels ${vehicles.wheels}
        speed is ${vehicles.speed()}
    `);
    
}

myCar(cars)
myCar(bus)