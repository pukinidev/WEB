import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
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

const drawerWidth = 240;
const navItems = ["Iniciar Sesión", "Registrarse"];

function NewAppBar(props) {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} onClick={
                item === "Iniciar Sesión" ? () => navigate("/login") : () => navigate("/signup")
              }/>
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
      <AppBar component="nav" color="inherit">
        <Toolbar variant="regular">
          <IconButton
            color="primary"
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
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                sm: "block",
                fontFamily: "Playfair Display",
              },
            }}
            onClick={() => navigate("/")}
          >
            BiblioPool
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button color="primary" variant="text" sx={{ m: 2 }} onClick={
              () => navigate("/login")
            }>
              Iniciar Sesión
            </Button>
            <Button color="primary" variant="contained" onClick={
              () => navigate("/signup")
            }>
              Registrarse
            </Button>
          </Box>

          <Box className=".appBarTitle">
            <Typography
              sx={{ display: { sm: "none" }, fontFamily: "Playfair Display" } }
              onClick={() => navigate("/")}
            >
              BiblioPool
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
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
    </Box>
  );
}

export default NewAppBar;
