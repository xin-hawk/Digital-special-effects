import isPrime from "./isPrime";

export class numberCreate {
    constructor(duration = 500) {
        this.duration = duration;
        this.number = 1;
        this.onNumberCreate = null;
        this.timer = null;
    }

    start() {
        if (this.timer) {
            return;
        }
        this.timer = setInterval(() => {
            this.onNumberCreate && this.onNumberCreate(this.number, isPrime(this.number));
            this.number++;
        }, this.duration)
    }

    stop(){
        clearInterval(this.timer);
        this.timer = null;
    }
}