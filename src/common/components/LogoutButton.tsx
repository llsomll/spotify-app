import React from "react";
import { Button } from "@mui/material";

const LogoutButton = () => {

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <Button variant="contained" color="secondary" size="large" onClick={logout}>
      Logout
    </Button>
  );
};

export default LogoutButton;
