// app/page.js
'use client';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { purple } from '@mui/material/colors';
import EditIcon from '@mui/icons-material/Edit'; // Pencil icon

export default function Home() {
  return (
    <Grid container spacing={4} direction="column" alignItems="center" justifyContent="center" sx={{ textAlign: 'center', py: 8 }}>
      <Grid item>
        <EditIcon sx={{ fontSize: 60, color: purple[500], transform: 'rotate(-45deg)' }} />
      </Grid>
      <Grid item>
        <Typography variant="h2" sx={{ color: purple[500] }}>Welcome to scribble</Typography>
        <Typography variant="h6" sx={{ color: grey[600], maxWidth: '600px', mx: 'auto' }}>
          Where creativity meets technology. Discover stories, insights, and ideas that inspire innovation and spark imagination.
        </Typography>
      </Grid>
      <Grid item container spacing={2} justifyContent="center">
        <Grid item>
          <Button variant="contained" color="primary" href="/blog">Explore All Posts →</Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="primary" href="/categories">Browse Categories</Button>
        </Grid>
      </Grid>
      <Grid item container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
        <Grid item>
          <Typography variant="body1" sx={{ color: purple[500] }}>📝 3 Articles</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" sx={{ color: purple[500] }}>👥 10k+ Readers</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" sx={{ color: purple[500] }}>🌱 Growing Community</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}