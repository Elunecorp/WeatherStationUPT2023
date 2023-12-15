import { useState, useEffect } from "react";
//import { Box } from "@mui/material";
import { StatBox } from "./StatBox";
import ExploreIcon from "@mui/icons-material/Explore";
//import { useTheme } from "@mui/material/styles";
import { tokens } from "../theme";

//import React, { useEffect, useState } from "react";
import { useTheme, Box, Typography } from "@mui/material";


const obtenerDireccionDesdeAngulo = (angulo) => {
  // Asignar una dirección según el rango de ángulos
  if (angulo >= 337.5 || angulo < 22.5) {
    return "Norte";
  } else if (angulo >= 22.5 && angulo < 67.5) {
    return "Noreste";
  } else if (angulo >= 67.5 && angulo < 112.5) {
    return "Este";
  } else if (angulo >= 112.5 && angulo < 157.5) {
    return "Sureste";
  } else if (angulo >= 157.5 && angulo < 202.5) {
    return "Sur";
  } else if (angulo >= 202.5 && angulo < 247.5) {
    return "Suroeste";
  } else if (angulo >= 247.5 && angulo < 292.5) {
    return "Oeste";
  } else if (angulo >= 292.5 && angulo < 337.5) {
    return "Noroeste";
  } else {
    return "Desconocida";
  }
};

const Viento = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [direccionViento, setDireccionViento] = useState(null);

  const datosFetch = async () => {
    try {
      const response = await fetch(
        "https://api.thingspeak.com/channels/2263691/fields/8.json?results=1"
      );
      const data = await response.json();
      const anguloViento = data.feeds[0]?.field8;
      const direccionViento = obtenerDireccionDesdeAngulo(anguloViento);
      setDireccionViento(direccionViento);
    } catch (error) {
      console.error("Error al obtener los datos del viento:", error.message);
    }
  };

  useEffect(() => {
    datosFetch();
  }, []);

  return (
    <Box>
      {direccionViento !== null ? (
        <Typography variant="h4" fontWeight="bold" color={colors.greenAccent[600]}>
          {direccionViento}
        </Typography>
      ) : (
        <ExploreIcon sx={{ fontSize: "26px", color: colors.greenAccent[600] }} />
      )}
    </Box>
  );
};

export default Viento;