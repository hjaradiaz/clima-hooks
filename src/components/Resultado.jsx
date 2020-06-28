import React from 'react';

const Resultado = (props) => {
    console.log(props);
    if (props.resultadoConsulta.cod !== undefined) {
        if (props.resultadoConsulta.cod === 200) {
            return (
                props &&
                <div style={{ paddingLeft: "5rem"}}>
                    <div className="card" style={{ width: "24rem"}}>
                        <div className="card-header" >
                            <h3>{props.resultadoConsulta.name}</h3>
                        </div>
                        <div className="card-body" >
                            <h5 className="card-title" style={{paddingBottom:"1rem"}}>Datos actualizados:</h5>
                            <p className="card-text"><b>Temperatura: </b> {props.resultadoConsulta.main.temp}°F</p>
                            <p className="card-text"><b>Sensación Térmica: </b> {props.resultadoConsulta.main.feels_like}°F</p>                            
                            <p className="card-text"><b>Tempertura Mínima: </b> {props.resultadoConsulta.main.temp_min}°F</p>
                            <p className="card-text"><b>Temperatura Máxima: </b> {props.resultadoConsulta.main.temp_max}°F</p>
                            <p className="card-text"><b>Presión: </b> {props.resultadoConsulta.main.pressure}</p>
                            <p className="card-text"><b>Humedad: </b> {props.resultadoConsulta.main.humidity}%</p>

                        </div>
                    </div>
                </div>
            );
        } else {
            return (<nav className="navbar navbar-dark bg-warning">
                Ciudad no encontrada
            </nav>);
        }
    } else {
        return (
            <div></div>
        );
    }
};

export default Resultado;