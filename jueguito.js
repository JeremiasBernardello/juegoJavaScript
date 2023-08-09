//BIENVENIDA
let preguntonta = prompt("Desea ingresar a mondongo? (si / no)")

while (preguntonta === "si") {
    //ENTRADA AL JUEGO
    alert("BIENVENIDO A MONDONGO")

    // NOMBRE DE JUGADOR
    let nombreJugador = prompt("Como es tu nombre, aventurero?")
    alert("Bienvenido " + nombreJugador + " una gran aventura te espera.")

    // ELECCIONES
    let decision = prompt("Te despertaste temprano en un campamento y escuchas ruidos extraños, te levantas a revisar o te quedas en la carpa? (reviso / no reviso)")

    //PRIMERA ELECCION
    if(decision === "reviso"){
        let decision1 = prompt("Un oso esta revisando tu alacena de comida, salis a intentar auyentarlo? (si / no)")
        
        if(decision1 === "si"){
            alert("El oso te mira a los ojos con una mirada parecida al de una bestia salida del infierno")

            for(let i = 1; i <=3; i++){
                let desafio = prompt("Al darte cuenta de la situacion te da mucho miedo, decidis seguir adelante (1) o volver a la carpa (2)")
                if(desafio === "1"){
                    alert("El oso comienza a perseguirte")
                }else if(desafio === "2"){
                    alert("El oso se acerca hacia vos")
                }
            }
        }
    }
    preguntonta = prompt("Desea volver a jugar? (si / no)")
}