import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#08374B',
      },
      heading: {
        main: '#08374B',
      },
      typography: {
        fontFamily: [
          'Playfair Display',
          'Roboto',
        ].join(','),
      },
  
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 960,
          lg: 1280,
          xl: 1920,
        },
      }, 
    },
});

export default theme;