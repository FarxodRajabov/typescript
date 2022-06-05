class Car {
    // color: string;
    // constructor (color: string) {
    //     this.color = color;
    // }
    constructor(public color: string) {}
    start(): void {
        console.log("I'm driving");
    }
    stop(): void {
        console.log("I have stop");
    }
    protected middle(): void {
        console.log("What's happen");
    }
}


class Bus extends Car {
   private startDrive(): void {
        console.log('I dont like it bro');
    }
    startProcess(): void {
        this.startDrive()
        this.middle()
    }

}


const MyCar = new Car('crimson')
// const MyBus = new Bus()


MyCar.start()
MyCar.stop()
console.log(MyCar.color);


// MyBus.start()
// MyBus.stop()
// MyBus.startProcess()




