import { Drawer } from "@mui/material";
import CartCard from "../CartCard";
import CartHeader from "../Cart/Header"
import OrderPanel from "../Cart/OrderPanel"

interface CartProps {
  openDrawer: boolean;
  onClose: () => void;
}

export default function Cart({ openDrawer, onClose }: CartProps) {
  const drawerWidth = 750;
  const drawerHeight = "100vh";
  return (
    <Drawer
      anchor="right"
      open={openDrawer}
      onClose={onClose}
      PaperProps={{ style: { width: drawerWidth, height: drawerHeight, background: '#F5F5F5' } }}
    >
      <CartHeader />
      <OrderPanel />
      <CartCard />
    </Drawer>
  );
}
