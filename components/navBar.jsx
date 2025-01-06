import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="flex items-center justify-between p-2 lg:p-10 bg-white">
      <Link href="/">
        <Image
          className="w-[154px] h-[38px] lg:w-[215px] lg:h-[53px]"
          src="images/logo.svg"
          alt="logo"
          width={50}
          height={50}
        />
      </Link>

      {/*Mobile Navigation*/}
      <button onClick={handleMenu} className="lg:hidden">
        <Image src="images/menu.svg" alt="menu" width={30} height={30} />
      </button>
      <ul
        className={`${
          menuOpen
            ? "visible opacity-100 translate-x-0"
            : "invisible opacity-0 translate-x-full"
        } lg:hidden flex flex-col fixed top-0 right-0 z-50 gap-10 text-white font-medium text-lg bg-accent p-5 pt-16 transition-all duration-300 ease-in-out min-w-[150px]`}
      >
        <li
          onClick={handleMenu}
          className="fixed top-5 right-5 p-3 bg-white h-4 w-4 text-accent flex items-center justify-center rounded-full"
        >
          <button>X</button>
        </li>
        <li>Home</li>
        <li>Browse Menu</li>
        <li>Special Offers</li>
        <li>Restaurants</li>
        <li>Track Order</li>
        <li className="bg-white rounded-full w-[234px] p-3 text-center flex items-center justify-center gap-3 text-accent">
          <Image src="images/user.svg" alt="user" width={30} height={30} />
          Login/Signup
        </li>
      </ul>

      {/*Desktop Navigation*/}
      <ul className="hidden lg:flex gap-10 items-center text-black font-medium text-lg">
        <li>Home</li>
        <li>Browse Menu</li>
        <li>Special Offers</li>
        <li>Restaurants</li>
        <li>Track Order</li>
        <li className="bg-accent rounded-full w-[234px] p-3 text-center flex items-center justify-center gap-3 text-white">
          <Image src="images/user.svg" alt="user" width={30} height={30} />
          Login/Signup
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

// Compare this snippet from app/page.jsx:

{
  /*import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";

const drawerWidth = 240;
const navItems = [
  "Home",
  "Browse Menu",
  "Special Offers",
  "Restaurants",
  "Track Order",
  "Login/Signup",
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Image
              className="lg-[215px] lg:h-[53px]"
              src="images/logo.svg"
              alt="logo"
              width={50}
              height={50}
            />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default DrawerAppBar;
*/
}
