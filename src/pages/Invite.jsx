import Background from "@Components/background/Background";
import Temporizador from "@Components/temporizador/Temporizador";
import { Box, Typography } from "@mui/material";
import Ticket from "@Components/tickets/Ticket";
import moment from "moment";
import useInvite from "@Hooks/invite/useInvite";
import { msjTempo } from "@Const/invite";
import AudioComponent from "@Components/audio/AudioComponent";
import HelmetComponent from "src/HelmetComponent";

const Invite = () => {
  const {
    birthday,
    ceremony,
    hasCounterDown,
    dressCode,
    location,
    ticket,
    confirm,
    images,
    bg,
    path,
    pathAudio,
    contextHolder,
  } = useInvite();

  return (
    <>
      <HelmetComponent />
      {contextHolder}
      <AudioComponent pathAudio={pathAudio} />
      <Background
        bgImage={`${path}${bg?.bg_birthday?.path}`}
        parallax
        birthday={birthday}
      />
      {hasCounterDown && (
        <Box
          sx={{
            padding: "50px 0px",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.65)),url(${path}${bg?.bg_counterdown?.path})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            textAlign: "-webkit-center",
            boxShadow: "0px 0px 60px 8px rgba(1, 1, 1, 0.8)",
          }}
        >
          <Typography
            className="titlePrimary"
            sx={{
              color: "#f2f2f2",
              fontSize: "50px",
              textAlign: "center",
            }}
          >
            {moment(birthday?.dateBirthday).format("DD.MM.yyyy")}
          </Typography>
          <Typography
            className="titlePrimary"
            sx={{
              color: "#f2f2f2",
              fontSize: "45px",
              textAlign: "center",
              mb: 5,
            }}
          >
            {msjTempo}
          </Typography>
          <Temporizador fechaEvento={birthday?.dateBirthday} />
        </Box>
      )}
      <Background
        parallax
        bgImage={`${path}${bg?.bg_locations?.path}`}
        ceremony={ceremony}
        location={location}
      />

      <Box component="div" className="container">
        {images?.map((image) => (
          <Box key={`${image?.id}-img`}>
            <img
              alt=""
              width={"100%"}
              src={`${path}${image?.path}`}
              style={{
                display: "block",
                boxShadow: "0px 0px 60px 8px rgba(1, 1, 1, 0.8)",
              }}
            />
            <Typography
              className="bottom-centered titleContent"
              sx={{
                width: { xs: "95%", sm: "90%", md: "80%", lg: "70%" },
                color: { xs: "#000" },
                fontSize: { xs: "14px", sm: "32px", md: "38px", lg: "40px" },
                textAlign: "center",
                backgroundColor: {
                  xs: "rgba(255,255,255,0.65)",
                },
                backdropFilter: { xs: "blur(4px)" },
                padding: { xs: "0px 0px", md: "0px 50px" },
                borderRadius: { xs: "5px", md: "80px" },
                letterSpacing: ".8px",
                fontWeight: "550",
              }}
            >
              {image?.message}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box
        display={"flex"}
        justifyContent={"center"}
        sx={{
          padding: "40px",
          backgroundImage: `linear-gradient(rgba(255,255,255,0.9),rgba(255,255,255,0.7)), url(${path}${bg?.bg_ticket?.path})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Ticket ticket={ticket} />
      </Box>

      <Background
        parallax
        bgImage={`${path}${bg?.bg_dresscode?.path}`}
        dressCode={dressCode}
      />
      {confirm?.guestId !== "" && <Background confirm={confirm} />}
    </>
  );
};

export default Invite;
