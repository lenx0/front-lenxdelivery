import { Drawer, Typography, Box } from "@mui/material";
import CartLoot from "../CartCard";
import CartHeader from "../Cart/Header"
interface CartProps {
  openDrawer: boolean;
  onClose: () => void;
}

export default function Cart({ openDrawer, onClose }: CartProps) {
  const drawerWidth = 700;
  const drawerHeight = "100vh";
  return (
    <Drawer
      anchor="right"
      open={openDrawer}
      onClose={onClose}
      PaperProps={{ style: { width: drawerWidth, height: drawerHeight } }}
    >
      <CartHeader />
      <CartLoot />
    </Drawer>
  );
}
