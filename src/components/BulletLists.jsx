import React from "react";
import { Box, List, ListItem, Typography } from "@mui/material";

const BulletList = ({ items }) => {
  return (
    <Box sx={{ position: "relative", padding: 2 }}>
      <List sx={{ paddingLeft: "30px", position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: "10px",
            width: "1px",
            height: "100%",
            backgroundColor: "#EEEFF1",
          }}
        />
        {items.map((item, index) => (
          <ListItem
            key={index}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              paddingBottom: 1,
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: "-24px",
                top: "10px",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                border: "3px solid #2870FB",
                zIndex: 1,
              }}
            />
            <Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#898B97" }}
              >
                {item.title}
              </Typography>
              <Typography variant="body2" color="#0F1D3B">
                {item.description}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default BulletList;
