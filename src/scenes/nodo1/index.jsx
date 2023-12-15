import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import UltimaFecha from "../../components/UltimaFecha";
import Viento from "../../components/Viento";

// IMPORTAMOS LAS GRAFICAS DEL NPK:
// GRAFICAS DE LA PRIMERA ROW (1 a 4)
import HumedadNPK from "../../components/HumedadNPK";
import TemperaturaNPK from "../../components/TemperaturaNPK";
import ConductividadNPK from "../../components/ConductividadNPK";
import PHNPK from "../../components/PHNPK";
// GRAFICAS DE LA SEGUNDA ROW (4 a 8)
import NitrogenoNPK from "../../components/NitrogenoNPK";
import FosforoNPK from "../../components/FosforoNPK";
import PotasioNPK from "../../components/PotasioNPK";
import MapaGoogle from "../../components/MapaGoogle";

import { tokens } from "../../theme";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
// SOLUCIONAMOS LOS ERRORES: 

    // ICONO DE DOWNLOAD
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

/* Ese icono es el de location pero con un check  */
/*import PointOfSaleIcon from "@mui/icons-material/PointOfSale"; */


// IMPORTAMOS LOS NUEVOS COMPONENTES:
import LineChartHumedad from "../../components/LineChartHumedad";
import LineChartPresion from "../../components/LineChartPresion";
import LineChartHumedad2 from "../../components/LineChartHumedad2";
import UVChart from "../../components/UVChart";
import WindSpeedChart from "../../components/WindSpeedChart";

// IMPORTAMOS  LO NECESARIO PARA MOVER LOS ICONOS    RECORDEMOS QUE MNOVEREMOS LA FUNCION DE MODO OSCURO Y MODO CLARO DE EL ARCHIVO Topbar.jsx
import { useContext } from "react";
import { ColorModeContext } from "../../theme";



