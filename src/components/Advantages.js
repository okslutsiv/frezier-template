import React from "react";

export default function Advantages() {
  return (
    <section className="advantages py-5">
      <div className="container">
        <h1 className="text-center mb-5">Наші переваги</h1>
        <div className="row text-center">
          <div className="col-lg-3 col-md-6">
            <h3>МОДНІ ТЕНДЕНЦІЇ</h3>
            <p>
              Ми завжди в курсі останніх трендів в області перукарського
              мистецтва{" "}
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3>КОМАНДА ПРОФІ</h3>
            <p>
              У кожного з наших майстрів як мінімум 3-річний досвід роботи своєї
              справи
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3>100% СТЕРИЛІЗАЦІЯ</h3>
            <p>Повна дезинфекція і стерилізація всього інструменту</p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3>В НАС СМАЧНА КАВА</h3>
            <p>
              Працюємо з 9 ранку і затримаємося на будь-який час при потребі
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
