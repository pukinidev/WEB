import React from "react";
import {
  Grid2,
  Card,
  CardContent,
  useTheme,
  alpha,
  Typography,
  Icon,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import BackpackIcon from "@mui/icons-material/Backpack";
import StarIcon from "@mui/icons-material/Star";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";

const featuresCardTitles = [
  "Crea proyectos",
  "Almacena tus referencias",
  "Califica y Reseña",
  "Descubre y Explora",
];

const featuresIcons = [FolderIcon, BackpackIcon, StarIcon, SearchIcon];
function FeaturesHero() {
  const theme = useTheme();
  return (
    <div>
      <Typography variant="h4" color="heading" sx={styles(theme).FeatureTitle}>
        BiblioPool: La Evolución de tu Biblioteca Digital
      </Typography>
      <Typography variant="body1" sx={styles(theme).FeatureContent}>
        Diseñada para ofrecer una experiencia de consulta bibliográfica más
        accesible para el usuario.
      </Typography>

      <Grid2
        container
        spacing={{ xs: 4, sm: 4, md: 4 }} // Adjust spacing based on screen size
        sx={styles(theme).FeatureGrid2}
      >
        {featuresCardTitles.map((title) => (
          <Grid2 item xs={12} sm={6} md={4} key={title}>
            <Card sx={styles(theme).FeatureCard}>
              <CardContent>
                <Box sx={styles(theme).FeatureBox}>
                  <Icon
                    component={featuresIcons[featuresCardTitles.indexOf(title)]}
                    sx={{ fontSize: 25, color: "white" }}
                  />
                </Box>
                <Typography variant="h6" color="heading" sx={styles(theme).FeatureCardTile} >{title}</Typography>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  quibusdam, voluptatem, quod, autem dolorum quia quae
                </p>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
}

// Styles for the FeaturesHero component
const styles = (theme) => {
  return {
    FeatureCard: {
      maxWidth: {
        xs: "100%", // Full width on mobile
        sm: 300, // Fixed width on tablet
        md: 340, // Larger width on desktop
        borderRadius: "3%",
      },
      margin: "auto", // Center the cards horizontally within their Grid item
      textAlign: "left",
      backgroundColor: alpha(theme.palette.primary.main, 0.2),
      height: "auto",
    },
    FeatureGrid2: {
      padding: {
        xs: theme.spacing(5), // Smaller padding on mobile
        sm: theme.spacing(4), // Medium padding on tablet
        md: theme.spacing(6), // Larger padding on desktop
      },
      justifyContent: {
        xs: "center", // Center items on mobile
        sm: "center", // Align to start on tablets
        md: "center", // Center items on desktop
      },
    },
    FeatureBox: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: 45, // Ajusta el tamaño del box según sea necesario
      height: 45, // Ajusta el tamaño del box según sea necesario
      backgroundColor: theme.palette.primary.main, // Color de fondo para el box
      borderRadius: "30%", // Hacer el box redondo, si es necesario
      padding: 1, // Espacio alrededor del icono
      boxShadow: 3, // Opcional: agrega una sombra para el efecto de profundidad
    },
    FeatureTitle: {
      textAlign: "center",
      margin: theme.spacing(4),
      fontFamily: "Playfair Display",
    },
    FeatureContent: {
      textAlign: "center",
      margin: theme.spacing(0, 4, 0, 4),
      fontFamily: "Roboto",
    },
    FeatureCardTile: {
      mt: '1rem'
    }
  };
};

export default FeaturesHero;
