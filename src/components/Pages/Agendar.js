/* eslint-disable import/no-cycle */
import React from "react";
import FormAgend from "../Comp/FormAgend";
import NavbarComp from "../Comp/NavbarComp";

function Agendar() {
  return (
    <div>
      <NavbarComp />
      <FormAgend />
    </div>
  );
}

export default Agendar;
