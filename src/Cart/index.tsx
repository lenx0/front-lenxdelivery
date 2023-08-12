import { Drawer, Typography, Box } from "@mui/material";

interface CartProps {
  openDrawer: boolean;
  onClose: () => void;
}

export default function Cart({ openDrawer, onClose }: CartProps) {
  const drawerWidth = 450;
  const drawerHeight = 700;
  return (
    <Drawer
      anchor="right"
      open={openDrawer}
      onClose={onClose}
      PaperProps={{ style: { width: drawerWidth, height: drawerHeight } }}
    >
      <Box style={{ padding: '20px' }}>
        <Typography>Pedido Nº</Typography>
      </Box>
    </Drawer>
  );
}
