import React, { useContext, useState, useEffect } from "react";
import { useNavigate, Link, NavLink, useAsyncError } from "react-router-dom";
import classes from "./NavBar.module.css";
import { MyLoginContext } from "../LoginContext/LoginContext";
import { logOut } from "../../database/firebase.mjs";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

export default function NavBar() {
  const navigate = useNavigate();
  // const { isLogged, setIsLogged, user, setUser } = useContext(MyLoginContext);
  const [isData, setIsData] = useState();
  const [color, setColor] = useState(classes.nav1);

  const { isLogged, user, userId } = JSON.parse(
    localStorage.getItem("loginInfo")
  );

  const [logNav, setLogNav] = useState(isLogged);

  const onScroll = () => {
    if (window.scrollY >= 1) {
      console.log("scrolled");
      setColor(classes.nav2);
    } else {
      console.log("not scrolled");
      setColor(classes.nav1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  });

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  let activeStyle = {
    color: "black",
    borderBottom: " 1px solid #000",
    paddingBottom: "3px",
    transition: "borderBottom 0.3s ease-in-out",
    " &:focus:": {
      borderBottom: " 1px solid #000",
    },
  };

  const handleLogout = () => {
    // if (isData) {
    navigate("/");
    // }
  };

  return (
    <nav className={color}>
      {isLogged ? (
        <>
          <div className={classes.nav_nav}>
            <div style={{ paddingBottom: "15px", cursor: "default" }}>
              <h1
                onClick={() => {
                  navigate("/dashBoard");
                }}
                style={{ cursor: "default" }}
              >
                NewLang
              </h1>
            </div>
            <div className={classes.nav_div_ul}>
              <ul className={classes.nav_ul}>
                <NavLink
                  to="/dashBoard"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  DashBoard
                </NavLink>
                <NavLink
                  to="/courses"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Browse
                </NavLink>
                <NavLink
                  to="/translate"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Community
                </NavLink>
                <NavLink
                  to="/translate"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Translate
                </NavLink>
              </ul>
            </div>
          </div>
          <div>
            <Tooltip title="Account">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
              </IconButton>
            </Tooltip>
          </div>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem
              onClick={() => {
                navigate("/dashBoard");
              }}
            >
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              DashBoard
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("dashBoard/myCoursesPage");
              }}
            >
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              My Courses
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("dashBoard/myCoursesPage");
              }}
            >
              <ListItemIcon>
                <DynamicFeedIcon />
              </ListItemIcon>
              My Posts
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("dashBoard/myCoursesPage");
              }}
            >
              <ListItemIcon>
                <ConnectWithoutContactIcon />
              </ListItemIcon>
              Connect
            </MenuItem>
            <Divider />
            <MenuItem
              onClick={() => {
                navigate("dashBoard/myCoursesPage");
              }}
            >
              <Avatar /> My account
            </MenuItem>
            <MenuItem
              onClick={() => {
                // navigate("/");
                logOut(setIsData);
                handleLogout();
              }}
            >
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </>
      ) : (
        <div className={classes.nav_navLog}>
          <div style={{ paddingBottom: "5px" }}>
            <h1>NewLang</h1>
          </div>
        </div>
      )}
    </nav>
  );
}
