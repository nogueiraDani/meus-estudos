// estruturas de repeticao

// for

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

for ( let a = 10; a >= 0; a--) {
    if (a === 5) {
        break; // quando chegar no 5 ele vai parar
    }
    console.log(a)
}

for (let b = 0; b <= 20; b++) {
    if (b === 10) {
        continue; // pula o 10
    }
    console.log (b)
}

// while

let d = 456131812847;
while (d > 10) {
    console.log (d)
    d /= 22
}

// for of

let name = "Dani"
let names = ["João", "Paulo", "Pedro"]

for (let char of name) {
    console.log (char)
}

for (let name of names) {
    console.log (name)
}

// for in

let person = {
    name: "Daniela",
    age: 32,
    weight: 87.0,
}

for (property in person) {
    console.log (property)
    console.log(person[property])
}