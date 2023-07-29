//BIENVENIDA
let preguntonta = prompt("Desea ingresar a mondongo? (si / no)")
while (preguntonta === "si") {
    alert("BIENVENIDO A MONDONGO")
    // NOMBRE DE JUGADOR
    let nombreJugador = prompt("Bienvenido aventurero, por favor ingrese su nombre")
    alert("Bienvenido " + nombreJugador + " una gran aventura te espera.")
    // ELECCIONES
    let decision = prompt("Te despertaste temprano en un campamento y escuchas ruidos extraños, te levantas a revisar o te quedas en la carpa? (reviso / no reviso)")

    if (decision === "reviso") {
        let decision1 = prompt("Abriste la carpa para salir y hay un oso robándote la comida, ¿peleas? (si / no)")
        if (decision1 === "si") {
            for (let eleccion = 1; eleccion <= 2; eleccion++) {
                let respuesta = prompt("Te da mucho miedo y piensas en volver a la carpa, ¿lo haces? (si / no)")
                if (respuesta === "si") {
                    alert("El oso te escuchó y comenzó a acercarse")
                    if (eleccion === 2) {
                        alert("Estás en peligro, ¡el oso te ataca!")
                    }
                }
            }
        }
    }
    preguntonta = prompt("¿Desea ingresar a mondongo? (si / no)")
}