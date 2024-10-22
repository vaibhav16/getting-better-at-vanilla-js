// There is already Array.prototype.flat() in JavaScript (ES2019), which reduces the nesting of Array. Please implement your own.

// const arr = [1, [2], [3, [4]]];
// flat(arr)
// // [1, 2, 3, [4]]
// flat(arr, 1)
// // [1, 2, 3, [4]]
// flat(arr, 2)
// // [1, 2, 3, 4]
// follow up

// Are you able to solve it both recursively and iteratively? How do you handle sparse array?

function flat(arr, depth = 1) {
    let newArr = [];
    arr.forEach(item=>{
        if(Array.isArray(item)&& depth>0){
            newArr.push(...flat(item,depth-1))
        }
        else{
            newArr.push(item)
        }
    })
    return newArr;
}