import { labelsTempo } from "@Const/invite";
import useTemporizador from "@Hooks/temporizador/useTemporizador";
import { Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import PropTypes from "prop-types";

const Temporizador = ({ fechaEvento }) => {
  const { tiempoRestante } = useTemporizador({ fechaEvento });
  const temporizador = (tiempo) => {
    const data = [
      {
        label: labelsTempo?.days,
        value: tiempo.dias,
      },
      {
        label: labelsTempo?.hours,
        value: tiempo.horas,
      },
      {
        label: labelsTempo?.minutes,
        value: tiempo.minutos,
      },
      {
        label: labelsTempo?.seconds,
        value: tiempo.segundos,
      },
    ];
    return (
      <Grid
        container
        className="tempo"
        sx={{
          padding: {
            xs: "0 30px",
            sm: "0 80px",
            md: "0 150px",
            lg: "0 300px",
          },
        }}
      >
        {data.map((item, i) => {
          return (
            <Grid key={`${item.label}-${i}`} item xs={6} sm={3} md={3} lg={3}>
              <Card
                className="card-temp-width"
                sx={{
                  width: 130,
                  textAlign: "center",
                  mb: "5px",
                  mt: "5px",
                  backgroundColor: "rgba(255,255,255,0.85)",
                  backdropFilter: "blur(4px)",
                }}
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: "60px" }}
                    className="titleSecondary"
                  >
                    {item.value}
                  </Typography>
                  <Typography
                    sx={{ fontSize: "20px" }}
                    className="titleSecondary titles-temp"
                  >
                    {item.label.toUpperCase()}{" "}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    );
  };
  return <>{temporizador(tiempoRestante)}</>;
};

Temporizador.propTypes = {
  fechaEvento: PropTypes.string.isRequired,
};

export default Temporizador;
