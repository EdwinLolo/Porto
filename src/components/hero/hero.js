import React from "react";
import "./stylehero.css";
import Pasfoto from "../../assets/Pas_Foto_Latar_Putih-removebg-preview.png";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="bungkushero" id="home">
      <header className="py-5">
        <div className="container px-5 pb-5">
          <div className="row gx-5 align-items-center">
            <div className="col-xxl-5">
              <div className="text-center text-xxl-start">
                <div className="fs-3 fw-light text-muted">Hello I'm</div>
                <h1 className="display-3 fw-bolder ">
                  <span className="text-gradient d-inline">
                    Edwin Fedora Lolo
                  </span>
                </h1>
                <p className="mt-0">
                  Perkenalkan nama Saya Edwin Fedora Lolo. Saya adalah seorang
                  mahasiswa dari Universitas Multimedia Nusantara. Saya
                  merupakan mahasiswa Informatika angkatan 2022
                </p>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                  <a
                    className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder"
                    onClick={() => navigate("/Project")}
                  >
                    Projects
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-7">
              <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                <div className="profile bg-gradient-primary-to-secondary">
                  <img
                    className="profile-img"
                    src={Pasfoto}
                    alt="PasFotoDiri"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Hero;
