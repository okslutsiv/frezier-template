import React from "react";
import Redhair from "../images/redhair";
import Button from "@material-ui/core/Button";

export default function Promo() {
  const handleCallToAction = () => console.log("click");
  return (
    <section className="promo mt-5">
      <div className="container">
        <h1 className="text-center">ПРОМОУЦІЯ ТИЖНЯ</h1>
        <div className="row align-items-end">
          <div className="col-md-7">
            <Redhair />
          </div>
          <div className="col-md-5 text-right">
            <h2 className="mt-3 ">Знижка на всі стрижки</h2>
            <strong className=" d-block">-10%</strong>
            <Button
              onClick={handleCallToAction}
              className="cta mb-5 "
              variant="contained"
            >
              Записатись
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
