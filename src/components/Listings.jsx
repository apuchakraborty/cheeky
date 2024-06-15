import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  Box,
  Avatar,
  Container,
  Grid,
  Paper,
  Button,
  Divider,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  useMediaQuery,
  useTheme,
  TextField,
  InputAdornment,
} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
} from "recharts";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListIcon from "@mui/icons-material/List";
import SaveIcon from "@mui/icons-material/Save";
import StarIcon from "@mui/icons-material/Star";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SecurityIcon from "@mui/icons-material/Security";
import SearchScore from "./SearchScore";
import theme from "../theme";
import CustomTable from "./CustomTable";
import CustomButton from "./CustomButton";
import Stats from "./Stats";
import BulletLists from "./BulletLists";
import { ArrowDropDown } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ListingTable from "./ListingTable";
import CustomSeparator from "./BreadCrumb";
import SearchIcon from "@mui/icons-material/Search";

const drawerWidth = 240;

const Listings = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  const [sidebarOpen, setSidebarOpen] = useState(isDesktop);

  const handleDrawerToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const [openDropdown, setOpenDropdown] = useState(false);
  const handleDropdownToggle = () => {
    setOpenDropdown(!openDropdown);
  };

  const renderDrawer = (
    <Drawer
      variant={isDesktop ? "permanent" : "temporary"}
      open={sidebarOpen}
      onClose={handleDrawerToggle}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: theme.palette.custom.bgSidebar,
        },
      }}
    >
      <Box>
        <Box p={2}>
          <img src="../img/logo.png" width={150} />
        </Box>
        <List>
          {[
            { text: "Dashboard", icon: <DashboardIcon />, dropdown: false },
            { text: "Listings", icon: <ListIcon />, dropdown: true },
            { text: "Campaigns", icon: <SaveIcon />, dropdown: false },
            { text: "Explore Band Deals", icon: <StarIcon />, dropdown: false },
          ].map((item, index) => (
            <React.Fragment key={item.text}>
              <ListItem
                button
                onClick={item.dropdown ? handleDropdownToggle : undefined}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ color: "#0F1D3B", fontSize: 16 }}
                />
                {item.dropdown && <ExpandMoreIcon />}
              </ListItem>
              {item.dropdown && openDropdown && (
                <List component="div" disablePadding>
                  <ListItem button sx={{ ml: 8 }}>
                    <ListItemText primary="Applied Listing" />
                  </ListItem>
                </List>
              )}
            </React.Fragment>
          ))}
        </List>
      </Box>
      <Box sx={{ p: 2 }}>
        <Box
          sx={{
            p: 2,
            backgroundColor: theme.palette.custom.themeBlue,
            borderRadius: 3,
            textAlign: "center",
          }}
        >
          <img src="../img/lock.png" width={100} />
          <Typography
            variant="p"
            color={theme.palette.custom.main}
            component="div"
            mb={2}
          >
            Upgrade to PRO for more resources.
          </Typography>
          <CustomButton text={"upgrade"} isWidth={"100%"} isColor={"#2870FB"} />
        </Box>
      </Box>
    </Drawer>
  );

  const handleSearch = () => {
    console.log("Searching...");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: isDesktop ? `calc(100% - ${drawerWidth}px)` : "100%",
          ml: isDesktop ? `${drawerWidth}px` : 0,
          bgcolor: theme.palette.custom.main,
          color: theme.palette.custom.headingColor,
          borderBottom: "1px solid #ddd",
        }}
      >
        <Toolbar>
          {!isDesktop && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              edge="start"
              sx={{ mr: 2, display: { lg: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>

          <IconButton
            color="inherit"
            sx={{
              borderRadius: 2,
              ".MuiTouchRipple-ripple .MuiTouchRipple-child": {
                borderRadius: 2,
                backgroundColor: "red",
              },
            }}
          >
            <img src="../img/chat.png" height={25} />
          </IconButton>
          <IconButton
            color="inherit"
            sx={{
              borderRadius: 2,
              ".MuiTouchRipple-ripple .MuiTouchRipple-child": {
                borderRadius: 2,
                backgroundColor: "red",
              },
            }}
          >
            <img src="../img/notification.png" height={25} />
          </IconButton>

          <Button
            color="inherit"
            startIcon={<Avatar alt="User Name" src="../img/loggedInUser.png" />}
            sx={{ textTransform: "none", marginLeft: "8px" }}
          ></Button>
          <Box
            sx={{
              display: isDesktop ? "flex" : "none",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography variant="h6" sx={{ lineHeight: 1.5 }}>
              Annette Black
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ lineHeight: 1 }}
            >
              Admin
            </Typography>
          </Box>
          <IconButton color="inherit">
            <ArrowDropDown />
          </IconButton>
        </Toolbar>
      </AppBar>
      {renderDrawer}
      <Box component="main" sx={{ flexGrow: 1, py: 3, px: 0 }}>
        <Toolbar />
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <CustomSeparator />
            </Grid>

            <Grid item xs={12} md={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <TextField
                    placeholder="Search..."
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <IconButton>
                            <SearchIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <Button variant="contained" onClick={handleSearch}>
                            Search
                          </Button>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
                <Box>
                  <CustomButton
                    text={"Platform"}
                    isHoverColor={theme.palette.custom.themeBlue}
                  />
                  <CustomButton
                    text={"Industry"}
                    isHoverColor={theme.palette.custom.themeBlue}
                  />
                  <CustomButton
                    text={"Status"}
                    isHoverColor={theme.palette.custom.themeBlue}
                  />
                  <CustomButton
                    text={"Sortby"}
                    isHoverColor={theme.palette.custom.themeBlue}
                  />
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={12}>
              <ListingTable />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Listings;
