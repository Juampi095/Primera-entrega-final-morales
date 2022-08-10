// //Saludo
// function saludar() {
//     let nombre = prompt("Cual es tu nombre?");
//     alert("¡Bienvenido a CarArt! " + nombre);
// }
// saludar();

// // //Marca de Autos


// function marcaDeAuto() {

//     let marcaAutos = prompt("Ingresa la marca y te diremos el precio y la disponibilidad");
//     switch (marcaAutos) {
//         case "lamborghini":
//         case "LAMBORGHINI":

//             alert("El precio es de $12499 y tenemos en stock");
//             break;

//         case "pagani":

//         case "PAGANI":

//             alert("El precio es de $14999 y tenemos en stock");

//             break;

//         case "ferrari":
//         case "FERRARI":
//             alert("El precio es de $12999 y tenemos en stock");
//             break;

//         default:
//             alert("No tenemos en stock por el momento, revisa mas tarde");
//             break;
//     }
// }
// marcaDeAuto();


//ARRAYS DE AUTOS
const autos = [
    {
        marca: "Lamborghini",
        modelo: "Aventador",
        tamaño: "1/18",
        precio: "14999",
    },
    {
        marca: "Pagani",
        modelo: "Huayra BC",
        tamaño: "1/24",
        precio: "16499",
    },
    {
        marca: "Ferrari",
        modelo: "488 GT3",
        tamaño: "1/18",
        precio: "11999",
    }
];
console.table(autos);

//  for (const auto of autos) {
//      console.log("Marca " + auto.marca + " Precio $" + auto.precio);
// }

//Ingresa el modelo a Buscar
let modelo = prompt("Ingresa el modelo a buscar");
for (const auto of autos) {
    if (auto.modelo == modelo) {
        alert("Modelo encontrado");
        let aString = auto.marca + "\n" + auto.modelo + "\n" + auto.tamaño + "\n" + auto.precio;
        alert(aString);

    }
}
