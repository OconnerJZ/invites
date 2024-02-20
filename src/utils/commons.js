export const cuentaRegresiva = ({ fechaEvento }) => {
  const fechaActual = new Date().getTime();
  const diferencia = fechaEvento - fechaActual;

  if (diferencia < 0) {
    return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor(
    (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  return { dias, horas, minutos, segundos };
};

export const extractFirstCharacters = ({ phrase = "" }) => {
  const words = phrase.split(" ");
  let characters = "";
  words.map((word) => (characters += word.charAt(0)));
  return characters;
};
