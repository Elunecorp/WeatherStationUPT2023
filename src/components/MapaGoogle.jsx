import { Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { tokens } from "../theme";

const MapaGoogle = () => {
    const colors = tokens("dark"); // Asegúrate de que estás obteniendo los colores correctamente
  
    return (
      <>
        <Box
          mt="25px"
          p="0 30px"
          display="flex "
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
              .
            </Typography>
          </Box>
        </Box>
        <Box height="245px" m="-20px 0 0 0">
          {/* Aquí colocamos el iframe con el mapa de Google */}
          <iframe
            title="Mapa de Google" 
            src="https://www.google.com/maps/d/embed?mid=1uSpoL_hLaTaKiCOxEHotFlcJhxAFyvA&femb=1&ll=-17.892871893533567%2C-70.15010885970673&z=17"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </Box>
      </>
    );
  };
  
  export default MapaGoogle;