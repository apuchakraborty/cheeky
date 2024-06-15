import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box, Avatar, Button } from "@mui/material";
import CustomButton from "./CustomButton";
import theme from "../theme";
import { companyData } from "../utils/data";

// Define columns for the table
const columns = [
  { id: "company", label: "Company", minWidth: 170 },
  { id: "listing", label: "Listing", minWidth: 100 },
  { id: "platform", label: "Platform", minWidth: 170 },
  { id: "industry", label: "Industry", minWidth: 170 },
  { id: "appliedDate", label: "Applied Date", minWidth: 170 },
  { id: "status", label: "Status", minWidth: 170 },
];

export default function ListingTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getStatusButton = (status) => {
    if (status === "Open") {
      return (
        <CustomButton
          text={"Open"}
          isHoverColor={"#01AE5A"}
          borderColor={"#01AE5A"}
        />
      );
    } else if (status === "Close") {
      return (
        <CustomButton
          borderColor={"#DE4141"}
          text={"Close"}
          isHoverColor={"#DE4141"}
        />
      );
    } else {
      return status;
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        border: "1px solid #ddd",
        borderRadius: 4,
      }}
    >
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align="left" // Align left for all columns
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {companyData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow key={index} hover role="checkbox" tabIndex={-1}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align="left">
                          {column.id === "company" && (
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              <Avatar
                                variant="rounded"
                                alt="Avatar"
                                src={row.avatar}
                                sx={{ width: 40, height: 40, marginRight: 1 }}
                              />
                              <span>{value}</span>
                            </Box>
                          )}
                          {column.id !== "company" && column.id !== "status" ? (
                            <React.Fragment>
                              <span>{value}</span>
                            </React.Fragment>
                          ) : column.id === "status" ? (
                            getStatusButton(value)
                          ) : null}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={companyData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
}
