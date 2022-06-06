/* eslint-disable import/no-cycle */
import React from "react";
import FormLogin from "../Comp/FormLogin";
import NavbarComp from "../Comp/NavbarComp";

function Agendar() {
  return (
    <div>
      <NavbarComp />
      <FormLogin />
    </div>
  );
}

export default Agendar;
