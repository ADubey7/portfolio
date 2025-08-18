import React from "react";

const Section = ({ id, children, animation = "fade-up-right", delay = 200 }) => {
  return (
    <section id={id} data-aos={animation} data-aos-delay={delay}>
      {children}
    </section>
  );
};

export default Section;
