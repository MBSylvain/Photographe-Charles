import React from "react";
import logo from "../assets/logo charles cantin.png";
import { Link } from "react-router-dom";
import accroche from "../admin/accroche";
import annonce from "../admin/adminSolgan";

const Home = () => {
  return (
    <div className="px-4 py-5 my-5 text-center h-100 justify-content center align-content-center">
      <img
        className="rounded-circle"
        src={logo}
        alt="logo"
        width="80"
        height="70"
      ></img>

      <h1 class="display-5 fw-bold text-body-emphasis ">
        Charles Quentin - Photographe
      </h1>
      <div class="col-lg-6 mx-auto">
        {annonce ()}
        <p id="solgan" class="lead mb-4"></p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">
            <Link to="../Services">Mes services</Link>
          </button>

          <button type="button" class="btn btn-outline-secondary btn-lg px-4">
            <Link to="../Contact">Contact</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
