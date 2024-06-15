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
import { data, notificationItems } from "../utils/data";

const drawerWidth = 240;

const Dashboard = () => {
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
              <SearchScore />
            </Grid>

            {/* stats starts */}
            <Grid item xs={12} md={3}>
              <Stats
                icon={`../img/eye.png`}
                iconColor="#f5edff"
                text="Profile Views"
                num="2,300"
              />
            </Grid>

            <Grid item xs={12} md={3}>
              <Stats
                icon={`../img/doc.png`}
                iconColor="#fee6e0"
                text="Applied Listings"
                num="44"
              />
            </Grid>

            <Grid item xs={12} md={3}>
              <Stats
                icon={`../img/saved.png`}
                iconColor="#d9fbe7"
                text="Profile Views"
                num="2,300"
              />
            </Grid>

            <Grid item xs={12} md={3}>
              <Stats
                icon={`../img/star.png`}
                iconColor="#d4e2fe"
                text="Profile Views"
                num="5,295"
              />
            </Grid>

            {/* stats ends */}

            {/* chart start */}

            <Grid item xs={12} md={8} sm={12}>
              <Box sx={{ p: 2, borderRadius: 5, border: "1px solid #ddd" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    pt: 1,
                    pb: 3,
                  }}
                >
                  <Typography variant="h6">Profile Views</Typography>
                  <CustomButton
                    text={"Monthly"}
                    isHoverColor={theme.palette.custom.themeBlue}
                  />
                </Box>
                <AreaChart
                  width={isDesktop ? 600 : 350}
                  height={isDesktop ? 400 : 200}
                  data={data}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="views"
                    stroke="#9A4CFB"
                    fill="#f5edff"
                  />
                </AreaChart>
              </Box>
            </Grid>

            {/* chart ends */}

            {/* start notification */}
            <Grid item xs={12} md={4} sm={12}>
              <Box sx={{ p: 2, borderRadius: 5, border: "1px solid #ddd" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    pt: 1,
                  }}
                >
                  <Typography variant="h6">Notifications</Typography>
                  <CustomButton
                    text={"Recent"}
                    isHoverColor={theme.palette.custom.themeBlue}
                  />
                </Box>
                <BulletLists items={notificationItems} />
              </Box>
            </Grid>
            {/* end notificaiton */}

            {/* start profile View */}
            <Grid item xs={12} md={6} sm={12}>
              <Box sx={{ p: 2, borderRadius: 5, border: "1px solid #ddd" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    pt: 1,
                    pb: 1,
                  }}
                >
                  <Typography variant="h6">Profile Views</Typography>
                  <Typography
                    variant="h6"
                    color={theme.palette.custom.themeBlue}
                  >
                    View All..
                  </Typography>
                </Box>
                <CustomTable />
              </Box>
            </Grid>
            {/* end Profile view */}

            {/* start campaign */}

            <Grid item xs={12} md={6} sm={12}>
              <Box sx={{ p: 2, borderRadius: 5, border: "1px solid #ddd" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    pt: 1,
                    pb: 1,
                  }}
                >
                  <Typography variant="h6">Campaigns</Typography>
                  <Typography
                    variant="h6"
                    color={theme.palette.custom.themeBlue}
                  >
                    View All..
                  </Typography>
                </Box>
                <CustomTable isCampaign={true} />
              </Box>
            </Grid>

            {/* end campaign */}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;
