import React from "react";
import Icon1 from "../images/icons/svg/Feature1Svg";
import Icon2 from "../images/icons/svg/Feature2Svg";
import Icon3 from "../images/icons/svg/Feature3Svg";
import Blond from "../images/blond";
import Pearls from "../images/pearls";

export default function Promo() {
  return (
    <section className="features py-5">
      <div className="container">
        <div className="row align-items-center">
          <h1 className="text-right col-lg-9">НАШІ МАЙСТРИ ПРОПОНУЮТЬ</h1>
          <div className="col-md-7">
            <div className="row my-4 align-items-center ">
              <div className="col-2  offset-1 pl-4 my-auto">
                <Icon1 fill="none" stroke="#b8874a" height="40px" />
              </div>
              <div className="col-9 my-auto">
                повний комплекс перукарських послуг для чоловіків і жінок
              </div>
            </div>
            <div className="row my-4 align-items-center ">
              <div className="col-2  offset-1 pl-4 my-auto">
                <Icon3 fill="none" stroke="#b8874a" width="30px" />
              </div>
              <div className="col-9 my-auto">
                макіяж на кожен день та для особливих випадків
              </div>
            </div>
            <div className="row my-4 align-items-center">
              <div className="col-2  offset-1 pl-4 my-auto">
                <Icon2 fill="none" stroke="#b8874a" width="20px" />
              </div>
              <div className="col-9  my-auto">догляд за бровами і віями</div>
            </div>
          </div>
          <div className="col-md-5 blond">
            <div className="oval">
              <Blond />
            </div>
            <div className="pearls">
              <Pearls />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
