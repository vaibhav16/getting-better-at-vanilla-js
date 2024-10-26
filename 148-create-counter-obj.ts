// 48. create a counter object
// JavaScript
// met this in an interview?
//  34
// Add to my list
// Share

// easy  3547 accepted / 8676 tried

//  Well done!You have solved it!unsubmit

// Create an object with property count, which increments every time count is accessed, initial value is 0.

// const counter = createCounter()
// counter.count // 0, then it should increment
// counter.count // 1
// counter.count // 2
// counter.count = 100 // it cannot be altered
// counter.count // 3

function createCounter(): {count: number } {
    let innerCounter = -1;

    return {
        get count() {
            innerCounter++;
            return innerCounter
        }
    }
}