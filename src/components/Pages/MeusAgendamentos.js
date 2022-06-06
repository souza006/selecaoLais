/* eslint-disable import/no-cycle */
import React from "react";
import FormAgend from "../Comp/FormAgend";
import NavbarComp from "../Comp/NavbarComp";

function MeusAgendamentos() {
  return (
    <div>
      <NavbarComp />
      <FormAgend />
    </div>
  );
}

export default MeusAgendamentos;
