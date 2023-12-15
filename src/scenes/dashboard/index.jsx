import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
/* import EmailIcon from "@mui/icons-material/Email";                                         /* Aqui definimos importando los iconos a usar  */
/*Voy a importar el icono de Ubiacion:  WhereToVote  de:
https://mui.com/material-ui/material-icons/?query=locat
*/

//ACTUALIZACION 15 Diciembre 2023 Agregaremos dos nuevos iconos:
import ExploreIcon from '@mui/icons-material/Explore';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';



import UltimaFecha from "../../components/UltimaFecha";

/* PRECIPITACION */
import Precipitacion from "../../components/Precipitacion";

/* VIENTO */
import React from "react";
import Viento from "../../components/Viento";

import WhereToVoteIcon from "@mui/icons-material/WhereToVote"; /* Ese icono es el de location pero con un check  */
/*import PointOfSaleIcon from "@mui/icons-material/PointOfSale"; */
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
// IMPORTAMOS LOS NUEVOS COMPONENTES:
import LineChartHumedad from "../../components/LineChartHumedad";
import LineChartPresion from "../../components/LineChartPresion";
import LineChartHumedad2 from "../../components/LineChartHumedad2";
import UVChart from "../../components/UVChart";
import WindSpeedChart from "../../components/WindSpeedChart";

//Definimos PolarChart:
import PolarChart from "../../components/PolarChart";
// import PieChart from "../../components/PieChart";

// IMPORTAMOS  LO NECESARIO PARA MOVER LOS ICONOS    RECORDEMOS QUE MNOVEREMOS LA FUNCION DE MODO OSCURO Y MODO CLARO DE EL ARCHIVO Topbar.jsx
import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";



