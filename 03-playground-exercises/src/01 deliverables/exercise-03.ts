console.log("************** DELIVERABLE 03 *********************");
// Clone
// Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:

const obj1 = {
    name: "jshg",
    surname: "ksdhk"
}

const clone = (obj) => ({...obj})

const obj2 = clone(obj1);

console.log(obj1)
console.log(obj2)
console.log(obj1 === obj2)
console.log(obj1 == obj2)

//test
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };


// Merge
// Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.

// Por ejemplo, dados estos 2 objetos:

// const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
// const b = { name: "Luisa", age: 31, married: true };
// el resultado de mezclar a sobre b sería:

// merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
// TIP: Puedes usar la función "clone" del apartado A.


function merge(source, target) {
    const merged = clone(source);
    for (const key in target) {
        if (!source[key]){
            merged[key] = target[key];
        }
    }
    return merged;
}
//test
console.log(merge(b,a));