import React, { useState, useEffect, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ClearIcon from '@mui/icons-material/Clear';
import InputAdornment from '@mui/material/InputAdornment';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import api from '../utils/api';

function VehicleSelector({ selectedVehicle, onVehicleSelect }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [vehicles, setVehicles] = useState([]);
  const [hoveredBrand, setHoveredBrand] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const anchorRef = useRef(null);

  useEffect(() => {
    const fetchVehicles = async () => {
      setLoading(true);
      try {
        const data = await api.get('/api/vehicle/list');
        
        const groupedVehicles = data.reduce((acc, vehicle) => {
          if (!acc[vehicle.brand]) {
            acc[vehicle.brand] = new Set();
          }
          acc[vehicle.brand].add(vehicle.model);
          return acc;
        }, {});
        
        for (let brand in groupedVehicles) {
          groupedVehicles[brand] = Array.from(groupedVehicles[brand]);
        }
        
        setVehicles(groupedVehicles);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  useEffect(() => {
    if (selectedVehicle) {
      setInputValue(selectedVehicle.model ? `${selectedVehicle.brand} ${selectedVehicle.model}` : selectedVehicle.brand);
    } else {
      setInputValue('');
    }
  }, [selectedVehicle]);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleSelect = (brand, model = null) => {
    onVehicleSelect({ brand, model });
    setInputValue(model ? `${brand} ${model}` : brand);
    setOpen(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    if (event.target.value === '') {
      onVehicleSelect(null);
    }
    setOpen(true);
  };

  const handleClear = () => {
    setInputValue('');
    onVehicleSelect(null);
    setOpen(false);
  };

  const filteredVehicles = Object.entries(vehicles).reduce((acc, [brand, models]) => {
    if (brand.toLowerCase().includes(inputValue.toLowerCase())) {
      acc[brand] = models;
    } else {
      const filteredModels = models.filter(model => 
        `${brand} ${model}`.toLowerCase().includes(inputValue.toLowerCase())
      );
      if (filteredModels.length > 0) {
        acc[brand] = filteredModels;
      }
    }
    return acc;
  }, {});

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        <TextField
          ref={anchorRef}
          onClick={handleToggle}
          onChange={handleInputChange}
          value={inputValue}
          label="Pilih armada (opsional)"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocalShippingIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : inputValue ? (
                  <IconButton
                    aria-label="clear input"
                    onClick={handleClear}
                    edge="end"
                  >
                    <ClearIcon />
                  </IconButton>
                ) : null}
              </InputAdornment>
            ),
          }}
        />
        {open && (
          <Paper style={{ position: 'absolute', zIndex: 1, marginTop: '5px' }}>
            <MenuList>
              {Object.entries(filteredVehicles).map(([brand, models]) => (
                <MenuItem
                  key={brand}
                  onMouseEnter={() => setHoveredBrand(brand)}
                  onMouseLeave={() => setHoveredBrand(null)}
                  onClick={() => handleSelect(brand)}
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <ListItemText primary={brand} />
                  <ArrowRightIcon />
                  {hoveredBrand === brand && (
                    <Paper style={{ position: 'absolute', left: '100%', top: 0 }}>
                      <MenuList>
                        {models.map((model) => (
                          <MenuItem key={model} onClick={(e) => { e.stopPropagation(); handleSelect(brand, model); }}>
                            <ListItemText primary={model} />
                          </MenuItem>
                        ))}
                      </MenuList>
                    </Paper>
                  )}
                </MenuItem>
              ))}
            </MenuList>
          </Paper>
        )}
      </div>
    </ClickAwayListener>
  );
}

export default VehicleSelector;