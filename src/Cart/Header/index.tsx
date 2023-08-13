import { Box, Typography } from "@mui/material"
import { FaRegTrashAlt } from "react-icons/fa"

export default function CartHeader() {
  return (
    <Box
      style={{
        height: "70px",
        background: "var(--primary-color)",
        display: "grid",
        gridTemplateColumns: "1fr auto",
        alignItems: "center",
        padding: "0 20px"
      }}
    >
      <Typography style={{ fontSize: "24px", fontWeight: "bold" }}>
        Carrinho
      </Typography>
      <Box
        style={{
          display: "flex",
          alignItems: "center"
        }}
      >
        <Typography style={{ fontSize: "24px", fontWeight: "bold", marginRight: "10px" }}>
          Total R$ 265,97
        </Typography>
        <FaRegTrashAlt
          size={20}
          style={{
            cursor: "pointer",
            color: "white",
          }}
        />
      </Box>
    </Box>
  )
}
