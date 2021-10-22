// Global variables
const buttonCapitals = document.getElementById("buttonCapitals");

// Functions
const findCapital = () => {
    let capital = "";
    let department = prompt("Digita el departamento: ");
    department = department.toLowerCase();

    switch (department) {
        case "amazonas":
            capital = "Leticia";
            break;
        case "antioquía":
            capital = "Medellín";
            break;
        case "arauca":
            capital = "Arauca";
            break;
        case "atlántico":
            capital = "Barranquilla";
            break;
        case "bolívar":
            capital = "Cartagena de Indias";
            break;
        case "boyacá":
            capital = "Tunja";
            break;
        case "caldas":
            capital = "Manizales";
            break;
        case "caquetá":
            capital = "Florencia";
            break;
        case "casanare":
            capital = "Yopal";
            break;
        case "cauca":
            capital = "Popayán";
            break;
        case "cesar":
            capital = "Valledupar";
            break;
        case "chocó":
            capital = "Quibdó";
            break;
        case "córdoba":
            capital = "Montería";
            break;
        case "cundinamarca":
            capital = "Bogotá";
            break;
        case "guainía":
            capital = "Inírida";
            break;
        case "guaviare":
            capital = "San José del Guaviare";
            break;
        case "huila":
            capital = "Neiva";
            break;
        case "la guajira":
            capital = "Riohacha";
            break;
        case "magdalena":
            capital = "Santa Marta";
            break;
        case "meta":
            capital = "Villavicencio";
            break;
        case "nariño":
            capital = "San Juan de Pasto";
            break;
        case "norte de santander":
            capital = "San José de Cúcuta";
            break;
        case "putumayo":
            capital = "Mocoa";
            break;
        case "quindío":
            capital = "Armenia";
            break;
        case "risaralda":
            capital = "Pereira";
            break;
        case "san andres y providencia":
            capital = "San Andrés";
            break;
        case "santander":
            capital = "Bucaramanga";
            break;
        case "sucre":
            capital = "Sincelejo";
            break;
        case "tolima":
            capital = "Ibagué";
            break;
        case "valle del cauca":
            capital = "Cali";
            break;
        case "vaupés":
            capital = "Mitú";
            break;
        case "vichada":
            capital = "Puerto Carreño";
            break;
        default:
            capital = "No se ha digitado un departamento válido."
            break;
    }
    alert("Capital: "+ capital)
}

// Events
buttonCapitals.onclick = () => {
    findCapital();
}