const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);  //ESTA ES LA DEFICION QUE NOS FALTABA

  return (
    <Box m="20px">
      {/* HEADER  ACA ACOMODAREMOS LA FUNCION DE MODO OSCURO Y MODO CLARO, DEJANDO DE LADO LA TOPBAR PAGINA HECHA EN HTML  EN EL ARCHIVO TOPBAR*/}
      {/*  Lo acomodaremos del lado derecho con aling justify  */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Bienvenido a nuestra pagina web" />
        {/* ICONS */}
        
        {/* ICONO 1 */}
        <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        {/* ICONO 2 */}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        {/* ICONO 3 */}
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        {/* ICONO 4 */}
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>

      <Box>
        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          <DownloadOutlinedIcon sx={{ mr: "10px" }} />
          Descargar Datos Dashboard
        </Button>
      </Box>
    </Box>

      {/* GRID & CHARTS */ }
  <Box
    display="grid"
    gridTemplateColumns="repeat(12, 1fr)"
    gridAutoRows="140px"
    gap="20px"
  >
    {/* ROW 1  Aqui estaran las 4 cajas de informacion */}
    {/* Nodos Operando */}
    <Box
      gridColumn="span 3"
      backgroundColor={colors.primary[400]}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <StatBox
        title="1"
        subtitle="NODO INSTALADO"
        progress="0.0"
        increase="0 de 0 ACTIVOS"
        icon={
          <WhereToVoteIcon /*Aca cambiamos el icono */
            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
          />
        }
      />
    </Box>
    {/* Estaciones Instaladas */}
    <Box
      gridColumn="span 3"
      backgroundColor={colors.primary[400]}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <StatBox
        title="1 Estacion Activa"
        subtitle= {<UltimaFecha />}
        progress="1.0"
        increase="Ultima fecha Activa"
        icon={
          <WhereToVoteIcon /*Aca cambiamos el icono tambien */
            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
          />
        }
      />
    </Box>
    {/*  Direccion de viento*/}
    <Box
      gridColumn="span 3"
      backgroundColor={colors.primary[400]}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <StatBox
        title="Dirección actual del viento" 
        subtitle={<Viento/>}
        progress="1"
        increase="Actualizada hace 20 minutos"
        icon={
          <ExploreIcon
            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
          />
        }
      />
    </Box>
    {/*  Reportes de datos */}
    <Box
      gridColumn="span 3"
      backgroundColor={colors.primary[400]}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <StatBox
        title="Precipitacion de hoy"
        subtitle={<Precipitacion/>}
        progress="1"
        increase="Actualizado cada 24h a las 12pm"
        icon={
          <ThunderstormIcon
            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
          />
        }
      />
    </Box>


    {/* ROW 2     ACA ESTARA TEMPERATURA Y HUMEDAD AL CENTRO Y  A LA DERECHA ALTITUD*/}
    {/* Grafica de la izquierda */}
    <Box
      gridColumn="span 4"  // reducido el spn para que quepan
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
            BME280
          </Typography>
          <Typography
            variant="h3"
            fontWeight="bold"
            color={colors.greenAccent[500]}
          >
            Temperatura [°C]
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
        <LineChart isDashboard={true} />
      </Box>
    </Box>
    {/* Grafica del medio */}
    <Box
      gridColumn="span 4"
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
            BME280
          </Typography>
          <Typography
            variant="h3"
            fontWeight="bold"
            color={colors.redAccent[500]}
          >
            Humedad [%]
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
        <LineChartHumedad2 isDashboard={true} />
      </Box>
    </Box>
    {/* Grafica de la derecha  */}
    <Box
      gridColumn="span 4"
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
            ANEMOMETRO
          </Typography>
          <Typography
            variant="h3"
            fontWeight="bold"
            color={colors.redAccent[200]}
          >
            Velocidad pico de Viento [km/h.]
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
      <Box height="245px" m="-20px 0 0 0">
        <LineChartPresion isDashboard={true} />
      </Box>
    </Box>


    {/* ROW 3     ACA ESTARA PRESION Y VELOCIDAD DEL VIENTO EN EL CENTRO Y  RAYOS UV A LA DERECHA*/}
    {/* Grafica de la izquierda */}
    <Box
      gridColumn="span 4"
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
            BME280
          </Typography>
          <Typography
            variant="h3"
            fontWeight="bold"
            color={colors.blueAccent[300]}
          >
            Presion [hPa]
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
        <LineChartHumedad isDashboard={true} />
      </Box>
    </Box>
    {/* Grafica del medio */}
    <Box
      gridColumn="span 4"
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
            UV SENSOR 1
          </Typography>
          <Typography
            variant="h3"
            fontWeight="bold"
            color={colors.blueAccent[300]}
          >
            UV [µW/cm²nm]
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
        <UVChart isDashboard={true} />
      </Box>
    </Box>
    {/* Grafica de la derecha  */}
    <Box
      gridColumn="span 4"
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
            ANEMOMETRO
          </Typography>
          <Typography
            variant="h3"
            fontWeight="bold"
            color={colors.redAccent[200]}
          >
            Velocidad del viento [km/h]
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
      <Box height="245px" m="-20px 0 0 0">
        <WindSpeedChart isDashboard={true} />
      </Box>
    </Box>

    {/* ROW 4  COMPLPEMENTOS */}
    {/* tENEMOS UN PROBLEMA CON EL RESPONSIVE SUNBURST  DENTRO DEL COMPONENTE MAPA SOLAR*/}
    {/*<Box
      gridColumn="span 4"
      gridRow="span 2"
      backgroundColor={colors.primary[400]}
    >
      <Typography
        variant="h5"
        fontWeight="600"
        sx={{ padding: "30px 30px 0 30px" }}
      >
        DIRECCION DEL VIENTO
      </Typography>
      <Box height="310px" mt="-20px">
        <GeographyChart isDashboard={true} />
      </Box>
    </Box>

    <Box
      gridColumn="span 4"
      gridRow="span 2"
      backgroundColor={colors.primary[400]}
    >
      <Typography
        variant="h5"
        fontWeight="600"
        sx={{ padding: "30px 30px 0 30px" }}
      >
        Sales Quantity
      </Typography>
      <Box height="250px" mt="-20px">
        <BarChart isDashboard={true} />
      </Box>
    </Box>

    <Box
      gridColumn="span 4"
      gridRow="span 2"
      backgroundColor={colors.primary[400]}
    >
      <Typography
        variant="h5"
        fontWeight="600"
        sx={{ padding: "30px 30px 0 30px" }}
      >
        Sales Quantity
      </Typography>
      <Box height="250px" mt="-20px">
        <BarChart isDashboard={true} />
      </Box>
    </Box> */}

  </Box>
    </Box >
  );
};

export default Dashboard;