const Nodo1 = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);  //ESTA ES LA DEFICION QUE NOS FALTABA

  return (
    <Box m="20px">
      <Header
        title="Nodo NPK de Tierra"
        subtitle={
          <>  
            <Typography variant="body1" color="textSecondary" sx={{ fontSize: "1.2rem" }}>
              Ultima Actividad <UltimaFecha />
            </Typography>
          </>
        }
      />
      {/* GRID & CHARTS */ }
      <Box
    display="grid"
    gridTemplateColumns="repeat(12, 1fr)"
    gridAutoRows="140px"
    gap="20px"
  >
    {/* ROW 2     ACA ESTARA TEMPERATURA Y HUMEDAD AL CENTRO Y  A LA DERECHA ALTITUD*/}
    {/* Grafica HUMEDAD DEL SUELO */}
    <Box
      gridColumn="span 3"  // reducido el spn para que quepan
      gridRow="span 2"
      backgroundColor={colors.primary[400]}
    >
      <Box
        mt="25px"
        p="0 30px"
        display="flex "
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Typography
            variant="h5"
            fontWeight="600"
            color={colors.grey[100]}
          >
            Sensor NPK
          </Typography>
          <Typography
            variant="h3"
            fontWeight="bold"
            color={colors.greenAccent[500]}
          >
            Humedad del Suelo
          </Typography>
        </Box>
        <Box>
          <IconButton>
            <DownloadOutlinedIcon
              sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
            />
          </IconButton>
        </Box>
      </Box>
      <Box height="245px" m="-20px 0 0 0">
        <HumedadNPK isDashboard={true} />
      </Box>
    </Box>
    {/* Grafica TEMPERATURA DEL SUELO */}
    <Box
      gridColumn="span 3"
      gridRow="span 2"
      backgroundColor={colors.primary[400]}
    >
      <Box
        mt="25px"
        p="0 30px"
        display="flex "
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Typography
            variant="h5"
            fontWeight="600"
            color={colors.grey[100]}
          >
            Sensor NPK
          </Typography>
          <Typography
            variant="h3"
            fontWeight="bold"
            color={colors.redAccent[500]}
          >
            Temperatura del Suelo
          </Typography>
        </Box>
        <Box>
          <IconButton>
            <DownloadOutlinedIcon
              sx={{ fontSize: "22px", color: colors.redAccent[500] }}
            />
          </IconButton>
        </Box>
      </Box>
      <Box height="240px" m="-20px 0 0 0">
        <TemperaturaNPK isDashboard={true} />
      </Box>
    </Box>
    {/* Grafica CONDUCTIVIDAD DEL SUELO  */}
    <Box
      gridColumn="span 3"
      gridRow="span 2"
      backgroundColor={colors.primary[400]}
    >
      <Box
        mt="25px"
        p="0 30px"
        display="flex "
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Typography
            variant="h5"
            fontWeight="600"
            color={colors.grey[100]}
          >
            Sensor NPK
          </Typography>
          <Typography
            variant="h3"
            fontWeight="bold"
            color={colors.redAccent[200]}
          >
            Conductividad del Suelo
          </Typography>
        </Box>
        <Box>
          <IconButton>
            <DownloadOutlinedIcon
              sx={{ fontSize: "26px", color: colors.redAccent[200] }}
            />
          </IconButton>
        </Box>
      </Box>
      <Box height="240px" m="-20px 0 0 0">
        <ConductividadNPK isDashboard={true} />
      </Box>
    </Box>
    {/* Grafica PH */}
    <Box
      gridColumn="span 3"
      gridRow="span 2"
      backgroundColor={colors.primary[400]}
    >
      <Box
        mt="25px"
        p="0 30px"
        display="flex "
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Typography
            variant="h5"
            fontWeight="600"
            color={colors.grey[100]}
          >
            Sensor NPK
          </Typography>
          <Typography
            variant="h3"
            fontWeight="bold"
            color={colors.blueAccent[300]}
          >
            PH
          </Typography>
        </Box>
        <Box>
          <IconButton>
            <DownloadOutlinedIcon
              sx={{ fontSize: "26px", color: colors.blueAccent[300] }}
            />
          </IconButton>
        </Box>
      </Box>
      <Box height="245px" m="-20px 0 0 0">
        <PHNPK isDashboard={true} />
      </Box>
    </Box>

    {/* ROW 2 */}
    {/* Grafica NITROGENO */}
    <Box
      gridColumn="span 3"
      gridRow="span 2"
      backgroundColor={colors.primary[400]}
    >
      <Box
        mt="25px"
        p="0 30px"
        display="flex "
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Typography
            variant="h5"
            fontWeight="600"
            color={colors.grey[100]}
          >
            Sensor NPK
          </Typography>
          <Typography
            variant="h3"
            fontWeight="bold"
            color={colors.blueAccent[300]}
          >
            Nitrogeno
          </Typography>
        </Box>
        <Box>
          <IconButton>
            <DownloadOutlinedIcon
              sx={{ fontSize: "26px", color: colors.blueAccent[300] }}
            />
          </IconButton>
        </Box>
      </Box>
      <Box height="245px" m="-20px 0 0 0">
        <NitrogenoNPK isDashboard={true} />
      </Box>
    </Box>
    {/* Grafica FOSFORO */}
    <Box
      gridColumn="span 3"
      gridRow="span 2"
      backgroundColor={colors.primary[400]}
    >
      <Box
        mt="25px"
        p="0 30px"
        display="flex "
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Typography
            variant="h5"
            fontWeight="600"
            color={colors.grey[100]}
          >
            Sensor NPK
          </Typography>
          <Typography
            variant="h3"
            fontWeight="bold"
            color={colors.greenAccent[300]}
          >
            Fosforo
          </Typography>
        </Box>
        <Box>
          <IconButton>
            <DownloadOutlinedIcon
              sx={{ fontSize: "26px", color: colors.blueAccent[300] }}
            />
          </IconButton>
        </Box>
      </Box>
      <Box height="245px" m="-20px 0 0 0">
        <FosforoNPK isDashboard={true} />
      </Box>
    </Box>
    {/* Grafica POTASIO */}
    <Box
      gridColumn="span 3"
      gridRow="span 2"
      backgroundColor={colors.primary[400]}
    >
      <Box
        mt="25px"
        p="0 30px"
        display="flex "
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Typography
            variant="h5"
            fontWeight="600"
            color={colors.grey[100]}
          >
            Sensor NPK
          </Typography>
          <Typography
            variant="h3"
            fontWeight="bold"
            color={colors.redAccent[500]}
          >
            Potasio
          </Typography>
        </Box>
        <Box>
          <IconButton>
            <DownloadOutlinedIcon
              sx={{ fontSize: "26px", color: colors.redAccent[500] }}
            />
          </IconButton>
        </Box>
      </Box>
      <Box height="245px" m="-20px 0 0 0">
        <PotasioNPK isDashboard={true} />
      </Box>
    </Box>
    {/* Grafica MAPA GOOGLE*/}
    <Box
  gridColumn="span 3"
  gridRow="span 2"
  backgroundColor={colors.primary[400]}
>
  <Box
    mt="25px"
    p="0 30px"
    display="flex "
    justifyContent="space-between"
    alignItems="center"
  >
    <Box>
      <Typography
        variant="h5"
        fontWeight="600"
        color={colors.grey[100]}
      >
        Maps
      </Typography>
      <Typography
        variant="h3"
        fontWeight="bold"
        color={colors.redAccent[200]}
      >
        Ubicacion del nodo
      </Typography>
    </Box>
    <Box>
      <IconButton>
        <DownloadOutlinedIcon
          sx={{ fontSize: "26px", color: colors.redAccent[200] }}
        />
      </IconButton>
    </Box>
  </Box>
  <Box height="400px" m="-20px 0 0 0">
    {/* Coloca aquí tu componente de Google Maps */}
    <MapaGoogle />
  </Box>
    </Box>

    {/* ROW 4  COMPLPEMENTOS VACIA PARA MAS ADELANTE */}

  </Box>
    </Box >
  );
};
export default Nodo1;
