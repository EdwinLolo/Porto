import React from "react";
import "./styleprojekan.css";
import uas_sem2 from "../../assets/UAS_Sem2_1.png";
import uts_lab_sem2 from "../../assets/UTS_LAB_Sem2.png";
import uts_lec_sem2 from "../../assets/UTS_LEC_Sem2.png";
import uts_lab_sem3 from "../../assets/UTS_LAB_Sem3.png";
import uts_lec_sem3 from "../../assets/UTS_LEC_Sem3.png";
import uas_sem3 from "../../assets/UAS_Sem3.png";
import fokus_ultimagz from "../../assets/fokus_ultimagz.png";

import css from "../../assets/css.png";
import html from "../../assets/html.png";
import php from "../../assets/php.png";
import bootsrap from "../../assets/bootstrap.png";
import reactpng from "../../assets/react.png";
import sql from "../../assets/SQL.png";
import js from "../../assets/js.png";

function Projekan() {
  return (
    <div className="bungkusanprojekan">
      <div className="container" id="projects">
        <h1 className="d-flex justify-content-center">Project</h1>
        <div className="row m-3">
          <div className="col-md-7">
            <img className="gambar img-fluid" src={uts_lec_sem2} alt="..." />
          </div>
          <div className="col-md-5">
            <h1>Paw Pet</h1>
            <p>
              Game web mirip seperti pou, dimana kita harus merawat petnya
              dengan cara dimainkan gamenya.
            </p>
            <div className="row">
              <img className="logo img-fluid" src={html} alt="..." />
              <img className="logo img-fluid" src={css} alt="..." />
              <img className="logo img-fluid" src={bootsrap} alt="..." />
              <img className="logo img-fluid" src={js} alt="..." />
            </div>
          </div>
        </div>

        <div className="row m-3">
          <div className="col-md-7 order-md-2">
            <img className="gambar img-fluid" src={uts_lab_sem2} alt="..." />
          </div>
          <div className="col-md-5 order-md-1">
            <h1>Miner</h1>
            <p>
              Game web clicker, dimana setiap click kita akan mendapatkan coin.
            </p>
            <div className="row">
              <img className="logo img-fluid" src={html} alt="..." />
              <img className="logo img-fluid" src={css} alt="..." />
              <img className="logo img-fluid" src={bootsrap} alt="..." />
              <img className="logo img-fluid" src={js} alt="..." />
            </div>
          </div>
        </div>

        <div className="row m-3">
          <div className="col-md-7">
            <img className="gambar img-fluid" src={uas_sem2} alt="..." />
          </div>
          <div className="col-md-5">
            <h1>FlixFlow</h1>
            <p>
              Website Film yang menampilkan trailer film dan deskripsi filmnya
            </p>
            <div className="row">
              <img className="logo img-fluid" src={html} alt="..." />
              <img className="logo img-fluid" src={css} alt="..." />
              <img className="logo img-fluid" src={bootsrap} alt="..." />
              <img className="logo img-fluid" src={reactpng} alt="..." />
            </div>
          </div>
        </div>
        <div className="row m-3">
          <div className="col-md-7 order-md-2">
            <img className="gambar img-fluid" src={uts_lec_sem3} alt="..." />
          </div>
          <div className="col-md-5 order-md-1">
            <h1>Pisang Hoheng</h1>
            <p>
              Website restoran dimana user bisa memesan makanan melalui web.
            </p>
            <div className="row">
              <img className="logo img-fluid" src={html} alt="..." />
              <img className="logo img-fluid" src={css} alt="..." />
              <img className="logo img-fluid" src={bootsrap} alt="..." />
              <img className="logo img-fluid" src={php} alt="..." />
              <img className="logo img-fluid" src={sql} alt="..." />
            </div>
          </div>
        </div>
        <div className="row m-3">
          <div className="col-md-7">
            <img className="gambar img-fluid" src={uts_lab_sem3} alt="..." />
          </div>
          <div className="col-md-5">
            <h1>Todo-List</h1>
            <p>
              Website todo-list dimana user bisa memasukkan list-list yang perlu
              mereka kerjakan.
            </p>
            <div className="row">
              <img className="logo img-fluid" src={html} alt="..." />
              <img className="logo img-fluid" src={css} alt="..." />
              <img className="logo img-fluid" src={bootsrap} alt="..." />
              <img className="logo img-fluid" src={php} alt="..." />
              <img className="logo img-fluid" src={sql} alt="..." />
            </div>
          </div>
        </div>
        <div className="row m-3">
          <div className="col-md-7 order-md-2">
            <img className="gambar img-fluid" src={uas_sem3} alt="..." />
          </div>
          <div className="col-md-5 order-md-1">
            <h1>KopiPopi</h1>
            <p>
              Website Coffee shop yang memiliki admin yang bisa mengatur
              tampilan website melalui dashboard admin. Website ini dibuat
              sesuai dengan kebutuhan Client / Owner dari Coffee shop.
            </p>
            <div className="row">
              <img className="logo img-fluid" src={html} alt="..." />
              <img className="logo img-fluid" src={css} alt="..." />
              <img className="logo img-fluid" src={bootsrap} alt="..." />
              <img className="logo img-fluid" src={php} alt="..." />
              <img className="logo img-fluid" src={sql} alt="..." />
            </div>
          </div>
        </div>
        <div className="row m-3">
          <div className="col-md-7">
            <img className="gambar img-fluid" src={fokus_ultimagz} alt="..." />
          </div>
          <div className="col-md-5">
            <h1>FOKUS ULTIMAGZ</h1>

            <div className="row">
              <img className="logo img-fluid" src={html} alt="..." />
              <img className="logo img-fluid" src={css} alt="..." />
              <img className="logo img-fluid" src={bootsrap} alt="..." />
              <img className="logo img-fluid" src={reactpng} alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projekan;
