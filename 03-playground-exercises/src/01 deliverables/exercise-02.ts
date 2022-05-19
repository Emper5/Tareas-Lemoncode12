console.log("************** DELIVERABLE 02 *********************");
let array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];
let array3: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12];
const concat = (...arg) => console.log(...arg.concat(...arg));
concat(array, array2, array3); 