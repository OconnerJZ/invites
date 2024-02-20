import useAudio from "@Hooks/audio/useAudio";
import { IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import PropTypes from "prop-types";

const AudioComponent = ({ pathAudio }) => {
  const { isPlaying, toggleAudio } = useAudio({ rola: pathAudio });
  return (
    <>
      {!isPlaying ? (
        <IconButton
          onClick={toggleAudio}
          aria-label="play"
          sx={{
            position: "fixed",
            top: "50%",
            left: "20px",
            transform: "translate(-50%, -50%)",
            zIndex: 9999,
            backgroundColor: "rgba(255,255,255,1)",
          }}
        >
          <PlayArrowIcon />
        </IconButton>
      ) : (
        <IconButton
          onClick={toggleAudio}
          aria-label="pause"
          sx={{
            position: "fixed",
            top: "50%",
            left: "20px",
            transform: "translate(-50%, -50%)",
            zIndex: 9999,
            backgroundColor: "rgba(255,255,255,1)",
          }}
        >
          <PauseIcon />
        </IconButton>
      )}
    </>
  );
};

AudioComponent.propTypes = {
    pathAudio: PropTypes.string,
  };

export default AudioComponent;
