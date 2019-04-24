import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.querySelector("body").className = "contact";
  });
  return <div>Contact form goes here</div>;
};

export default Contact;
