import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Dashboard from "./components/Dashboard";
import Listings from "./components/Listings";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
      <Routes>

          <Route exact path="/" element={<Dashboard />} />
          <Route path="/listings" element={<Listings />} />
          </Routes>

      </Router>
    </ThemeProvider>
  );
};

export default App;
