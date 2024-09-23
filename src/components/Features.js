import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function Features() {
  const features = [
    { title: 'Terbuka', image: 'path_to_image1.jpg' },
    { title: 'Netral', image: 'path_to_image2.jpg' },
    { title: 'Aman', image: 'path_to_image3.jpg' },
    { title: 'Cerdas', image: 'path_to_image4.jpg' },
  ];

  return (
    <Grid container spacing={4} sx={{ mt: 4 }}>
      {features.map((feature, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={feature.image}
              alt={feature.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {feature.title}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Features;