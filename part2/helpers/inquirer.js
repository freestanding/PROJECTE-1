const { countReset } = require("console");
const inquirer = require("inquirer");
require("colors");

const preguntes = [
  {
    type: "list",
    name: "opcio",
    message: "Què vols fer?",
    choices: [
      {
        value: "1",
        name: `${"1 ".green} Nova reserva`,
      },
      {
        value: "2",
        name: `${"2 ".green} Mostrar sala`,
      },
      {
        value: "3",
        name: `${"3 ".green} Mostrar recaudació`,
      },
      {
        value: "4",
        name: `${"4 ".green} Eliminar reserva`,
      },
      {
        value: "0",
        name: `${"0 ".green} Sortir`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("========================".cyan);
  console.log("   Selecciona una opció".yellow);
  console.log("========================\n".cyan);

  const { opcio } = await inquirer.prompt(preguntes);

  return opcio; // retorno un valor entre 0 i 5
};

const pausa = async () => {
  const question = [
    {
      type: "input",
      name: "enter",
      message: `Presiona ${"enter".yellow} per a continuar`,
    },
  ];
  console.log("\n");
  await inquirer.prompt(question);
};

const novaFila = async (message) => {
  const question = [
    {
      type: "input",
      name: "nom",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Si us plau, introdueix un nom";
        } else if (value > 7) {
          return "Si us plau, introdueix un valor entre 1-7";
        }

        return true;
      },
    },
  ];

  const { nom } = await inquirer.prompt(question);
  return nom;
};

const novaColumna = async (message) => {
  const question = [
    {
      type: "input",
      name: "nom",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Si us plau, introdueix un nom";
        } else if (value > 7) {
          return "Si us plau, introdueix un valor entre 1-7";
        }
        return true;
      },
    },
  ];

  const { nom } = await inquirer.prompt(question);
  return nom;
};

const reservaSelect = async (reserves = []) => {
  const choices = reserves.map((reserva, i) => {
    const idx = `${i + 1}.`.green;
    return {
      value: reserva.id,
      name: `${idx} Fila: ${reserva.fila.green} :: Butaca: ${reserva.columna.red}`,
    };
  });

  choices.unshift({
    value: "0",
    name: "0. ".green + "Cancel·lar",
  });
  const pregunta = [
    {
      type: "list",
      name: "id",
      message: "Selecciona la reserva",
      choices,
    },
  ];

  const { id } = await inquirer.prompt(pregunta);
  return id;
};

// const novesHores = async (message) => {
//   const question = [
//     {
//       type: "input",
//       name: "hores",
//       message,
//       validate(value) {
//         if (value.length === 0) {
//           return "Si us plau, introdueix les hores";
//         }
//         return true;
//       },
//     },
//   ];

//   const { hores } = await inquirer.prompt(question);
//   return hores;
// };

const confirmar = async (message) => {
  const question = [
    {
      type: "confirm",
      name: "ok",
      message,
    },
  ];

  const { ok } = await inquirer.prompt(question);
  return ok;
};

module.exports = {
  inquirerMenu,
  pausa,
  novaFila,
  novaColumna,
  reservaSelect,
  confirmar,
};
