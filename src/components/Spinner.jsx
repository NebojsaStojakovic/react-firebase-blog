import React from "react";

const Spinner = () => {
  return (
    <div
      className='spinner-border text-primary mt-5 spinner align-self-center'
      role='status'
    >
      <span className='visually-hidden mx-auto'>Loading...</span>
    </div>
  );
};

export default Spinner;
