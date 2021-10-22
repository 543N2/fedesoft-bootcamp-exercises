// Global variables
const A1 = document.getElementById("A1");
const B2 = document.getElementById("B2");
const C3 = document.getElementById("C3");
const D4 = document.getElementById("D4");
const E5 = document.getElementById("E5");
const F6 = document.getElementById("F6");
const G7 = document.getElementById("G7");
const H8 = document.getElementById("H8");
const I9 = document.getElementById("I9");
const J0 = document.getElementById("J0");
const CL = document.getElementById("CL");
const CN = document.getElementById("CN");
const letters = document.getElementById("letters");
const numbers = document.getElementById("numbers");

const rule = "ABCDEFGHIJ1234567890";

let counter = 0;

// Functions
const a1f = () => {
    let val = ""
    let letter = 0
    let number = 10
    if(counter<10){
        val = rule[letter]
        if(val !== rule[counter]){
            return alert("Faltan letras")
        } else {
            letters.innerHTML += val
            counter++
        }
    }
    else if(counter<20) {
        val = rule[number]
        if(val !== rule[counter]){
            return alert("Faltan numeros")
        } else {
            numbers.innerHTML += val
            counter++
        }
    }
    else {
        return alert("Se ha completado.")
    }
}

const b2f = () => {
    let val = ""
    let letter = 1
    let number = 11
    if(counter<10){
        val = rule[letter]
        if(val !== rule[counter]){
            return alert("Faltan letras")
        } else {
            letters.innerHTML += val
            counter++
        }
    }
    else if(counter<20) {
        val = rule[number]
        if(val !== rule[counter]){
            return alert("Faltan numeros")
        } else {
            numbers.innerHTML += val
            counter++
        }
    }
    else {
        return alert("Se ha completado.")
    }
}

const c3f = () => {
    let val = ""
    let letter = 2
    let number = 12
    if(counter<10){
        val = rule[letter]
        if(val !== rule[counter]){
            return alert("Faltan letras")
        } else {
            letters.innerHTML += val
            counter++
        }
    }
    else if(counter<20) {
        val = rule[number]
        if(val !== rule[counter]){
            return alert("Faltan numeros")
        } else {
            numbers.innerHTML += val
            counter++
        }
    }
    else {
        return alert("Se ha completado.")
    }
}

const d4f = () => {
    let val = ""
    let letter = 3
    let number = 13
    if(counter<10){
        val = rule[letter]
        if(val !== rule[counter]){
            return alert("Faltan letras")
        } else {
            letters.innerHTML += val
            counter++
        }
    }
    else if(counter<20) {
        val = rule[number]
        if(val !== rule[counter]){
            return alert("Faltan numeros")
        } else {
            numbers.innerHTML += val
            counter++
        }
    }
    else {
        return alert("Se ha completado.")
    }
}

const e5f = () => {
    let val = ""
    let letter = 4
    let number = 14
    if(counter<10){
        val = rule[letter]
        if(val !== rule[counter]){
            return alert("Faltan letras")
        } else {
            letters.innerHTML += val
            counter++
        }
    }
    else if(counter<20) {
        val = rule[number]
        if(val !== rule[counter]){
            return alert("Faltan numeros")
        } else {
            numbers.innerHTML += val
            counter++
        }
    }
    else {
        return alert("Se ha completado.")
    }
}

const f6f = () => {
    let val = ""
    let letter = 5
    let number = 15
    if(counter<10){
        val = rule[letter]
        if(val !== rule[counter]){
            return alert("Faltan letras")
        } else {
            letters.innerHTML += val
            counter++
        }
    }
    else if(counter<20) {
        val = rule[number]
        if(val !== rule[counter]){
            return alert("Faltan numeros")
        } else {
            numbers.innerHTML += val
            counter++
        }
    }
    else {
        return alert("Se ha completado.")
    }
}

const g7f = () => {
    let val = ""
    let letter = 6
    let number = 16
    if(counter<10){
        val = rule[letter]
        if(val !== rule[counter]){
            return alert("Faltan letras")
        } else {
            letters.innerHTML += val
            counter++
        }
    }
    else if(counter<20) {
        val = rule[number]
        if(val !== rule[counter]){
            return alert("Faltan numeros")
        } else {
            numbers.innerHTML += val
            counter++
        }
    }
    else {
        return alert("Se ha completado.")
    }
}

const h8f = () => {
    let val = ""
    let letter = 7
    let number = 17
    if(counter<10){
        val = rule[letter]
        if(val !== rule[counter]){
            return alert("Faltan letras")
        } else {
            letters.innerHTML += val
            counter++
        }
    }
    else if(counter<20) {
        val = rule[number]
        if(val !== rule[counter]){
            return alert("Faltan numeros")
        } else {
            numbers.innerHTML += val
            counter++
        }
    }
    else {
        return alert("Se ha completado.")
    }
}

const i9f = () => {
    let val = ""
    let letter = 8
    let number = 18
    if(counter<10){
        val = rule[letter]
        if(val !== rule[counter]){
            return alert("Faltan letras")
        } else {
            letters.innerHTML += val
            counter++
        }
    }
    else if(counter<20) {
        val = rule[number]
        if(val !== rule[counter]){
            return alert("Faltan numeros")
        } else {
            numbers.innerHTML += val
            counter++
        }
    }
    else {
        return alert("Se ha completado.")
    }
}

const j0f = () => {
    let val = ""
    let letter = 9
    let number = 19
    if(counter<10){
        val = rule[letter]
        if(val !== rule[counter]){
            return alert("Faltan letras")
        } else {
            letters.innerHTML += val
            counter++
        }
    }
    else if(counter<20) {
        val = rule[number]
        if(val !== rule[counter]){
            return alert("Faltan numeros")
        } else {
            numbers.innerHTML += val
            counter++
        }
    }
    else {
        return alert("Se ha completado.")
    }
}

// Events
A1.onclick = () => a1f();
B2.onclick = () => b2f();
C3.onclick = () => c3f();
D4.onclick = () => d4f();
E5.onclick = () => e5f();
F6.onclick = () => f6f();
G7.onclick = () => g7f();
H8.onclick = () => h8f();
I9.onclick = () => i9f();
J0.onclick = () => j0f();