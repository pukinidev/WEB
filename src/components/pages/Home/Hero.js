import { Box, Button, Typography, useTheme, useMediaQuery } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { styled } from '@mui/system';

const HeroContainer = styled(Box)(({ theme }) => ({
  height: '79vh',
  backgroundColor: alpha(theme.palette.primary.main, 0.2),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'left',
  color: theme.palette.text.primary,
  padding: theme.spacing(8),
  [theme.breakpoints.down('sm')]: {
    height: 'auto',
    padding: theme.spacing(10, 4, 4, 4),
  },
  [theme.breakpoints.up('md')]: {
    height: '115vh',
    padding: theme.spacing(8),
  },
}));

function Hero() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <HeroContainer >
      <Typography 
        variant="h1" 
        sx={{ 
          fontFamily: 'Playfair Display', 
          fontSize: isMobile ? '3rem' : isTablet ? '4rem' : 'rem', // Ajuste del tamaño del texto
          textAlign: isMobile ? 'center' : 'left', // Alineación del texto
        }} 
        gutterBottom
      >
        Explora y Domina <br />
        La Gestión de <br />
        Referencias
      </Typography>
      <Typography 
        variant="body1" 
        sx={{ 
          fontFamily: 'Roboto',
          fontSize: isMobile ? '0.875rem' : isTablet ? '1rem' : '1.125rem', // Ajuste del tamaño del texto
          textAlign: isMobile ? 'center' : 'left', // Alineación del texto
          mt: isMobile ? 2 : isTablet ? 2 : 2, // Márgenes
          display: 'block', // Manejo de saltos de línea
        }}
      >
        Organiza, comparte y colabora en la gestión de referencias bibliográficas con BiblioPool.
      </Typography>

      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row', // Disposición vertical en móvil
          alignItems: isMobile ? 'center' : 'flex-start', // Alineación de los botones
          marginTop: 4 
        }}
      >
        <Button 
          variant="outlined" 
          color="primary" 
          size="large" 
          sx={{ mb: isMobile ? 2 : 0 }} // Márgenes en móvil
        >
          Más Información
        </Button>
        <Button 
          variant="contained" 
          color="primary" 
          size="large" 
          sx={{ marginLeft: isMobile ? 0 : 2 }}
        >
          Pruebalo Gratis
        </Button>
      </Box>
    </HeroContainer>
  );
}

export default Hero;
