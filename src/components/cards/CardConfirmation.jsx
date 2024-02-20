import { Fab, Typography } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import PropTypes from "prop-types";
import { Result } from "antd";
import { msjConfirmation } from "@Const/invite";
import DOMPurify from "dompurify";

const CardConfirmation = ({ confirm = {} }) => {
  const clean = DOMPurify.sanitize(msjConfirmation?.message);
  return (
    <>
      <Typography
        className="titlePrimary"
        sx={{
          width: { xs: "90vw", md: "50vw" },
          color: "#f2f2f2",
          padding: "20px",
          textAlign: "center",
          fontSize: { xs: "40px", md: "80px" },
          mb: 5,
          letterSpacing: "1.5px",
        }}
      >
        {msjConfirmation?.title}
      </Typography>

      {!confirm?.confirmation ? (
        <>
          <Typography
            className="titleContent"
            sx={{
              letterSpacing: "1px",
              fontWeight: "500",
              width: { xs: "95%", sm: "90%", md: "80%", lg: "70%" },
              color: { xs: "#fff" },
              fontSize: { xs: "17px", sm: "20px", md: "28px", lg: "34px" },
              textAlign: "center",
              mb: 8,
            }}
            dangerouslySetInnerHTML={{
              __html: clean,
            }}
          />
          <Fab
            variant="extended"
            color="success"
            onClick={() => confirm?.onConfirmation(confirm?.guestId)}
          >
            <VerifiedIcon sx={{ mr: 1 }} />
            {msjConfirmation?.btnTitle}
          </Fab>
        </>
      ) : (
        <Result
          status="success"
          title={msjConfirmation?.resultTitle}
          extra={msjConfirmation?.resultExtra}
        />
      )}
    </>
  );
};

CardConfirmation.propTypes = {
  confirm: PropTypes.object,
};

export default CardConfirmation;
