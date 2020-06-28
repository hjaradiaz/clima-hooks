import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";
function App() {
  const [ciudad, setCiudad] = useState("");
  const [pais, setPais] = useState("");
  //const [error, setError] = useState(false);
  const [resultado, setResultado] = useState({});

  useEffect(() => {
    if(ciudad === '') return
    const consultarApi = async () => {
      const apiId = "1777e8a1834ba931b729ddf4a56f04ce";
      const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiId}`;
      const respuesta = await fetch(urlApi);
      const resultadosApi = await respuesta.json();
      setResultado(resultadosApi);
      console.log(resultadosApi);
    };
    consultarApi();
  }, [ciudad, pais]);

  const datosConsulta = (datos) => {
    if (datos.ciudad === "" || datos.pais === "") {
      //setError(true);
      return;
    }
    setCiudad(datos.ciudad);
    setPais(datos.pais);
    //setError(false);
  };

  return (
    <div className="App">
      <Header titulo={"Aplicacion del clima con react"} />
      <div className="container mt-4">
        <div className="jumbotron">
          <div className="row">
            <div className="col-6">
              <Formulario datosConsulta={datosConsulta}  />
            </div>
            <div className="col-6">
              <Resultado resultadoConsulta={resultado}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
