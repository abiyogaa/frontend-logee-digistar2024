import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function BusinessSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const features = [
    { title: 'Terbuka', image: '/feature1.png', description: 'Platform yang terbuka untuk semua jenis bisnis logistik.' },
    { title: 'Netral', image: '/feature2.png', description: 'Menyediakan layanan yang netral dan adil bagi semua pengguna.' },
    { title: 'Aman', image: '/feature3.png', description: 'Keamanan data dan transaksi menjadi prioritas utama kami.' },
    { title: 'Cerdas', image: '/feature4.png', description: 'Menggunakan teknologi cerdas untuk optimalisasi logistik.' },
  ];

  return (
    <Box sx={{ py: 8, px: 2, bgcolor: '#f5f5f5' }}>
      <Typography 
        variant="h4" 
        component="h2" 
        gutterBottom 
        sx={{ 
          textAlign: 'center', 
          fontWeight: 'bold',
          mb: 4,
          color: theme.palette.primary.main
        }}
      >
        Bisnis Logistik Anda Maju Bersama LOGEE
      </Typography>
      <Typography 
        variant="body1" 
        sx={{ 
          textAlign: 'center', 
          mb: 6, 
          maxWidth: '800px', 
          mx: 'auto' 
        }}
      >
        LOGEE adalah platform digital logistik yang memiliki keunggulan untuk memajukan bisnis Anda dengan berdasar pada empat nilai berikut:
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                },
                bgcolor: 'rgba(255, 255, 255, 0.6)',
              }}
            >
              <CardMedia
                component="img"
                height={isMobile ? "140" : "200"}
                image={feature.image}
                alt={feature.title}
                sx={{ objectFit: 'contain', p: 2 }}
              />
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default BusinessSection;