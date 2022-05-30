import axios from "axios";


// const calc = (a: number, b: number) => {
//     return a + b
// }

// const loggerCalc = (a: number, b: number): number => {
//   return  a + b;
// }



// const sayErr = (msg: string): void => {
//   throw new Error(msg); 
// }


const Mycar = {
  name: "BMW",
  isAirBag: true
}

const loggerCar = ({name, isAirBag}: {name: string; isAirBag: boolean}): void =>{
  console.log(`My car ${name}, has airbag ${isAirBag}`);
  
}

loggerCar(Mycar)


const mers = {
  color: "black",
  isAirbag: true,
  locations: {
    country: "German",
    city: "bayern"
  },
  setColor(color: string): void {
    this.color = color
  }
}


const {color} : {color: string} = mers
const {locations: {country, city} }: {locations: {country: string, city:string}} = mers
