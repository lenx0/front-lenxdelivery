import { Box, Typography } from "@mui/material";

export default function CartLoot() {
  return (
    <Box style={{ display: 'flex', justifyContent: 'center' }}>
      <Box
        style={{
          width: "632px",
          height: "167px",
          background: "#FFFFFF",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
          borderRadius: "10px",
        }}
      >
        <Typography>Titulo</Typography>
      </Box>
    </Box>
  );
}

// background-color: #FFF;
//     box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
//     border-radius: 10px;
//     padding: 15px;
//     cursor: pointer;
