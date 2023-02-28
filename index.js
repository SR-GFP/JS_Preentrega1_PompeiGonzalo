//declaracion de variables
const IVA = 1.21;
let cuenta = 0;
let servicio = 0;
let impresion = 0;
let talleRemera = 0;
let cantidadDeEstampados = 0;
let medidaDeViniloSolvente = 0;
let medidaDeViniloLatex = 0;
let cantidad = 0;
let nombre = "";
//FUNCIONES
function solictarNombre() {
    do {
        nombre = prompt("Ingresa tu nombre");
        if (nombre == "") {
            alert("Ingresa un nombre por favor.")
        }
    } while (nombre == "");
}

function menu() {
    do {
        servicio = 0;
        impresion = 0;
        talleRemera = 0;
        medidaDeViniloSolvente = 0;
        medidaDeViniloLatex = 0;
        cantidadDeEstampados = 0;
        servicio = parseInt(prompt("Hola " + nombre + "\nElegi el servicio:\n1_impresiones \n2_Remeras Estampadas "))
        if ((servicio != 1) && (servicio != 2)) {
            alerta()
        }
    } while ((servicio != 1) && (servicio != 2));
}

function alerta() {
    alert("Elegi una opcion de la lista!")
}

function Estampados(){
    do {
        cantidadDeEstampados = 0
        cantidadDeEstampados = parseFloat(prompt("Cuantos estampados vas querer: \n1_Frente ($100)\n2_Espalda ($200)\n3_Frente y espalda($300)\n4_Volver al menu anterior"))
        switch (cantidadDeEstampados){
            case 1:
                cantidadDeEstampados = 1
                break;
            case 2:
                cantidadDeEstampados = 2
                break;
            case 3:
                cantidadDeEstampados = 3
                break;
            case 4:
                cantidadDeEstampados = 4
                break;
            default:
                cantidadDeEstampados = 0
                alerta()
                break;
        }
    }while( cantidadDeEstampados == 0)
}

//INGRESAR USUARIo
solictarNombre()

//SELECCION DE SERVICIO
do {
    menu()
    switch (servicio) {
        case 1:
            do {
                impresion = 0
                medidaDeViniloLatex = 0
                medidaDeViniloSolvente = 0
                impresion = parseInt(prompt(nombre + " Elegi el tipo de impresion para tu vinilo: \n1_Solvente ($100 x M2) \n2_Latex ($200 x M2)\n3_Volver al Menu anteriror"))                
                switch (impresion) {
                    case 1:
                        do {
                            medidaDeViniloSolvente = 0
                            medidaDeViniloSolvente = parseInt(prompt(nombre + " Elegi la medida de tu vinilo Solvente: \n1_ 1mtr. x 1mtr. ($100) \n2_ 2mtr. x 1mtr. ($200) \n3_ 3mtr. x 1mtr. ($300) \n4_Volver al Menu anterior"))
                            switch (medidaDeViniloSolvente) {
                                case 1:
                                    medidaDeViniloSolvente = 1
                                    break;
                                case 2:
                                    medidaDeViniloSolvente = 2
                                    break;
                                case 3:
                                    medidaDeViniloSolvente = 3
                                    break;
                                case 4:
                                    medidaDeViniloSolvente = 4
                                    break;
                                default:
                                    medidaDeViniloSolvente = 0
                                    alerta()
                                    break;
                            }
                        } while (medidaDeViniloSolvente == 0)                        
                        break;

                    case 2:
                        do {
                            medidaDeViniloLatex = 0
                            medidaDeViniloLatex = parseInt(prompt(nombre + " Elegi la medida de tu vinilo Latex: \n1_ 1mtr. x 1mtr. ($200) \n2_ 2mtr. x 1mtr. ($400) \n3_ 3mtr. x 1mtr. ($600) \n4_Volver al Menu anterior"))
                            switch (medidaDeViniloLatex) {
                                case 1:
                                    medidaDeViniloLatex = 1
                                    break;
                                case 2:
                                    medidaDeViniloLatex = 2
                                    break;
                                case 3:
                                    medidaDeViniloLatex = 3
                                    break;
                                case 4:
                                    medidaDeViniloLatex = 4
                                    break;
                                default:
                                    medidaDeViniloLatex = 0
                                    alerta()
                                    break;
                            }
                        } while (medidaDeViniloLatex == 0)
                        break;
                    case 3:
                        impresion = 3
                        break;
                    default:
                        impresion = 0
                        alerta()
                        break;
                }
            } while ((impresion == 0) || (medidaDeViniloLatex == 4) || (medidaDeViniloSolvente == 4))
            break;
            
        case 2:
            do {
                talleRemera = 0
                talleRemera = parseInt(prompt("Elegi el talle de tu remera: \n1_S ($200) \n2_M ($400) \n3_L ($600) \n4_XL ($800) \n5_Volver al Menu anterior"))
                switch (talleRemera) {
                    case 1:
                        Estampados()
                        break;
                    case 2:
                        cantidadDeEstampados = parseFloat(prompt("Cuantos estampados vas querer: \n1_Frente ($200)\n2_Espalda ($300)\n3_Frente y espalda($500)"))
                        break;
                    case 3:
                        cantidadDeEstampados = parseFloat(prompt("Cuantos estampados vas querer: \n1_Frente ($300)\n2_Espalda ($400)\n3_Frente y espalda($700)"))
                        break;
                    case 4:
                        cantidadDeEstampados = parseFloat(prompt("Cuantos estampados vas querer: \n1_Frente ($400)\n2_Espalda ($500)\n3_Frente y espalda($900)"))
                        break;
                    case 5:
                        talleRemera = 5
                        break;
                    default:
                        alerta()
                        talleRemera = 0
                        break;
                }
            } while (talleRemera == 0)
            break;

        default:
            servicio = 0
            alerta()
            break;
    }
} while ( (servicio == 0) || (impresion == 3) || (talleRemera == 5));


cantidad = parseFloat(prompt("Cuantas unidades vas a querer:"));


console.log("logs finales")
console.log("Servicio: " + servicio)
console.log("Tipo de impresion: " + impresion)
console.log("Talle de Remera: " + talleRemera)
console.log("Cantidad de Estampados: " + cantidadDeEstampados)
console.log("Medida de Vinilo Solvente: " + medidaDeViniloSolvente)
console.log("Medida de Vinilo Latex: " + medidaDeViniloLatex)
console.log("Unidades: " + cantidad)
console.log(cuenta)

