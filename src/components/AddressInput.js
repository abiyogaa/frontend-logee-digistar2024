import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Map from './Map';

function AddressInput({ label, initialAddress, initialCoordinates, onSave }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [address, setAddress] = useState({
    street: '',
    details: '',
    notes: '',
  });
  const [searchOptions, setSearchOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(initialAddress || '');
  const [coordinates, setCoordinates] = useState(initialCoordinates || null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAddressChange = (field, value) => {
    setAddress(prev => ({ ...prev, [field]: value }));
  };

  const handleMapPinChange = (newAddress) => {
    setAddress(prev => ({ ...prev, details: newAddress }));
  };

  const handleSearch = async (value) => {
    if (value.length > 2) {
      setLoading(true);
      try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(value)}`);
        const data = await response.json();
        const options = data.map(item => ({
          label: item.display_name,
          value: [parseFloat(item.lat), parseFloat(item.lon)]
        }));
        setSearchOptions(options);
      } catch (error) {
        console.error('Error fetching address suggestions');
      } finally {
        setLoading(false);
      }
    } else {
      setSearchOptions([]);
    }
  };

  const handleAddressSelect = (event, newValue) => {
    if (newValue) {
      setAddress(prev => ({ ...prev, street: newValue.label }));
      handleMapPinChange(newValue.label);
      setCoordinates(newValue.value);
    }
  };

  const handleSave = () => {
    setSelectedAddress(address.details);
    onSave(address.details, coordinates);
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? `${label.toLowerCase()}-address-popover` : undefined;

  return (
    <>
      <TextField
        placeholder={`Pilih alamat ${label.toLowerCase()}`}
        variant="outlined"
        InputProps={{
          startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
        }}
        sx={{ 
          mr: 1, 
          flex: 1,
          '& .MuiOutlinedInput-root': {
            '& fieldset': { border: 'none' },
          },
        }}
        InputLabelProps={{
          shrink: true,
          sx: { color: 'black', fontWeight: 'bold' }
        }}
        label={label}
        onClick={handleClick}
        value={selectedAddress}
        inputProps={{ readOnly: true }}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Box sx={{ p: 2, width: 400 }}>
          <Typography variant="h6" gutterBottom>
            {label} Pinpoint
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Atur lokasi dengan pin. Pastikan lokasi yang Anda tandai di peta sesuai dengan alamat {label.toLowerCase()}.
          </Typography>
          <Autocomplete
            fullWidth
            options={searchOptions}
            loading={loading}
            onInputChange={(event, newInputValue) => {
              handleAddressChange('street', newInputValue);
              handleSearch(newInputValue);
            }}
            onChange={handleAddressSelect}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                placeholder="Jl. Apa ya?"
                variant="outlined"
                margin="normal"
                value={address.street}
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <>
                      {loading ? <CircularProgress color="inherit" size={20} /> : null}
                      {params.InputProps.endAdornment}
                    </>
                  ),
                }}
              />
            )}
          />
          <Map 
            onPinChange={(newCoordinates) => {
              setCoordinates(newCoordinates);
              fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${newCoordinates[0]}&lon=${newCoordinates[1]}`)
                .then(response => response.json())
                .then(data => {
                  if (data.display_name) {
                    handleMapPinChange(data.display_name);
                    setAddress(prev => ({ ...prev, details: data.display_name }));
                  }
                })
                .catch(error => {
                  console.error('Error fetching address');
                });
            }} 
            initialCoordinates={coordinates}
          />
          <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>
            Alamat {label}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {address.details}
          </Typography>
          <TextField
            fullWidth
            placeholder="Warna cat, patokan, dll"
            variant="outlined"
            margin="normal"
            label="Catatan Alamat"
            value={address.notes}
            onChange={(e) => handleAddressChange('notes', e.target.value)}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button variant="outlined" onClick={handleClose}>Batal</Button>
            <Button variant="contained" color="primary" onClick={handleSave}>Simpan</Button>
          </Box>
        </Box>
      </Popover>
    </>
  );
}

export default AddressInput;