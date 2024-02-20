import { cuentaRegresiva } from "@Utils/commons";
import { useEffect, useState } from "react";
const useTemporizador = ({ fechaEvento, interval = 1000 }) => {
  fechaEvento = new Date(fechaEvento).getTime();
  const [tiempoRestante, setTiempoRestante] = useState(
    cuentaRegresiva({ fechaEvento })
  );

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTiempoRestante(cuentaRegresiva({ fechaEvento }));
    }, interval);
    return () => {
      clearInterval(intervalo);
    };
  }, [fechaEvento, interval]);

  return {
    tiempoRestante,
  };
};

export default useTemporizador;
