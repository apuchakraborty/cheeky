import { Button } from "@mui/material";
import React from "react";
import theme from "../theme";

export default function CustomButton({
  text,
  bgColor,
  borderColor,
  isWidth,
  isColor,
  isHoverColor,
}) {
  return (
    <Button
      variant="contained"
      sx={{
        // mt: 2,
        width: isWidth && "100%",
        backgroundColor: bgColor ? bgColor : "white",
        color: isColor ? isColor : theme.palette.custom.headingColor,
        border: borderColor
          ? `1px solid ${borderColor}`
          : `1px solid ${theme.palette.custom.borderColor}`,
        boxShadow: "none",
        borderRadius: 2,
        "&:hover": {
          backgroundColor: isHoverColor ? isHoverColor : "#f5f5f5",
          boxShadow: "none",
          color: isHoverColor && "#fff",
        },
      }}
    >
      {text}
    </Button>
  );
}
