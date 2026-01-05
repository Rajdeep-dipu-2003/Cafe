import * as React from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import OrderHistory from "./OrderHistory";

const drawerWidth = 240;

function AdminNavigator({ children }) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [activePage, setActivePage] = React.useState("Orders");

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  const handleNavClick = (page) => {
    setActivePage(page);
    setDrawerOpen(false);
  };

  const handleLogout = () => {
    // logout logic later (clear cookies / call API)
    console.log("Admin logged out");
  };

  const drawer = (
    <Box sx={{ width: drawerWidth }}>
      <Toolbar />
      <List>
        {[
          "Orders",
          "View Products",
          "Create Category",
          "Create Product",
        ].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              selected={activePage === text}
              onClick={() => handleNavClick(text)}
            >
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Top Navbar */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={toggleDrawer}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>

          <Button
            color="inherit"
            startIcon={<LogoutIcon />}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
      >
        {drawer}
      </Drawer>

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
        }}
      >
        {/* Placeholder for routed admin pages */}
        {children || (
          <Typography variant="h5">
            {activePage === "Orders" && <OrderHistory/>}
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default AdminNavigator;
