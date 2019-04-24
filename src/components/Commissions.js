import React, { useEffect } from "react";

const Commissions = () => {
  useEffect(() => {
    document.querySelector("body").className = "commission";
  });
  return <div>Make me work and then pay me</div>;
};

export default Commissions;
