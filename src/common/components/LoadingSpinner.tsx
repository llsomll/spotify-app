import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "react-bootstrap/Spinner";
import theme from '../../theme';

const LoadingSpinner = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", alignItems: "center"}}
    >
      <Spinner animation="border" style={{ width: '5rem', height: '5rem', color: theme.palette.primary.main  }} />
    </div>
  );
};

export default LoadingSpinner;
