import React from "react";
import Clock from "../images/clock";

export default function Working() {
  return (
    <section className="py-5 working">
      <div className="container">
        <h1 className="text-center">Чекаємо на Вас</h1>
        <div className="row align-items-center">
          <div className="col-md-5">
            <div className="d-none d-md-block p-3 clock">
              <Clock />
            </div>
          </div>
          <div className="col-md-7 text-center">
            <h3 className="my-3">м.Львів, вулиця Болгарська, 1</h3>
            <div className="row table my-1">
              <div className="col-3">Пн</div>
              <div className="col-9">з 10:00 до 20:00</div>
            </div>
            <div className="row table my-1">
              <div className="col-3">Вт-Чт</div>
              <div className="col-9">з 9:00 до 20:00</div>
            </div>
            <div className="row table my-1">
              <div className="col-3">Пт</div>
              <div className="col-9">з 8:00 до 20:00</div>
            </div>
            <div className="row table my-1">
              <div className="col-3">Сб</div>
              <div className="col-9">з 8:00 до 16:00</div>
            </div>
            <div className="row table my-1">
              <div className="col-3">Нд</div>
              <div className="col-9">Відпочиваємо</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
