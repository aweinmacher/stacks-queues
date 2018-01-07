var Stack = function () { 
    this.stack = []; 

    this.print = function () {
        console.log(this.stack);
    }

    this.push = function (x) {
        var newIndex = this.stack.length;
        this.stack[newIndex] = x;
    }

    this.isEmpty = function () {
        return this.stack.length == 0;
    }

    this.peek = function () {
        if (this.stack.length === 0) {
            return null;
        } else {
            var lastIndex = this.stack.length - 1;
            return this.stack[lastIndex];
        }
    }

    this.pop = function () {
        if (!this.isEmpty()) {
            var lastIndex = this.stack.length - 1;
            return this.stack.splice(lastIndex, 1)[0];
        }
        return null;
    }

    this.getMin = function () {
        var tempStack = new Stack();
        var min = null;
        while (!this.isEmpty()) {
            console.log(this.stack);
            var currentValue = this.pop();
            if (min === null || currentValue < min) {
                min = currentValue;
            }
            tempStack.push(currentValue);
        }
        while (!tempStack.isEmpty()) {
            var temp = tempStack.pop();
            this.push(temp);
        }
        console.log(this.stack);
        return min;
    }
}


// Tricky solution
var MinValueStack = function () {
    this.stack = [];
    this.minValues = new Stack();

    this.print = function () {
        console.log(this.stack);
    }

    this.push = function (x) {
        this.stack[this.stack.length] = x;
        if (this.minValues.isEmpty() || x < this.minValues.peek()) { //  if (x < this.getMin() || this.getMin() == null)
            this.minValues.push(x);
            console.log(this.minValues);
        }
    }

    this.getMin = function () {
        if (!this.minValues.isEmpty()) { // if (!this.isEmpty())
            return this.minValues.peek();
        }
        return null;
    }

    this.isEmpty = function () {
        return this.stack.length == 0;
    }

    this.peek = function () {
        if (this.stack.length === 0) {
            return null;
        } else {
            var lastIndex = this.stack.length - 1;
            return this.stack[lastIndex];
        }
    }

    this.pop = function () {
        if (!this.isEmpty()) {
            if (this.peek() === this.minValues.peek()) { // if (this.peek() == this.getMin())
                this.minValues.pop();
            }
            var lastIndex = this.stack.length - 1;
            return this.stack.splice(lastIndex, 1)[0];
        }
        return null;
    }
}

//var myStack = new Stack();
var myStack = new MinValueStack();
myStack.push(4);
myStack.push(5);
myStack.push(16);
myStack.push(8);
myStack.push(2);
myStack.push(3);
console.log(myStack.getMin());
myStack.pop();
myStack.pop();
console.log(myStack.getMin());