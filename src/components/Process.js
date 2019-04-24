import React, { useEffect } from "react";

const Process = () => {
  useEffect(() => {
    document.querySelector("body").className = "contact";
  });
  return <div>These are the tools and processes</div>;
};

export default Process;
