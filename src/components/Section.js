import React from "react";

const Section = ({ id, children, animation, delay, disableAOS = false }) => {
  // If disableAOS is true, don't apply AOS to the section wrapper
  // This is useful when child components have their own detailed AOS animations
  
  if (disableAOS) {
    return (
      <section id={id}>
        {children}
      </section>
    );
  }

  return (
    <section 
      id={id} 
      data-aos={animation || "fade-up"} 
      data-aos-delay={delay || 100}
      data-aos-duration="1000"
      data-aos-once="false"
    >
      {children}
    </section>
  );
};

export default Section;