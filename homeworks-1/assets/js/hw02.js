// Global variables
const stringName = document.getElementById("stringName");
const intSalary = document.getElementById("intSalary");
const buttonString = document.getElementById("buttonString");

// Functions
const stringInitializer = ()=> {
    stringName.innerHTML = "Empleado: " +prompt("Ingresa nombre del empleado.")
    intSalary.innerHTML = "Salario: $" + prompt("Ingresa salario del empleado.")
}

// Events
buttonString.onclick = () => {
    stringInitializer();
}
