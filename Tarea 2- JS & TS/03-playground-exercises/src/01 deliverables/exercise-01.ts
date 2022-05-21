console.log("************** DELIVERABLE 01 *********************");

let array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const head = ([first, ...rest]: number[]) => console.log([first]); 
head(array);
const tail = ([first, ...rest]: number[]) => console.log([...rest]); 
tail(array);
const init = (array: number[]) => console.log(array.slice(0,-1));
init(array);
const last = (array: number[]) => console.log(array.slice(-1));
last(array);