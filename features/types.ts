const fruit: string[] = ['banana', 'apple', 'strowberry']
const num: number[] = [1, 2, 3]
const isMarried: boolean[] = [true, false]


const car:{name: string; color: string; isAirBag: boolean } = {
    name: "BMW",
    color: "Black",
    isAirBag: true
}

// function

const logger: (names: string) => void = (names: string) => {
    console.log(names);
    
}

// Any

let cosmos;
cosmos = 8;

// 1 - when to use type annotation

// const objJson = '{"x": 10, "y":8}';
// const coordinate: {x: number; y: number} = JSON.parse(objJson)

// 2 - when to use type annotation

const numbersTest = ['one', 'two', 'three']
let isCurrent: boolean;

for (let i = 0; i < numbersTest.length; i++) {
    if (numbersTest[i] === 'one') {
        isCurrent = false
    }
    
}


