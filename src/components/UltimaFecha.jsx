import { useState, useEffect } from "react";
import { useTheme, Box, Typography } from "@mui/material";
import ExploreIcon from "@mui/icons-material/Explore";
import { tokens } from "../theme";

const obtenerUltimaFecha = (data) => {
  const ultimoValor = data.feeds[data.feeds.length - 1];

  if (ultimoValor) {
    const fechaPublicacion = new Date(ultimoValor.created_at);
    return fechaPublicacion.toLocaleString(); // o cualquier otro formato que prefieras
  } else {
    return null;
  }
};

const UltimaFecha = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [ultimaFecha, setUltimaFecha] = useState(null);

  const datosFetch = async () => {
    try {
      const response = await fetch(
        "https://api.thingspeak.com/channels/2263691/fields/8.json?results=1"
      );
      const data = await response.json();
      const fecha = obtenerUltimaFecha(data);
      setUltimaFecha(fecha);
    } catch (error) {
      console.error("Error al obtener los datos:", error.message);
    }
  };

  useEffect(() => {
    datosFetch();
  }, []);

  return (
    <Box>
      {ultimaFecha !== null ? (
        <Typography variant="h4" fontWeight="bold" color={colors.greenAccent[600]}>
          {ultimaFecha}
        </Typography>
      ) : (
        <ExploreIcon sx={{ fontSize: "26px", color: colors.greenAccent[600] }} />
      )}
    </Box>
  );
};

export default UltimaFecha;