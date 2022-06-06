/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-autofocus */
import { AiOutlineUser } from "react-icons/ai";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/Form.css";
/* import useForm from "react-hook-form"; */

class FormRegister extends Component {
  state = {};

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
            <div className="col-md-10 pe-5">
              <div className="login d-flex align-items-center py-5 ">
                <div className="container">
                  <div className="row">
                    <div className="col-md-4  mx-auto form-2">
                      <label className="titulo">Preencha o campos abaixo</label>
                      <p className="sub-titulo">É rápido, simples e seguro.</p>
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
                          <br />
                          <label htmlFor="emailConfirmation">
                            Cofirmar Email
                          </label>
                          <input
                            id="emailConfirmation"
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
                          <br />
                          <label htmlFor="senhaConfirmation">
                            Confirme sua senha
                          </label>
                          <input
                            id="senhaConfirmation"
                            type="password"
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
            <div className="col-md-2 d-none d-md-flex no-gutter">
              <div>
                <label className="conta">Já tem conta?</label>
                <button
                  type="submit"
                  className="btn btn-dark btn-block shadow-sm"
                >
                  <AiOutlineUser size={20} />
                  Entrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormRegister;
