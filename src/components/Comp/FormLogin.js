/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-autofocus */
import React, { Component } from "react";
import { AiOutlineUser } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/Form.css";

function FormLogin(){

    const userRef = useRef = useRef();



  /* inputAlterado = (e) => {
    this.setState({ formlala: e.target.value });
  };
*/
  render() {
    /* const { formlala } = this.state; */
    return (
      <div className="maincontainer">
        <div className="container-fluid">
          <div className="row no-gutter">
            <div className="col-md-2 d-none d-md-flex bg-image align-items-center me-5 ps-4">
              <button
                type="submit"
                className="btn ms-5 btn-primary btn-block shadow-sm"
              >
                Transparencia
              </button>
            </div>
            <div className="col-md-6 mx-auto">
              <div className="login d-flex align-items-center">
                <div className="container">
                  <div className="row no-gutter">
                    <div className="col-md-6 form-2  mx-auto">
                      <p className="titulo">Preencha os campos abaixo</p>
                      <form className="form">
                        <div className="form-group mb-3">
                          <label htmlFor="inputEmail">Email</label>
                          <input
                            id="inputEmail"
                            type="email"
                            required=""
                            autoFocus=""
                            className="form-control px-4"
                          />
                        </div>
                        <div className="form-group mb-3">
                          <label htmlFor="inputSenha">Senha</label>
                          <input
                            id="inputSenha"
                            type="password"
                            required=""
                            className="form-control"
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary btn-block col-md-12 shadow-sm"
                        >
                          Entrar
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 d-none d-md-flex no-gutter">
              <div>
                <label className="conta"> Não tem conta?</label>
                <button
                  type="submit"
                  className="btn btn-dark btn-block shadow-sm"
                >
                  <AiOutlineUser size={20} />
                  Crie uma
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormLogin;
