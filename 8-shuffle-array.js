// 8. can you shuffle() an array?
// JavaScript
// met this in an interview?
//  22
// Add to my list
// Share

// medium  5835 accepted / 19500 tried

//  Well done!You have solved it!unsubmit

// How would you implement a shuffle() ?

// When passed with an array, it should modify the array inline to generate a randomly picked permutation at the same probability.

// for an array like this:

// const arr = [1, 2, 3, 4]
// there would be possibly 4! = 24 permutations

// [1, 2, 3, 4]
// [1, 2, 4, 3]
// [1, 3, 2, 4]
// [1, 3, 4, 2]
// [1, 4, 2, 3]
// [1, 4, 3, 2]
// [2, 1, 3, 4]
// [2, 1, 4, 3]
// [2, 3, 1, 4]
// [2, 3, 4, 1]
// [2, 4, 1, 3]
// [2, 4, 3, 1]
// [3, 1, 2, 4]
// [3, 1, 4, 2]
// [3, 2, 1, 4]
// [3, 2, 4, 1]
// [3, 4, 1, 2]
// [3, 4, 2, 1]
// [4, 1, 2, 3]
// [4, 1, 3, 2]
// [4, 2, 1, 3]
// [4, 2, 3, 1]
// [4, 3, 1, 2]
// [4, 3, 2, 1]
// your shuffle() should transform the array in one of the above array, at the same 1/24 probability.

// notes

// Your shuffle() will be called multiple times, to calculate the probability on each possible result, and test again standard deviation

// ref: https://javascript.info/task/shuffle

function shuffle(arr) {
    for(let i=0; i<arr.length; ++i){
        const j = i + Math.floor(Math.random() * arr.length -1);
        [arr[i],arr[j]] = [arr[j],arr[i]]
    }
    return arr;
}