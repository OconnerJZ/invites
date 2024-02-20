import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PropTypes from "prop-types";
import { Drawer } from "antd";
import { useState } from "react";
import { API_KEY_MAPS, BASE_URL_API } from "@Const/enviroments";
import "animate.css";

const CardCeremony = ({ ceremony, animate = "heartBeat" }) => {
  const urlMaps = `https://www.google.com/maps/embed/v1/place?key=${API_KEY_MAPS}&q=${ceremony?.nameMaps}`;
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Card
        variant="outlined"
        sx={{
          width: 320,
          mb: "20px",
          boxShadow:
            "0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)",
        }}
      >
        <CardOverflow>
          <AspectRatio ratio="2">
            <img src={`${BASE_URL_API}files/${ceremony?.event_id}/images/${ceremony?.image}`} loading="lazy" alt="" />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
          <Typography
            className="titleSecondary"
            level="title-lg"
            textAlign="center"
          >
            {ceremony?.nameOficial}
          </Typography>
          <Typography
            className="titleContent"
            level="body-md"
            textAlign="center"
          >
            {ceremony?.namePlace}
          </Typography>
        </CardContent>
        <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
          <Divider inset="context" />
          <CardContent orientation="horizontal">
            <Typography
              level="body-lg"
              fontWeight="md"
              textColor="text.secondary"
            >
              <LocationOnIcon
                className={`animate__animated animate__${animate} animate__infinite animate__slow  animate__delay-5s`}
                onClick={showDrawer}
                sx={{ color: "red", cursor: "pointer", fontSize: "40px" }}
              />
            </Typography>
            <Divider orientation="vertical" />
            <Typography
              level="body-lg"
              fontWeight="md"
              textColor="text.secondary"
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="5px"
            >
              <AccessTimeIcon /> {ceremony?.hourEvent}
            </Typography>
          </CardContent>
        </CardOverflow>
      </Card>
      <Drawer
        title={ceremony?.namePlace}
        onClose={onClose}
        open={open}
        size="large"
      >
        <iframe
          width="100%"
          height="99%"
          style={{ border: 0 }}
          allowfullscreen="true"
          loading="lazy"
          src={urlMaps}
        />
      </Drawer>
    </>
  );
};

CardCeremony.propTypes = {
  ceremony: PropTypes.object,
  animate: PropTypes.string,
};

export default CardCeremony;
