import { Grid } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import UltimaFecha from "../../components/UltimaFecha";
// importamos para imprimir la fecha:
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";


const Nodo2 = () => {
    return (
      <Box m="20px">
        <Header
          title="Nodo NPK de Tierra"
          //subtitle={<UltimaFecha />}
          subtitle="Nodo no vinculado"
        />
      </Box>
    );
  };
export default Nodo2