      for (let desafio = 1; desafio <= 3; desafio++) {
        let rta = prompt(
          `Desafio ${desafio}: Queres avanzar o volver? (avanzar/volver)`
        ).toLowerCase();

        if (rta === "avanzar") {
          // Elegimos avanzar
          alert(
            `Superaste el desafio ${desafio} y continuas aventurandote en las profundidades de la caverna...`
          );
          if (desafio == 3) {
            alert(
              "Felicidades! Superaste todos los desafios y encontraste un tesoro al final de la cueva. Ganaste!"
            );
          }
        } else if (rta === "volver") {
          // Volvemos!
          alert(
            "Decides volver y abandonar la caverna para seguir explorando!"
          );
          break; // para salir del loop
        } else {
          // Respuesta no valida
          alert(
            "Respuesta no valida, por favor, ingresar 'avanzar' o 'volver'"
          );
          desafio--; // Para re iniciar las aventuras
        }
      }