console.log("************** DELIVERABLE 02 *********************");

const concat = (first, ...arg) => console.log(first.concat(...arg));

//test
let array2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array3: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];
let array4: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12];
concat(array2, array3, array4); 