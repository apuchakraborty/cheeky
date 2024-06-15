import React from "react";
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CustomButton from "./CustomButton";

const SearchScore = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
        border: "1px solid #e0e0e0",
        borderRadius: 5,
        textAlign: isMobile ? "center" : "left",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: isMobile ? "100%" : "75%",
          justifyContent: isMobile ? "center" : "flex-start",
          mb: isMobile ? 2 : 0,
        }}
      >
        <Box sx={{ position: "relative", display: "inline-flex" }}>
          <CircularProgress
            variant="determinate"
            value={80}
            size={isMobile ? 60 : 120}
            thickness={6}
            sx={{
              color: theme.palette.custom.themeBlue,
              "& .MuiCircularProgress-circle": {
                strokeLinecap: "round",
              },
            }}
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              component="div"
              color={theme.palette.custom.headingColor}
              fontSize={isMobile ? 12 : 36}
            >
              90
            </Typography>
          </Box>
        </Box>

        <Box sx={{ ml: isMobile ? 0 : 2, mt: isMobile ? 2 : 0 }}>
          <Typography variant="h5" gutterBottom>
            Great Job!
          </Typography>
          <Typography
            variant="p"
            color="textSecondary"
            component="div"
            mb={1.5}
          >
            {" "}
            Your Profile is appearing in all relevant searches
          </Typography>
          <CustomButton
            text={"Improve Your Score"}
            isHoverColor={theme.palette.custom.themeBlue}
          />
        </Box>
      </Box>
      <Box
        sx={{
          borderLeft: isMobile ? "none" : "1px solid #e0e0e0",
          borderTop: isMobile ? "1px solid #e0e0e0" : "none",
          pt: isMobile ? 2 : 0,
          mt: isMobile ? 2 : 0,
          pl: isMobile ? 0 : 2,
          ml: isMobile ? 0 : 2,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Introducing Search Score
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Search Score measures how your profile will perform in a search.
          Profiles with higher scores are more likely to get chosen by brands to
          collaborate with.
        </Typography>
      </Box>
    </Box>
  );
};

export default SearchScore;
