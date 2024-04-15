import React from "react";

function FormSection({ title, children }) {
  return (
    <section className="center-align">
      <div className="container ">
        <div className="question">
          <h4 className="hdn3">{title}</h4>
          {children}
        </div>
      </div>
    </section>
  );
}

export default FormSection;
