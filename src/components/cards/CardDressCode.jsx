import { msjDressCode } from "@Const/invite";
import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

const CardDressCode = ({ dressCode }) => {
  return (
    <>
      <Box
        className="titlePrimary"
        sx={{
          width: { xs: "90vw", md: "50vw" },
          backgroundColor: "rgba(0,0,0,0.7)",
          color: "#f2f2f2",
          padding: "20px",
          textAlign: "center",
          borderRadius: "110px",
          fontSize: { xs: "40px", md: "70px" },
          mb: 5,
          letterSpacing: "1.3px",
        }}
      >
        {msjDressCode?.title}
      </Box>

      <Typography
        sx={{
          width: { xs: "95%", sm: "90%", md: "80%", lg: "70%" },
          backgroundImage:
            "radial-gradient(circle at 56.6% 38.56%, #fffbae 5%, #ffe9a6 15%, #d8b46c 50%, #c99f54 75%, #bd8c40 100%)",
          textAlign: "center",
          fontSize: "30px",
        }}
        className="titleSecondary"
      >
        {dressCode?.code}
      </Typography>

      <Typography
        className="titleContent"
        sx={{
          letterSpacing: "1px",
          fontWeight: "500",
          width: { xs: "95%", sm: "90%", md: "80%", lg: "70%" },
          color: { xs: "#3a3b3d" },
          fontSize: { xs: "16px", sm: "22px", md: "28px", lg: "34px" },
          textAlign: "center",
          backgroundColor: {
            xs: "rgba(255,255,255,0.65)",
          },
          backdropFilter: { xs: "blur(2px)", md: "blur(3px)" },
          padding: { xs: "5px 0px", md: "0px 50px" },
        }}
      >
        {dressCode?.message === undefined || dressCode?.message === ""
          ? msjDressCode?.message
          : dressCode?.message}
      </Typography>
    </>
  );
};

CardDressCode.propTypes = {
  dressCode: PropTypes.object,
};

export default CardDressCode;
