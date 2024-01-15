import React from "react";
import "./styleproject.css";
import { useNavigate } from "react-router-dom";

import uas_sem2 from "../../assets/UAS_Sem2_1.png";
import uts_lab_sem2 from "../../assets/UTS_LAB_Sem2.png";
import uts_lec_sem2 from "../../assets/UTS_LEC_Sem2.png";
import uts_lab_sem3 from "../../assets/UTS_LAB_Sem3.png";
import uts_lec_sem3 from "../../assets/UTS_LEC_Sem3.png";

function Project() {
  const navigate = useNavigate();

  return (
    <div className="bungkusanproject">
      <div className="py-3 container">
        <div>
          <h1 className="text-center">Recent Project</h1>
          <h5 className="text-center">Portofolio</h5>
        </div>
        <div className="his">
          <div className="bungkusan">
            <img src={uas_sem2} alt="..."></img>
            {/* <div class="centered">Centered</div> */}
          </div>
          <div className="bungkusan">
            <img src={uts_lec_sem2} alt="..."></img>
          </div>
          <div className="bungkusan">
            <img src={uts_lab_sem3} alt="..."></img>
          </div>
          <div className="bungkusan">
            <img src={uts_lec_sem3} alt="..."></img>
          </div>
        </div>
        <div className="kasih mt-4">
          <a
            className="btn btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder btn-custom"
            onClick={() => navigate("/Project")}
          >
            View All Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
