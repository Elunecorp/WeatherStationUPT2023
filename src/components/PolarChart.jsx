import { ResponsiveLine } from '@nivo/line' // USAREMOS EL POLARCHART
// import { useEffect, useState } from "react";
// import { useTheme } from "@mui/material"; // FROM MUI MATERIAL EXTRAEMOS LA FUENTE DE LA PAGINA
import { tokens } from "../theme";
import { mockDataSun as data } from "../data/DataTest";
// polar chaet clpolar chart

const PolarChart = ({ isCustomLineColors = false, isDashboard = false }) => {
  return (
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        lineWidth={1}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
  );
};

export default PolarChart;

/*
const PolarChart = ({ isCustomLineColors = false, isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [dataDir, setDataDir] = useState(false); // NECESTAMOS OBTENER DATADIR Y DATATEMP    , EN EL CODIGO MAS ADELANTE LO QUE HAREMOS ES SOLICVITAR ESTO AL JASON.
  // setDataDir
  // Seteamos DataDir para direccion actual del viento
  const datosFetch = async () => {
    const response = await fetch(
      "https://api.thingspeak.com/channels/2263691/fields/8.json?results=13"
    ); // SACAMOS DEL API DE MEDICIONES DE AMBIENTE
    const data = await response.json();
    setDataDir(data.feeds);
  };
  useEffect(() => {
    datosFetch(); // Llamada a la función al cargar el componente
  }, []);
  return (
    <>
      {dataDir && (
        <ResponsiveSunburst
          data={[
            {
              id: "Direccion del viento",      //sacado de data 
              color: tokens("dark").greenAccent[500], //sacado de data 
              data: dataDir.map((singleData) => {   
                const fechaUTC = new Date(singleData.created_at);
                const fechaLocal = fechaUTC.toLocaleTimeString([], {
                  timeStyle: "medium",
                });
                const result = {
                  name: fechaLocal,
                  color: singleData.field8,
                  
                };
                return result;
              }),
            },
          ]}
          theme={{
            axis: {
              domain: {
                line: {
                  stroke: colors.grey[100],
                },
              },
              legend: {
                text: {
                  fill: colors.grey[100],
                },
              },
              ticks: {
                line: {
                  stroke: colors.grey[100],
                  strokeWidth: 1,
                },
                text: {
                  fill: colors.grey[100],
                },
              },
            },
            legends: {
              text: {
                fill: colors.grey[100],
              },
            },
            tooltip: {
              container: {
                color: colors.primary[500],
              },
            },
          }}
          colors={isDashboard ? { datum: "color" } : { scheme: "nivo" }} // added
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "15.1",
            max: "34.4",
            stacked: true,
            reverse: false,
          }}
          yFormat=" >-.2f"
          curve="catmullRom"
        />
      )}
    </>
  );
};

export default PolarChart;

*/
