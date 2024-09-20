import {
  Typography,
  Button,
  TextField,
  Divider,
  FormGroup,
} from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid2 from "@mui/material/Grid2";
import React from "react";
import { useState } from "react";

function SignUp() {
  const [checked, setChecked] = useState(false);
  const [checkedMessage, setCheckedMessage] = useState("");
  const [checkSubmited, setCheckSubmited] = useState("");

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Handle changes on login
  const handleLoginChange = (e) => {
    const email = e.target.value;
    setFormValues({ ...formValues, email });
  };

  // Handle changes on password
  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setFormValues({ ...formValues, password });

    if (!passwordValidation(password)) {
      setPasswordError(
        "La contraseña debe tener al menos 9 caracteres, una letra y un número"
      );
    } else {
      setPasswordError("");
    }
  };

  // Create validations for email and password
  const passwordValidation = (password) => {
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    return password.length >= 9 && hasLetters && hasNumbers;
  };

  const emailValidation = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const checkedValidation = (checked) => {
    return checked;
  };

  // Handle submit
  const handleSubmit = (e) => {
    const isEmailValid = emailValidation(formValues.email);
    const isCheck = checkedValidation(checked);

    // Email
    if (!isEmailValid) {
      setEmailError("Por favor, introduce un email válido");
    } else {
      setEmailError("");
    }

    if (formValues.password === "") {
      setPasswordError("No se ha ingresado una contraseña");
    }

    // Checked
    if (!isCheck) {
      setCheckSubmited(false);
      setCheckedMessage("Por favor, acepta los terminos y condiciones");
    } else {
      setCheckSubmited(true);
    }

    // If all validations are correct, submit the form
    if (isEmailValid && passwordValidation(formValues.password) && isCheck) {
      const data = {
        email: formValues.email,
        password: formValues.password,
      };
      alert(JSON.stringify(data, null, 2));
    }
  };

  const handleChangeChecked = (event) => {
    setChecked(event.target.checked);
  };

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
              defaultValue=""
              sx={{
                marginTop: {
                  xs: "0.5rem", // Less space on small screens
                  sm: "1rem", // Standard space on larger screens
                },
              }}
              onChange={handleLoginChange}
              error={!!emailError}
              helperText={emailError}
              fullWidth
            />

            <TextField
              margin="normal"
              label="Contraseña"
              type="password"
              variant="outlined"
              defaultValue=""
              onChange={handlePasswordChange}
              error={!!passwordError}
              helperText={passwordError}
              fullWidth
            />

            <FormGroup>
              {checkSubmited ? "" : <Typography>{checkedMessage}</Typography>}
              <FormControlLabel
                required
                control={
                  <Checkbox
                    checked={checked}
                    onChange={handleChangeChecked}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
                label="Acepto los términos y condiciones"
              />
            </FormGroup>

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

export default SignUp;
