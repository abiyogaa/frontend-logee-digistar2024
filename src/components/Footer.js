import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, useTheme } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { styled } from '@mui/material/styles';

// Add this styled component
const LogoImage = styled('img')({
  height: '30px',
  marginBottom: '10px',
});

function Footer() {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: 'black', color: 'white', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <LogoImage src="/logee-logo.png" alt="LOGEE" />
            <Typography variant="subtitle2">
              Jembatan Digital Rantai Pasok
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton href="https://www.instagram.com/logee.id/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon sx={{ color: 'white' }} />
              </IconButton>
              <IconButton href="https://web.facebook.com/Logeeid-101922402650807" target="_blank" rel="noopener noreferrer">
                <FacebookIcon sx={{ color: 'white' }} />
              </IconButton>
              <IconButton href="https://twitter.com/logee_id" target="_blank" rel="noopener noreferrer">
                <TwitterIcon sx={{ color: 'white' }} />
              </IconButton>
              <IconButton href="https://www.linkedin.com/company/logee-indonesia/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon sx={{ color: 'white' }} />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" gutterBottom>
              Tautan
            </Typography>
            <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none' }}>LEAP</Link>
            <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none' }}>Artikel</Link>
            <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none' }}>Karier</Link>
            <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none' }}>Hubungi Kami</Link>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" gutterBottom>
              Solusi
            </Typography>
            <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none' }}>Transportasi</Link>
            <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none' }}>Distribusi</Link>
            <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none' }}>Visibility</Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Kontak
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <EmailIcon sx={{ mr: 1, fontSize: 20, color: theme.palette.primary.main }} />
              <Typography variant="body2">info@logee.id</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <PhoneIcon sx={{ mr: 1, fontSize: 20, color: theme.palette.primary.main }} />
              <Typography variant="body2">+62811 1255 250</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', mt: 2 }}>
              <LocationOnIcon sx={{ mr: 1, fontSize: 20, mt: 0.5, color: theme.palette.primary.main }} />
              <Typography variant="body2">
                Gedung Telkom DBT Jln. Prof.Dr.Soepomo no. 139, Jakarta Selatan, 12810, Indonesia
              </Typography>
            </Box>
          </Grid>
        </Grid>
        
        {/* Add this new section for team members */}
        <Box sx={{ mt: 4, pt: 2, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <Typography variant="h6" align="center" gutterBottom>
            Anggota Tim
          </Typography>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item>
              <Typography variant="body2">Abiyoga Dhaniswara</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">Roby Oktorizal</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">Rachma Yasin</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">Ranie Sita Mannuela</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">Nadya Zahra</Typography>
            </Grid>
          </Grid>
        </Box>
        
        {/* Copyright notice */}
        <Typography 
          variant="body2" 
          align="center" 
          sx={{ 
            mt: 4, 
            pt: 2, 
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            color: 'rgba(255, 255, 255, 0.6)'
          }}
        >
          Dibuat oleh Tim 81 Digistar 2024 
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;