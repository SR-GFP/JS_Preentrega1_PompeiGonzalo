//declaracion de variables
const IVA = 1.21;
let cuenta = 0;
let servicio = 0;
let impresion = 0;
let talleRemera = 0;
let medidaDeVinilo = 0;
let nombre = "";
//FUNCIONES
function solictarNombre(){
    do{        
        nombre = prompt("Ingresa tu nombre");
        if(nombre == ""){
            alert("Ingresa un nombre por favor.")
        }
    }while(nombre =="" );
}

function menu (){    
    do{
        servicio = 0;
        impresion = 0;
        talleRemera = 0;
        medidaDeVinilo = 0;
        servicio = parseInt(prompt("Hola "+ nombre + "\n1_impresiones \n2_Remeras Estampadas "))
        if((servicio != 1) && (servicio != 2)){
            alerta()
        }
    }while ((servicio !=1) && (servicio !=2));
}

function alerta(){
    alert("Elegi una opcion de la lista**")
}
//INGRESAR USUARUI
solictarNombre()

//SELECCION DE SERVICIO
do{
    menu()    
    switch(servicio){
        case 1:
            impresion = parseInt (prompt
                (nombre + " Elegi el tipo de impresion para tu vinilo: \n1_Solvente ($100 x M2) \n2_Latex ($200 x M2)\n3_Volver al Menu anteriror"))            
                break
                switch(impresion){
                    case 1:
                        medidaDeVinilo = parseInt(prompt(nombre+" Elegi la medida de tu vinilo: \n1_ 1mtr. x 1mtr. ($100) \n2_ 2mtr. x 1mtr. ($200) \n3_ 3mtr. x 1mtr. ($300) \n4_Volver al Menu anterior"))
                        break
                    case 2:
                        medidaDeVinilo = parseInt(prompt(nombre+" Elegi la medida de tu vinilo: \n1_ 1mtr. x 1mtr. ($200) \n2_ 2mtr. x 1mtr. ($400) \n3_ 3mtr. x 1mtr. ($600) \n4_Volver al Menu anterior"))
                        break;
                    default:
                        alerta()
                }
        case 2:
            talleRemera = parseInt(prompt("Elegi el talle de tu remera: \n1_S ($200) \n2_M ($400) \n3_L ($600) \n4_XL ($800) \n5_Volver al Menu anterior"))
            break
        default:
            alerta()
            break
        }
}while((impresion == 3) || (talleRemera == 5));

switch(impresion){
    case 1:
        medidaDeVinilo = parseInt(prompt(nombre+" Elegi la medida de tu vinilo: \n1_ 1mtr. x 1mtr. ($100) \n2_ 2mtr. x 1mtr. ($200) \n3_ 3mtr. x 1mtr. ($300) \n4_Volver al Menu anterior"))
        break
    case 2:
        medidaDeVinilo = parseInt(prompt(nombre+" Elegi la medida de tu vinilo: \n1_ 1mtr. x 1mtr. ($200) \n2_ 2mtr. x 1mtr. ($400) \n3_ 3mtr. x 1mtr. ($600) \n4_Volver al Menu anterior"))
        break;
    default:
        alerta()
}
            
                    
                            


console.log("Selecion de Servicio Vale: " + servicio)
console.log("Valor de impresion: " + impresion)
console.log(talleRemera)
console.log(medidaDeVinilo)
console.log(cuenta)

