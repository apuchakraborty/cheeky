import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Avatar,
} from "@mui/material";
import { profileActivityData } from "../utils/data"; // Assuming profileActivityData is imported from a data file

const CustomTable = ({ isCampaign }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Viewed On</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {profileActivityData.map((row, i) => (
            <TableRow key={row.name}>
              <TableCell>
                <Box sx={{ display: "flex" }}>
                  <Avatar
                    variant="rounded"
                    alt={row.name}
                    src={`../img/${isCampaign ? `c` : `u`}${i + 1}.png`}
                    sx={{ width: 40, height: 40, marginBottom: 1 }}
                  />
                  <Box ml={2}>
                    <Typography variant="body1">{row.name}</Typography>
                    <Typography
                      variant="body2"
                      color={theme.palette.custom.themeBlue}
                    >
                      {row.companyName} &#10138;
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>{row.location}</TableCell>
              <TableCell>{row.viewedOn}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
