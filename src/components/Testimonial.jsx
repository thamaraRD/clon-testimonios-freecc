import React from "react";
import "../styles/Testimonial.css";

export const Testimonial = (props) => {
  const { name, country, position, company, testimonial, photo } = props;
  return (
    <div className="testimonial-container">
      <img
        className="testimonial-img"
        src={require(`../images/testimonio-${photo}.png`)}
        alt={`foto de ${name}`}
      />
      <div className="text-testimonial-container">
        <p className="name-country-testimonial">
          <strong>{name}</strong> en {country}
        </p>
        <p className="position-testimonial">
          {position} en <strong>{company}</strong>
        </p>
        <p className="text-testimonial">"{testimonial}"</p>
      </div>
    </div>
  );
};
