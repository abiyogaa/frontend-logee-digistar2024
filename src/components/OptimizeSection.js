import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Container, Button } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function OptimizeSection({ onPilihArmadaClick }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const armadaTypes = [
    { title: 'Van', description: 'Van ini cocok untuk barang kecil hingga menengah dengan desain interior yang efisien dan dapat digunakan di jalan sempit.', image: '/image/van1.png' },
    { title: 'Fuso Bak', description: 'Fuso Bak menyediakan kapasitas besar untuk barang berat, ideal untuk pengiriman besar dan distribusi efisien.', image: '/image/fusobak1.png' },
    { title: 'Tronton Wingbox', description: 'Tronton Wingbox membuat pengiriman lebih efisien dan aman dengan desain yang menarik dan tahan lama.', image: '/image/trontonwingbox1.png' },
  ];

  return (
    <Box sx={{
      py: { xs: 6, md: 10 },
      backgroundImage: 'url("/IMG_1222 1.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.0)',
      },
    }}>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography 
          variant={isMobile ? "h4" : "h3"} 
          component="h2" 
          align="center" 
          gutterBottom 
          sx={{ 
            color: theme.palette.primary.main,
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
            mb: 3
          }}
        >
          Optimalkan Pengiriman Anda dengan Armada yang Tepat
        </Typography>
        <Typography 
          variant="h6" 
          align="center" 
          gutterBottom 
          sx={{ 
            color: theme.palette.primary.main, 
            mb: 6,
            maxWidth: '800px',
            mx: 'auto',
            textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
          }}
        >
          Pilih jenis armada dan barang untuk pengiriman yang lebih efisien dan aman.
        </Typography>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {armadaTypes.map((type, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': { 
                  transform: 'translateY(-10px)',
                  boxShadow: '0 12px 20px rgba(0,0,0,0.2)'
                },
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                overflow: 'hidden'
              }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={type.image}
                  alt={type.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', mb: 2 }}>
                    {type.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {type.description}
                  </Typography>
                  <Button 
                    variant="outlined" 
                    startIcon={<LocalShippingIcon />}
                    sx={{ 
                      mt: 'auto',
                      borderColor: theme.palette.primary.main,
                      color: theme.palette.primary.main,
                      '&:hover': {
                        backgroundColor: theme.palette.primary.main,
                        color: 'white'
                      }
                    }}
                    onClick={onPilihArmadaClick}
                  >
                    Pilih Armada
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default OptimizeSection;