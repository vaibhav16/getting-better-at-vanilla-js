// 167. Intersection of unsorted arrays
// JavaScript
// Algorithm
// met this in an interview?
//  33
// Add to my list
// Share

// easy  5381 accepted / 14047 tried

//  Well done!You have solved it!unsubmit

// Given two arrays, find the intersection(items occur in both arrays)

// arrays are not sorted, and might have duplicates.
// you can modify the arrays
// you can return the items in any order, but without duplicates.
// This is an easy problem, What is the time & space complexity of your approach?

function getIntersection (arr1,arr2){
    let map = new Map();
    let set = new Set();
    for(let i of arr1){map[i]=true};
    for(let i of arr2){if(map[i]){set.add(i)}};
    return [...set];
}