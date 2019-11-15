import React from 'react';
import TextField from '@material-ui/core/TextField';

function Input({ label, type, name, onChange, value }) {
  return (
    <div>
      <label>
        <TextField
          style={{ marginBottom: 15 }}
          fullWidth
          label={label}
          type={type}
          value={value}
          onChange={e => onChange(e, name)}
        />
      </label>
    </div>
  );
}

export default Input;
