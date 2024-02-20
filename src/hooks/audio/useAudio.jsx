import { useEffect, useLayoutEffect, useState } from "react";

const useAudio = ({ rola }) => {
  const [audio, setAudio] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  const toggleAudio = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  useLayoutEffect(() => {
    if (rola != "") {
      setAudio(new Audio(rola));
    }
  }, [rola]);

  useEffect(() => {
    if (audio) {
        document.addEventListener("click", handleClick);
        document.addEventListener("touchstart", handleClick);
    }
    return () => {
    //   document.removeEventListener("touchstart", handleClick);
      document.removeEventListener("click", handleClick);
    };
  }, [audio]);

  useEffect(() => {
    if (clicked) {
      audio
        .play()
        .then(() => setIsPlaying(!isPlaying))
        .catch((error) =>
          console.error("Error al iniciar la reproducción:", error)
        );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clicked]);
  return { isPlaying, toggleAudio };
};

export default useAudio;
