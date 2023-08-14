import { Box, Typography, Button } from "@mui/material";
export default function OrderPanel() {
  return (
    <Box
      style={{
        padding: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          fontFamily: "Open Sans, sans-serif",
        }}
      >
        Pedido Nº 51
      </Typography>
      <Button
        style={{
          width: "162px",
          height: "44px",
          color: "var(--light-color)",
          background: "var(--primary-color)",
          fontWeight: "bold",
          fontFamily: "Open Sans, sans-serif",
        }}
      >
        FINALIZAR
      </Button>
    </Box>
  );
}
