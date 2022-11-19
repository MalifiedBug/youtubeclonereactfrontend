import * as React from "react";
import { styled, alpha, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import HomeIcon from '@mui/icons-material/Home';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import RestoreIcon from '@mui/icons-material/Restore';

const clientId =
  "268137465827-sgvtl3f7boj7i4cfr6rialb19unur8uv.apps.googleusercontent.com";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState([]);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const icons = [<HomeIcon/>,<AutoAwesomeMotionIcon/>,<SubscriptionsIcon/>,<VideoLibraryIcon/>,<RestoreIcon/>]

  const onSuccess = (res) => {
    console.log("success:", res);
  };
  const onFailure = (err) => {
    console.log("failed:", err);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  //fetching youtube api
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "909c34f372msh0a52a6c53b8868ap171bc6jsnc3e2e06f33c4",
        "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
      },
    };

    fetch("https://yt-api.p.rapidapi.com/trending?geo=US", options)
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  }, []);

  const data1 = data.data;

  const [search, setSearch] = useState("");

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className="appbarmain">
          <div className="menuyoutube">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={!open ? handleDrawerOpen : handleDrawerClose}
              edge="start"
              sx={{
                marginRight: 5,
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              className="youtubelabel"
              variant="h6"
              noWrap
              component="div"
            >
              <YouTubeIcon /> YouTube
            </Typography>
          </div>
          <div>
            <Search className="searchdiv">
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                className="searchdiv"
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Search>
          </div>
          <div>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
            <Button
              style={{ color: "white", borderRadius: "16px" }}
              variant="outlined"
              startIcon={<AccountCircleIcon />}
            >
              Sign In
            </Button>
          </div>
        </Toolbar>
      </AppBar>

      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {["Home", "Shorts", "Subscriptions","Library", "History"].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {icons[index]}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
         
        </Drawer>
        <Box className="videosbox" component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          {data1 ? data1.map((dat) => <VideoCard data={dat} />) : ""}
        </Box>
      </Box>
    </div>
  );
}
