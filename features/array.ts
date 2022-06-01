const colors = ["red", "green", "yellow"]
const num = [1,2,3,4]
const data = [new Date()]
const car: string[][]= [['mers'], ['nexia'], ['matiz']]

//

const bananColor = colors[2]
const removeLastItem = colors.pop()

//

colors.push("blue")
// colors.push(10) --- error
// colors.push(false) --- error


//

const birthday : (Date | string)[] = [new Date(), "2000-08-10"]
// birthday.push(false) --- error


// 

colors.map(item => {
    return item
})


