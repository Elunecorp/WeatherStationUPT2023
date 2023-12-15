import { useState, useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import ExploreIcon from "@mui/icons-material/Explore";
import { tokens } from "../theme";

const Precipitacion = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [ultimaPrecipitacion, setUltimaPrecipitacion] = useState(null);

  const datosFetch = async () => {
    try {
      const response = await fetch(
        "https://api.thingspeak.com/channels/2263691/fields/4.json?results=1" // Asegúrate de que el campo sea el correcto (field4)
      );
      const data = await response.json();
      const ultimaPrecipitacion = data.feeds[0]?.field4; // Asegúrate de que el campo sea el correcto (field4)
      setUltimaPrecipitacion(ultimaPrecipitacion);
    } catch (error) {
      console.error(
        "Error al obtener los datos de precipitación:",
        error.message
      );
    }
  };

  useEffect(() => {
    datosFetch();
  }, []);

  return (
    <Box>
      {ultimaPrecipitacion !== null ? (
        <Typography
          variant="h4"
          fontWeight="bold"
          color={colors.blueAccent[600]}
        >
          {" "}
          {/* Puedes ajustar el color según tu paleta */}
          {ultimaPrecipitacion} mm
        </Typography>
      ) : (
        <ExploreIcon sx={{ fontSize: "26px", color: colors.blueAccent[600] }} />
      )}
    </Box>
  );
};

export default Precipitacion;
