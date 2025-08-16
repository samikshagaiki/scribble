// components/CommentForm.js
"use client";

import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export default function CommentForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(name, message); // Call the function, don't pass it
    }
    setName('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField fullWidth label="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth multiline rows={4} label="Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">Submit Comment</Button>
        </Grid>
      </Grid>
    </form>
  );
}