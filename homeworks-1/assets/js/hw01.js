// Global variables
const userFirstName = document.getElementById("userFirstName");
const userLastName = document.getElementById("userLastName");
const userAge = document.getElementById("userAge");
const userPhone = document.getElementById("userPhone");
const userCellphone = document.getElementById("userCellphone");
const userAddress = document.getElementById("userAddress");
const buttonUserData = document.getElementById("buttonUserData");

// Functions
const getUserData = () => {
    let firstName = prompt("Digita el Nombre.");
    let lastName = prompt("Digita el Apellido.");
    let age = prompt("Digita la Edad.");
    let phone = prompt("Digita el Número de teléfono.");
    let cellphone = prompt("Digita el Número de celular.");
    let address = prompt("Digita la Dirección.");

    localStorage.setItem("userFirstName", firstName);
    localStorage.setItem("userLastName", lastName);
    localStorage.setItem("userAge", age);
    localStorage.setItem("userPhone", phone);
    localStorage.setItem("userCellphone", cellphone);
    localStorage.setItem("userAddress", address);
}

const printUserData = () => {
    if(localStorage.length != 0) {
        userFirstName.innerHTML = "Nombre: " + localStorage.getItem("userFirstName");
        userLastName.innerHTML = "Apellido: " + localStorage.getItem("userLastName");
        userAge.innerHTML = "Edad: " + localStorage.getItem("userAge");
        userPhone.innerHTML = "Teléfono: " + localStorage.getItem("userPhone");
        userCellphone.innerHTML = "Celular: " + localStorage.getItem("userCellphone");
        userAddress.innerHTML = "Dirección: " + localStorage.getItem("userAddress");
    }
    console.log(localStorage)
}

// Events
buttonUserData.onclick = () => {
    getUserData();
    printUserData();
}

printUserData();