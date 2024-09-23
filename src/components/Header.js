import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleMenuItemClick = () => {
    setShowSnackbar(true);
    handleClose();
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setShowSnackbar(false);
  };

  const menuItems = ['Produk', 'Solusi', 'Artikel', 'Karier', 'Hubungi'];

  return (
    <AppBar position="static" color="default" elevation={0} sx={{ backgroundColor: 'black' }}>
      <Toolbar>
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ flexGrow: 1, cursor: 'pointer' }}
          onClick={handleLogoClick}
        >
          <img src="/logee-logo.png" alt="LOGEE" height="30" />
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
              sx={{ color: 'white' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {menuItems.map((item) => (
                <MenuItem key={item} onClick={handleMenuItemClick} sx={{ color: 'black' }}>
                  {item}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {menuItems.map((item) => (
              <Button key={item} color="inherit" sx={{ color: 'white' }} onClick={handleMenuItemClick}>
                {item}
              </Button>
            ))}
          </Box>
        )}
        <Select
          value="ID"
          size="small"
          sx={{
            minWidth: 60,
            color: 'white',
            '& .MuiSvgIcon-root': { color: 'white' },
            ml: 2,
          }}
        >
          <MenuItem value="ID">ID</MenuItem>
        </Select>
        <Button 
          color="primary" 
          variant="contained" 
          sx={{ 
            ml: 2,
            display: { xs: 'none', sm: 'block' }
          }}
          onClick={handleMenuItemClick}
        >
          Masuk
        </Button>
      </Toolbar>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Feature coming soon!"
      />
    </AppBar>
  );
}

export default Header;