import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
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
import CloseIcon from "@mui/icons-material/Close";

function CustomAppBar() {
  const navigate = useNavigate();
  const [Open, setOpen] = useState(false);
  const navItems = ["Iniciar Sesión", "Registrarse"];

  const handleDrawerToggle = () => {
    setOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <IconButton
        color="default"
        aria-label="close drawer"
        size="large"
        sx={{
          position: "absolute",
          top: 8,
          right: 8, // Adjust to your preference
        }}
      >
        <CloseIcon />
      </IconButton>

      <List>
        {navItems.map((item) => (
          <ListItem key={item}>
            <ListItemButton sx={{ textAlign: "center", color: "primary.main" }}>
              <ListItemText
                primary={item}
                onClick={
                  item === "Iniciar Sesión"
                    ? () => navigate("/login")
                    : () => navigate("/signup")
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <header>
      <Box sx={{ display: "flex" }}>
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
              id="logo"
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
              <Button
                color="primary"
                sx={{ m: 2 }}
                onClick={() => navigate("/login")}
              >
                Iniciar Sesión
              </Button>
              <Button
                color="primary"
                variant="contained"
                onClick={() => navigate("/signup")}
              >
                Registrarse
              </Button>
            </Box>

            <Box>
              <Typography
                variant="h6"
                sx={{ display: { sm: "none" }, fontFamily: "Playfair Display" }}
                onClick={() => navigate("/")}
              >
                BiblioPool
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="temporary"
          open={Open}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "content-box",
              width: "100%",
            },
            opacity: 1,
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </header>
  );
}

export default CustomAppBar;
