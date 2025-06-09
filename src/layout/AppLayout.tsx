import { styled, Box, Typography } from "@mui/material";
import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryHead from "./components/LibraryHead";
import Library from "./components/Library";
import Navbar from "./components/Navbar";

const Layout = styled("div")({
  display: "flex",
  height: "100vh",
  padding: "8px",
});

const Sidebar = styled("div")(({ theme }) => ({
  width: "331px",
  height: "100%", // 100vh because parent is 100vh
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  borderRadius: "8px",
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  width: "100%",
  padding: "8px",
  marginBottom: "8px",
  marginRight: "8px",
}));

const NavList = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
});

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  padding: "8px 0",
  gap: "20px",
  color: theme.palette.text.secondary,
  "&:hover": {
    color: theme.palette.text.primary,
  },
  "&:active": {
    color: theme.palette.text.primary,
  },
  "&.active": {
    color: theme.palette.text.primary,
  },
}));

function AppLayout() {
  return (
    <Layout>
      <Sidebar>
        <ContentBox>
          <NavList>
            <StyledNavLink to="/">
              <HomeIcon />
              <Typography variant="h2" fontWeight={700}>
                Home
              </Typography>
            </StyledNavLink>
            <StyledNavLink to="/search">
              <SearchIcon />
              <Typography variant="h2" fontWeight={700}>
                Search
              </Typography>
            </StyledNavLink>
          </NavList>
        </ContentBox>
        <ContentBox
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden", // don't let it scroll here
            minHeight: 0, // critical to allow inner scrolling
          }}
        >
          <LibraryHead />
          <Library />
        </ContentBox>
      </Sidebar>
      <ContentBox marginLeft="8px">
        <Navbar />
        <Outlet />
      </ContentBox>
    </Layout>
  );
}

export default AppLayout;
