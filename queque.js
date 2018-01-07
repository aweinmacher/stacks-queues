var Queue = function () { 
    this.queue = []; 
    this.print = function () {
        console.log(this.queue);
    }
    this.isEmpty = function () {
        return this.queue.length == 0;
    }
    this.peek = function () {
        if (this.queue.length === 0) {
            return null;
        } else {
            var lastIndex = this.queue.length - 1;
            return this.queue[lastIndex];
        }
    }
    this.enqueue = function (x) {
        this.queue.unshift(x);
    }
    this.dequeue = function () {
        if (!this.isEmpty()) {
            return this.queue.pop();
        }
        return null;
    }
}

var MaxValueQueue = function () { 
    this.queue = [];
    
    this.print = function () {
        console.log(this.queue);
    }
    this.isEmpty = function () {
        return this.queue.length === 0;
    }
    this.peek = function () {
        if (this.queue.length === 0) {
            return null;
        } else {
            var lastIndex = this.queue.length - 1;
            return this.queue[lastIndex];
        }
    }
    this.enqueue = function (x) {
        this.queue.unshift(x);      
    }
    this.dequeue = function () {
        if (!this.isEmpty()) {
            return this.queue.pop();
        }
        return null;
    }
    this.getMax = function () {
        var tempQueque = new Queue();
        var max = null;
        while (!this.isEmpty()) {
            var temp = this.dequeue();
            tempQueque.enqueue(temp);
            if (max === null || temp > max) {
                max = temp;
            }
        }
        while (!tempQueque.isEmpty()) {
            var temp = tempQueque.dequeue();
            this.enqueue(temp);
        }
        return max;
    }
}


var myQueue = new MaxValueQueue();
myQueue.enqueue(4);
myQueue.enqueue(5);
myQueue.enqueue(16);
myQueue.enqueue(8);
myQueue.enqueue(2);
myQueue.enqueue(3);
console.log(myQueue.print());
console.log(myQueue.getMax());




// var myQueue = new Queue();
// console.log(myQueue.isEmpty());    //true
// console.log(myQueue.print());      //[]
// console.log(myQueue.enqueue(2));      
// console.log(myQueue.isEmpty());     
// console.log(myQueue.enqueue(4));      
// console.log(myQueue.print());      
// console.log(myQueue.peek());       
// console.log(myQueue.dequeue());      
// console.log(myQueue.dequeue());      
// console.log(myQueue.peek());       //null
// console.log(myQueue.isEmpty());    //true







