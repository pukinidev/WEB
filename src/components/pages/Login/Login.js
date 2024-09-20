import { Typography, Button, TextField, Divider } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import Link from "@mui/material/Link";
import Grid2 from "@mui/material/Grid2";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";


function Login() {

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    const email = e.target.value;
    setFormValues({ ...formValues, email });
  }

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setFormValues({ ...formValues, password });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  }
  
  return (
    <div>
      <Box sx={{ height: "100dvh", display: "flex", flexDirection: "column" }}>
        <Container
          sx={{
            margin: "auto",
            padding: "20px",
            width: {
              xs: "85%", // Full width on extra small screens
              sm: "480px", // Smaller width on small screens
              md: "500px", // Medium width on medium screens
              lg: "600px", // Larger width on large screens
            },
          }}
        >
          <Grid2
            container
            direction="row" // Aligns items in a row (horizontally)
            alignItems="center" // Vertically aligns the text to the center
            spacing={1} // Adds a bit of space between the two text elements
          >
            <Grid2 item>
              <Typography
                variant="h6"
                sx={{
                  color: "black",
                  fontWeight: "normal",
                }}
              >
                Iniciar Sesión en{" "}
                <Typography
                  color="heading"
                  sx={{
                    fontFamily: "Playfair Display",
                    fontSize: "1.5rem",
                  }}
                >
                  BiblioPool
                </Typography>
              </Typography>
            </Grid2>
          </Grid2>

          <Divider
            sx={{
              marginTop: "0.5rem",
              marginBottom: "1rem",
            }}
          />
          <FormControl component="form" fullWidth>
          <TextField
            margin="normal"
            label="Email"
            type="email"
            variant="outlined"
            defaultValue=" "
            sx={{
              marginTop: {
                xs: "0.5rem", // Less space on small screens
                sm: "1rem", // Standard space on larger screens
              },
            }}
            onChange={handleLoginChange}
            fullWidth
          />

          <TextField
            margin="normal"
            label="Contraseña"
            variant="outlined"
            type="password"
            defaultValue=" "
            onChange={handlePasswordChange}
            fullWidth
          />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              marginTop: "1rem",
              fontSize: {
                xs: "0.875rem", // Smaller font on small screens
                sm: "1rem", // Standard font on larger screens
              },
            }}
            onClick={handleSubmit}
          >
            Iniciar Sesión
          </Button>
          </FormControl>
          <Stack
            direction="row"
            spacing={0.5}
            sx={{
              marginTop: "1rem",
            }}
          >
            <Typography>¿No tienes una cuenta?</Typography>
            <Link href="/signup" underline="none">
              Crear Cuenta
            </Link>
          </Stack>
        </Container>
      </Box>
    </div>
  );
}

export default Login;
