const Reserva = require("./reserva");
const sala = [
  ["U", "U", "U", "U", "U", "U", "U"],
  ["U", "U", "U", "U", "U", "U", "U"],
  ["U", "U", "U", "U", "U", "U", "U"],
  ["U", "U", "U", "U", "U", "U", "U"],
  ["U", "U", "U", "U", "U", "U", "U"],
  ["U", "U", "U", "U", "U", "U", "U"],
  ["U", "U", "U", "U", "U", "U", "U"],
];
/**
 * _llista :
 *  { uuid-234235324-234234523: {id: uuid-234235324-234234523, nom: 'pepito', hores: 10 }}
 */

class ReservaSalas {
  _llista = {
    abc: 123,
  };

  get llistatArr() {
    const llistat = [];
    Object.keys(this._llista).forEach((key) => {
      const reserva = this._llista[key];
      llistat.push(reserva);
    });

    return llistat;
  }

  constructor() {
    this._llista = {};
  }

  crearReserva(fila, columna) {
    const reserva = new Reserva(fila, columna);
    this.llistatArr.forEach((reservas) => {
      if (fila == reservas.fila && columna == reservas.columna) {
        return console.log("Butaca ocupada");
      } else {
        this._llista[reserva.id] = reserva;
      }
    });
  }
  carregarAlumnesFromArray(alumnes = []) {
    alumnes.forEach((alumne) => {
      this._llista[alumne.id] = alumne;
    });
  }

  recaudacio() {
    console.log(7.5 * this.llistatArr.length, "€");
  }

  eliminarReserva(id = "") {
    delete this._llista[id];
  }

  mostrarSala() {
    let result = "";

    for (let i = 0; i < sala.length; ++i) {
      result += "|";
      for (let j = 0; j < sala[i].length; ++j) {
        result += sala[i][j] + "|";
        this.llistatArr.forEach((id) => {
          const { fila, columna, pos } = id;
          if (pos == "X") {
            sala[fila][columna] = "X";
          }
        });
      }
      result += "\n";
    }

    console.log(result);
  }
  //   llistarAlumnes() {
  //     console.log(); // \n

  //     let conta = 0;
  //     this.llistatArr.forEach((alumne) => {
  //       const { nom } = alumne;
  //       conta += 1;
  //       console.log(`${(conta + ".").green} ${nom}`);
  //     });
  //   }
  //   llistarAlumnesHores() {
  //     console.log(); // \n

  //     let conta = 0;
  //     this.llistatArr.forEach((alumne) => {
  //       const { nom, horesFetes } = alumne;
  //       conta += 1;
  //       const hores =
  //         horesFetes > 0 ? `${horesFetes}`.green : `${horesFetes}`.red;

  //       //const prova = true ? "hola" : "adeu"; //condicional ternari

  //       console.log(
  //         `${(conta + ".").green} ${`Nom`.yellow} ${`${nom}`.cyan} :: ${
  //           `Hores`.yellow
  //         } ${hores}`
  //       );
  //     });
  //   }

  //   guardarHores(id = "", hores) {
  //     const alumne = this._llista[id];
  //     alumne.horesFetes = hores;
  //     return alumne.nom;
  //   }
  //   async eliminarReserva(id = "") {
  //     delete this._llista[id];
  //   }
}

module.exports = ReservaSalas;
