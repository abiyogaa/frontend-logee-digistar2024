import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function SearchBar() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
      <TextField label="Pilih alamat asal" variant="outlined" sx={{ mr: 2 }} />
      <TextField label="Pilih alamat tujuan" variant="outlined" sx={{ mr: 2 }} />
      <Select
        value=""
        displayEmpty
        sx={{ mr: 2, minWidth: 120 }}
      >
        <MenuItem value="" disabled>Pilih armada</MenuItem>
      </Select>
      <Button variant="contained" color="primary">
        Cari Armada
      </Button>
    </Box>
  );
}

export default SearchBar;