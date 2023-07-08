import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = () => {
  return (
    <Link to="/signup">
      <button className="btn">Signed up</button>
    </Link>
  );
};

export default Button;
