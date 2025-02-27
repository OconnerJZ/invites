import CardCeremony from "@Components/cards/CardCeremony";
import CardConfirmation from "@Components/cards/CardConfirmation";
import CardDressCode from "@Components/cards/CardDressCode";
import { AWS_S3_URL } from "@Const/enviroments";
import { Box, Typography } from "@mui/material";
import MuiAvatar from "@mui/material/Avatar";
import PropTypes from "prop-types";

const Background = ({
  bgImage = "",
  parallax = false,
  width = "100vw",
  height = "100vh",
  birthday = {},
  mensaje,
  isDark = false,
  ceremony = {},
  location = {},
  dressCode = {},
  confirm = {},
}) => {
  const size = {
    width: parallax ? "--width" : "width",
    height: parallax ? "--height" : "height",
  };

  const hasDark = isDark
    ? `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.4)),url(${bgImage})`
    : `linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.3)),url(${bgImage})`;

  return (
    <Box
      component="div"
      className={parallax ? "image-background parallax" : "image-background"}
      sx={{
        [size.width]: `${width}`,
        [size.height]: `${height}`,
        [bgImage !== "" ? "backgroundImage" : "backgroundColor"]:
          bgImage !== "" ? hasDark : "#364258",
        boxShadow: !parallax ? "0px 0px 60px 8px rgba(1, 1, 1, 0.8)" : "none",
      }}
    >
      <Box
        style={{
          width: "100%",
          height: "100vh",
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexFlow: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {birthday?.nombreFestejado && (
            <Typography
              className="titlePrimary"
              sx={{
                color: !isDark ? "#3a3b3d" : "#f2f2f2",
                fontSize: "70px",
                textAlign: "center",
                mb: 8,
              }}
            >
              {`${birthday?.nombreFestejado.split(" ")[0]} ${birthday?.nombreFestejado.split(" ")[1]}`}
            </Typography>
          )}
          {birthday?.avatar && (
            <MuiAvatar
              alt={"foto"}
              src={`${AWS_S3_URL}files/${birthday?.id}/images/${birthday?.avatar}`}
              sx={{
                width: { xs: "180px", sm: "200px", md: "220px", lg: "250px" },
                height: { xs: "180px", sm: "200px", md: "220px", lg: "250px" },
                border: "3.6px solid #f2f2f2",
                mb: 8,
              }}
            />
          )}
          {birthday?.frase && (
            <Typography
              className="titlePrimary"
              sx={{
                color: !isDark ? "#3a3b3d" : "#f2f2f2",
                fontSize: "3rem",
                textAlign: "center",
              }}
            >
              {birthday?.frase}
            </Typography>
          )}
          {mensaje && (
            <Typography
              className="titlePrimary"
              sx={{
                width: { xs: "95%", sm: "90%", md: "80%", lg: "70%" },
                color: { xs: "#f2f2f2", md: "#3a3b3d" },
                fontSize: { xs: "32px", sm: "32px", md: "38px", lg: "40px" },
                textAlign: "center",
                backgroundColor: {
                  xs: "transparent",
                  md: "rgba(255,255,255,0.65)",
                },
                backdropFilter: { xs: "blur(2px)", md: "blur(3px)" },
                padding: { xs: "0px 0px", md: "0px 50px" },
                borderRadius: { xs: "20px", md: "80px" },
              }}
            >
              {mensaje}
            </Typography>
          )}

          {ceremony?.nameOficial && (
            <CardCeremony ceremony={ceremony} animate="bounce" />
          )}
          {location?.nameOficial && <CardCeremony ceremony={location} />}
          {dressCode?.code && <CardDressCode dressCode={dressCode} />}
          {confirm?.guestId && <CardConfirmation confirm={confirm} />}
        </Box>
      </Box>
    </Box>
  );
};

Background.propTypes = {
  bgImage: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  parallax: PropTypes.bool,
  birthday: PropTypes.object,
  mensaje: PropTypes.string,
  isDark: PropTypes.bool,
  ceremony: PropTypes.object,
  location: PropTypes.object,
  dressCode: PropTypes.object,
  confirm: PropTypes.object,
};

export default Background;
