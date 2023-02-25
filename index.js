//declaracion de variables
let cuenta = 0;
let seleccionServicio = 0;
let valorVinilos = 0;
let talleRemera = 0;
let medidaDeVinilo = 0;
let nombre = "";
//FUNCIONES
function solicitarNombre() {
    nombre = prompt("Ingresa tu nombre")    
}

function menu() {    
    seleccionServicio = parseInt(prompt(
        "Hola " + nombre +
        "\nSelecciona el producto que queres comprar: \n1_Vinilos \n2_Remeras Estampadas")
        );
    }
//INGRESAR nombre

do{
    solicitarNombre()
    if(nombre == "" ){
        alert("Ingresa un nombre")
    }
}while(nombre == "")

//seleecion de servicio
do{
    menu()
    if((seleccionServicio != 1) && (seleccionServicio !=2)){
        alert("Ingresa un valor correcto")
    }
}while((seleccionServicio != 1) && (seleccionServicio != 2))

switch(seleccionServicio){
    case 1:
        valorVinilos = parseInt (
            prompt( nombre + " Elegi el tipo de impresion para tu vinilo: \n1_Solvente ($100 x M2) \n2_Latex ($200 x M2)\n3_Volver al Menu anteriror")
        )        
            switch(valorVinilos){
                case 1:
                    medidaDeVinilo = parseInt(
                        prompt(nombre+" Elegi la medida de tu vinilo: \n1_ 1mtr. x 1mtr. ($100) \n2_ 2mtr. x 1mtr. ($200) \n3_ 3mtr. x 1mtr. ($300)")
                        )
                    break
                case 2:
                    medidaDeVinilo = parseInt(
                        prompt(nombre+" Elegi la medida de tu vinilo: \n1_ 1mtr. x 1mtr. ($200) \n2_ 2mtr. x 1mtr. ($400) \n3_ 3mtr. x 1mtr. ($600)")
                        )
                    break;
                case 3:
                    menu()
                    break
                default:
                    alert("El valor ingresado es incorrecto")
            }
    case 2:
        talleRemera= parseInt(
            prompt( nombre + " Elegi el talle de tu remera: \n1_S ($100) \n2_M ($200) \n3_L ($300) \n4_XL ($400)")
    )
        break
}


console.log(valorVinilos)
console.log(seleccionServicio)
console.log(talleRemera)
console.log(medidaDeVinilo)
console.log(cuenta)

