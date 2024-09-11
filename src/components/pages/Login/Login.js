import { Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import { Button, TextField } from '@mui/material'
import Divider from '@mui/material/Divider';
import Grid2 from '@mui/material/Grid2';

import React from 'react'

function Login() {
  

  return (
    <div>
      <Box sx={{ height: '100dvh', display: 'flex', flexDirection: 'column' }}>
        <Container sx={{ margin: 'auto', padding: '20px', width: '600px' }}> 
          <Grid2 container spacing={2}>
          <Typography variant='h6' sx={{
            'color': 'black',
            'marginBottom': '0.5rem',
            'fontWeight': 'normal',
          }} >Iniciar Sesión en</Typography>

          <Typography variant='h5' sx={{
            'fontFamily': 'Playfair Display',
            'marginBottom': '0.5rem',
          }}>BiblioPool</Typography>
          </Grid2>
          
          <Divider></Divider>
          <TextField margin='normal'  sx label='Correo Electrónico' variant='outlined' fullWidth/>
          <TextField margin='normal' label='Contraseña' variant='outlined' fullWidth />
          <Button variant='contained' color='primary' sx={{
            marginTop: '1rem',
            
          }} fullWidth>Iniciar Sesión</Button>
        </Container>
        </Box>
    </div>
  )
}

export default Login