import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "react-bootstrap/Spinner";

const LoadingSpinner = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "100px" }}
    >
      <Spinner animation="border" variant="info" style={{ width: '5rem', height: '5rem' }} />
    </div>
  );
};

export default LoadingSpinner;
