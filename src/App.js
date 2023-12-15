import { useState } from "react";
import { Routes, Route } from "react-router-dom";
//import Topbar from "./scenes/global/Topbar";

// Actualizacion al 14 de Diciembre de 2023:
// Se tacharan bastantes subsecciones de la app para poder desarrollarlas mas tarde, como no tiene una documentacion adecuada dejare la estructura de las escenas:
/*  
  scenes
      team
        index.jsx

*/
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
// import Team from "./scenes/team";                     DEJAREMOS DE UTILIZAR TEAM POR AHORA 
//import Invoices from "./scenes/invoices";              DEJAREMOS DE UTILIZAR INVOICES POR AHORA 
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Nodo1 from "./scenes/nodo1";             // MODIFICADO PARA LINKEAR LOS NODOS
import Nodo2 from "./scenes/nodo2";             // MODIFICADO PARA LINKEAR LOS NODOS
import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";          DEJAREMOS DE UTILIZAR GEOGRAPHY POR AHORA   
import { CssBaseline, ThemeProvider } from "@mui/material";     /*  */
import { ColorModeContext, useMode } from "./theme";           /* Para el colormode */
import Calendar from "./scenes/calendar/calendar";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar ] = useState(true);
  //const [setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app"> 
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            {/*<Topbar setIsSidebar={setIsSidebar} />        SE ESTA ELIMINANDO LA TOPBAR DE LA APLIACION PARA GENERAR ESPACIO, SE COLOCARA DENTRO DE UNA BOX EN LA DASHBOARD*/}  
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/*<Route path="/team" element={<Team />} />          SE ESTA ELIMINANDO ESTA FUNCION EN ESTA VERSION DE LA APP */}   
              <Route path="/contacts" element={<Contacts />} />
              {/*<Route path="/invoices" element={<Invoices />} />           SE ESTA ELIMINANDO ESTA FUNCION EN ESTA VERSION DE LA APP   */}   
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/nodo2" element={<Nodo2 />} />
              <Route path="/nodo1" element={<Nodo1 />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              {/* <Route path="/geography" element={<Geography />} />    SE ESTA ELIMINANDO ESTA FUNCION EN ESTA VERSION DE LA APP   */}   
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;