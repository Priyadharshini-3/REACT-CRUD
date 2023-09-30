import React from "react";
import "./base.css";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";

import { Avatar, Button, Tooltip } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import ListAltIcon from "@mui/icons-material/ListAlt";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import { useHistory } from "react-router-dom";

                                  // ? children parameter is keyword => it will take another component as childeren...
function BaseRender({ Title, Sub_Title, children }) {
  const history = useHistory();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
// ----------------------------------------------------------------------------
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
// ----------------------------------------------------------------------------
  const handleOpenUserMenu = (event) => {
    //? After clicked the Dashboard button in navbar
    //? it will target the current dashboard page...
    setAnchorElUser(event.currentTarget);
  };
// ----------------------------------------------------------------------------
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
// ----------------------------------------------------------------------------
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
// ----------------------------------------------------------------------------
  //? SMALL SCREEN RESPONSIVE MENU ICON ITEMS...
  //* Add data menu item...

  const addData = () => {
    if (!localStorage.getItem("user_name")) {
      history.replace("/loginPage");
      //?After clicked the menu item the menu item will be closed...
      setAnchorElNav(null);
    } else {
      history.push("./addData");
      setAnchorElNav(null);
    }
  };

// ----------------------------------------------------------------------------
//* studentslist menu item...

  const studentList = () => {
    if (!localStorage.getItem("user_name")) {
      history.replace("/loginPage");
      setAnchorElNav(null);
    } else {
      history.push("./StudentDetails");
      setAnchorElNav(null);
    }
  };

// ----------------------------------------------------------------------------
//* home menu item...

  const home = () => {
    history.push("/");
    setAnchorElNav(null);
  };

// ----------------------------------------------------------------------------
//* logout menu item...

  const logout = () => {
    if (!localStorage.getItem("user_name")) {
      history.push("/loginPage");
      //?After clicked the logout the menu item will be closed...
      setAnchorElUser(null);
    } else {
      localStorage.removeItem("user_name");
      history.push("/");
      setAnchorElUser(null);
      alert("👍successfully logged out")
    }
  };

// ----------------------------------------------------------------------------
  return (
    <div className="container">
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <DashboardIcon
              sx={{
                display: { xs: "none", md: "flex" },
                bgcolor: "black",
                width: 36,
                height: 36,
                mr: 1,
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 800,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
            {/* large screen dashboard button */}
              <button className="shadow__btn">STUDENT-DASHBOARD</button>
            </Typography>
            {/* small screen content icon */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
{/* ----------------------------------------------------- */}
              {/* inside small screen content */}
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {/* ----------------------------------------------------- */}
                <MenuItem>
                  <Button
                    style={{ backgroundColor: "lightgray" }}
                    color="primary"
                    onClick={() => home()}
                  >
                    <HomeIcon sx={{ paddingRight: "5px" }} /> HOME
                  </Button>
                </MenuItem>
                {/* ----------------------------------------------------- */}
                <MenuItem>
                  <Button
                    style={{ backgroundColor: "lightgray" }}
                    color="primary"
                    onClick={() => addData()}
                  >
                    <GroupAddIcon sx={{ paddingRight: "5px" }} /> Add data
                  </Button>
                </MenuItem>
                 {/* ----------------------------------------------------- */}
                <MenuItem>
                  <Button
                    style={{ backgroundColor: "lightgray" }}
                    color="primary"
                    onClick={() => studentList()}
                  >
                    <ListAltIcon sx={{ paddingRight: "5px" }} /> Student Lists
                  </Button>
                </MenuItem>
                {/* ----------------------------------------------------- */}
              </Menu>
            </Box>
{/* ----------------------------------------------------- */}
            {/* small screen Dashboard*/}

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "yellow",
                textDecoration: "none",
              }}
            >
              DASHBOARD
            </Typography>
{/* ----------------------------------------------------- */}
            {/* sub-content */}
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            ></Box>
{/* ----------------------------------------------------- */}
            {/* user account icon */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://thumbs.dreamstime.com/b/student-icon-vector-graduation-mortar-board-school-college-university-glyph-pictogram-male-person-profile-avatar-108392101.jpg"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
{/* ----------------------------------------------------- */}
                {/* logout button */}
                <MenuItem>
                  <Button
                    style={{ backgroundColor: "lightgray" }}
                    color="primary"
                    onClick={() => logout()}
                  >
                    <LogoutIcon sx={{ paddingRight: "5px" }} /> Logout
                  </Button>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* --------------------------------------------- */}
      
      {/* By using this Base component we can invoke 
       whereever we want to display the  title and subtitle ... */}

      <div className="title">
        <h1>{Title}</h1>
      </div>

      {/* ----------------------------------------------------- */}

      <div className="sub-title">
        <h3>{Sub_Title}</h3>
      </div>

      {/* ----------------------------------------------------- */}

      {/* If we give children keyword as parameter it will take
     new component which we invoke as children   */}

      <div className="children-component">{children}</div>

      {/* ----------------------------------------------------- */}

    </div>
  );
}

export default BaseRender;