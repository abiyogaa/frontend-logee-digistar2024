import React, { useState } from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Snackbar, useMediaQuery, useTheme, BottomNavigation, BottomNavigationAction } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ListAltIcon from '@mui/icons-material/ListAlt';
import HistoryIcon from '@mui/icons-material/History';

function SideNav() {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleFeatureClick = () => {
    setShowSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setShowSnackbar(false);
  };

  const navItems = [
    { icon: <LocalShippingIcon />, label: "Buat Pengiriman" },
    { icon: <ListAltIcon />, label: "Daftar Pengiriman" },
    { icon: <HistoryIcon />, label: "Riwayat Pencarian" },
  ];

  const sideNavContent = (
    <Box sx={{ width: 240, flexShrink: 0, bgcolor: 'white', height: '100%', borderRight: 1, borderColor: 'divider' }}>
      <List sx={{ py: 0 }}>
        {navItems.map((item, index) => (
          <ListItem 
            button 
            key={index}
            sx={{ 
              py: 2, 
              borderLeft: index === 0 ? 3 : 0, 
              borderColor: '#ff5722',
              '&:hover': { bgcolor: 'rgba(255, 87, 34, 0.08)' }
            }}
            onClick={index === 0 ? undefined : handleFeatureClick}
          >
            <ListItemIcon sx={{ color: index === 0 ? '#ff5722' : 'text.secondary' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText 
              primary={item.label} 
              primaryTypographyProps={{ 
                sx: { 
                  color: index === 0 ? '#ff5722' : 'text.primary', 
                  fontWeight: index === 0 ? 'bold' : 'normal' 
                } 
              }} 
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const bottomNavContent = (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        // Only update the value if it's the first item or the last item
        if (newValue === 0) {
          setValue(newValue);
        }
        if (newValue !== 0) handleFeatureClick();
      }}
      showLabels
      sx={{ 
        width: '100%', 
        position: 'fixed', 
        bottom: 0, 
        borderTop: 1, 
        borderColor: 'divider',
        zIndex: 1000, // Add this line to set a high z-index
        '& .Mui-selected': {
          '& .MuiBottomNavigationAction-label': {
            fontSize: theme.typography.pxToRem(13),
            transition: 'none',
            fontWeight: 'bold',
            lineHeight: '20px',
          },
          '& .MuiSvgIcon-root': {
            color: '#ff5722',
          },
        },
      }}
    >
      {navItems.map((item, index) => (
        <BottomNavigationAction key={index} label={item.label} icon={item.icon} />
      ))}
    </BottomNavigation>
  );

  return (
    <>
      {isMobile ? bottomNavContent : sideNavContent}
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
    </>
  );
}

export default SideNav;