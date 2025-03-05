import { useEffect, useState } from "react";

const useAudio = ({ rola }) => {
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // 🔹 Detecta la primera interacción y habilita la reproducción
  const handleFirstInteraction = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
    }
  };

  // 🔹 Inicializa el audio solo después de la interacción
  useEffect(() => {
    if (hasInteracted && rola) {
      const newAudio = new Audio(rola);
      newAudio.loop = true; // Opcional: repetir la canción
      newAudio.onended = () => setIsPlaying(false);
      setAudio(newAudio);

      // Intentamos reproducir el audio inmediatamente
      newAudio
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => console.error("Error al iniciar la reproducción:", error));
    }
  }, [hasInteracted, rola]);

  // 🔹 Agrega eventos para detectar la primera interacción
  useEffect(() => {
    const events = ["click", "touchstart", "scroll"];
    events.forEach((event) => document.addEventListener(event, handleFirstInteraction, { once: true }));

    return () => {
      events.forEach((event) => document.removeEventListener(event, handleFirstInteraction));
    };
  }, []);

  // 🔹 Función para alternar manualmente el audio
  const toggleAudio = () => {
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) =>
          console.error("Error al iniciar la reproducción:", error)
        );
    }
  };

  return { isPlaying, toggleAudio };
};

export default useAudio;
