import React, { useState } from "react";

const Formulario = ({ datosConsulta }) => {
  const [datos, setDatos] = useState({ ciudad: "", pais: "" });
  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    datosConsulta(datos);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="">Ciudad</label>
        <input
          type="text"
          name="ciudad"
          className="form-control"
          placeholder="ingrese la ciudad a consultar"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Pais</label>
        <select className="form-control" name="pais" onChange={handleChange}>
          <option value=""> -- seleccione un país</option>
          <option value="US"> Estados Unidos</option>
          <option value="MX"> Mèxico</option>
          <option value="AR"> Argentina</option>
          <option value="PE"> Perú</option>
        </select>
      </div>
      <div className="form-group">
        <button className="btn btn-primary btn-lg btn-block" type="submit">
          Consultar
        </button>
      </div>
    </form>
  );
};

export default Formulario;
