import GeneralContent from "@Components/layout/GeneralContent";
import useMyInvites from "@Hooks/invite/useMyInvites";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { BASE_URL_API } from "@Const/enviroments";
import { Grid, IconButton, Stack, Tooltip } from "@mui/material";
import BallotIcon from "@mui/icons-material/Ballot";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";
import { typeEvents } from "@Const/lists";

const MyInvites = () => {
  const { events } = useMyInvites();
  const navigate = useNavigate();
  return (
    <GeneralContent>
      <Grid container sx={{ padding: { xs: "10px", md: "20px" } }}>
        {events.map((even, i) => (
          <Grid key={i} item xs={6} sm={6} md={4} lg={3}>
            <Card
              key={i}
              variant="outlined"
              orientation="horizontal"
              sx={{
                width: 280,
                "&:hover": {
                  boxShadow: "md",
                  borderColor: "neutral.outlinedHoverBorder",
                },
              }}
            >
              <AspectRatio ratio="1" sx={{ width: 90 }}>
                <img
                  src={`${BASE_URL_API}files/${even?.id}/images/${even?.avatar}`}
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
              <CardContent>
                <Typography level="title-lg" id="card-description">
                  {typeEvents[even?.event_type_id]}
                </Typography>
                <Typography
                  level="body-sm"
                  aria-describedby="card-description"
                  mb={0.5}
                >
                  <Typography>{even?.name_celebrated}</Typography>
                </Typography>
                <Stack direction="row">
                  <Tooltip title="Ver lista de invitados">
                    <IconButton
                      onClick={() => {
                        navigate(`${even?.id}/guests`);
                      }}
                      aria-label="delete"
                    >
                      <BallotIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Ver diseño de la invitación">
                    <IconButton
                      onClick={() => {
                        navigate(`${even?.id}`);
                      }}
                      aria-label="delete"
                    >
                      <VisibilityIcon />
                    </IconButton>
                  </Tooltip>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </GeneralContent>
  );
};

export default MyInvites;
