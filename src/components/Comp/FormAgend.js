/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/Form.css";
import api from "../../services/api";

function FormAgend() {

  const [campanhas, setCamapanhas] = useState([]);
  useEffect(() => {
    api.get("campanhas").then(({ data }) => {
      setCamapanhas(data);
    });
  }, []);

  const [gruposAtendimentos, setGrupos] = useState([]);
  useEffect(() => {
    api.get("grupos-atendimentos").then(({ data }) => {
      setGrupos(data);
    });
    console.log(gruposAtendimentos);
  });

  return (
    <div className="maincontainer">
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="col-md-8">
            <div className="login d-flex align-items-center ">
              <div className="container">
                <div className="row">
                  <p className="titulo-2">Agendar</p>
                  <div className="col-md-4  form-2">
                    <form className="form">
                      <div className="form-group mb-3">
                        <label htmlFor="inputCampanha">Campanha</label>
                        <select className="form-select" id="inputCampanha">
                          {campanhas.map((campanha) => (
                            <option value={campanha.id} key={campanha.id}>
                              {campanha.nome}{" "}
                            </option>
                          ))}
                        </select>

                        <label htmlFor="selectMunicipio">Município</label>
                        <select className="form-select" id="selectMunicipio">
                          <option value="natal">Natal</option>
                          <option value="parnamirim">Parnamirim</option>
                          <option value="saoGoncalo">São Gonçalo</option>
                          <option value="acari">Acari</option>
                          <option value="caico">Caicó</option>
                        </select>
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="inputGrupo">Grupo Atendimento</label>
                        <select className="form-select" id="inputGrupo">
                          {gruposAtendimentos.map((grupos) => (
                            <option value={grupos.id} key={grupos.id}>
                              {grupos.nome}
                            </option>
                          ))}
                        </select>
                        <br />
                        <label htmlFor="inputData">Data</label>
                        <input
                          id="inputData"
                          type="date"
                          required=""
                          className="form-control"
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-block col-md-12 shadow-sm"
                      >
                        Continuar
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormAgend;
