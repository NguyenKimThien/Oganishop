import React, { useState } from 'react';
import { Slider, TextField, Box, Typography } from '@mui/material';

const PriceRangeSlider = ({ onChangeRange }) => {
  const [value, setValue] = useState([0, 1000]);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    onChangeRange(newValue);
  };

  return (
    <Box width={300} p={2}>
      <Slider
        sx={{ color: 'red', mb: 1 }}
        value={value}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        min={0}
        max={1000}
      />
      <Box display="flex" justifyContent="space-between" mt={2}>
        <TextField
          label="Min"
          value={`$${value[0]}`}
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
          size="small"
        />
        <TextField
          label="Max"
          value={`$${value[1]}`}
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
          size="small"
        />
      </Box>
    </Box>
  );
};

export default PriceRangeSlider;
