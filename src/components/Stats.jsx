import React from "react";
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

export default function Stats({ icon, iconColor, text, num }) {
  return (
    <Box sx={{ p: 2, borderRadius: 5, border: "1px solid #ddd" }}>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            background: iconColor,
            padding: "8px",
            borderRadius: 6,
            width: "85px",
            height: "90px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mr: 1,
          }}
        >
          <img src={icon} width={50} height={50} />
        </Box>
        <Box>
          <Typography variant="p" color="#0F1D3B" component="div">
            {text}
          </Typography>
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontWeight: 700,
              color: "#0F1D3B",
            }}
          >
            {num}
          </Typography>
          <Typography component="div" color="#5A86FC">
            View All
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
