// app/layout.js
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { purple, grey } from '@mui/material/colors';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[400],
    },
    background: {
      default: 'linear-gradient(to bottom right, #e8dbfc, #f3e8fd)',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export const metadata = {
  title: 'Scribble Blog',
  description: 'Where creativity meets technology.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ background: theme.palette.background.default, minHeight: '100vh' }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: `1px solid ${grey[300]}` }}>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link href="/" style={{ textDecoration: 'none', color: purple[500] }}>scribble</Link>
              </Typography>
              <Button color="inherit" href="/">Home</Button>
              <Button color="inherit" href="/blog">Blog</Button>
              <Button color="inherit" href="/categories">Categories</Button>
              <Button color="inherit" href="/about">About</Button>
            </Toolbar>
          </AppBar>
          <Container maxWidth="lg" sx={{ py: 4 }}>
            {children}
          </Container>
          {/* Bubbly background elements */}
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            overflow: 'hidden',
            zIndex: -1,
          }}>
            <div style={{ position: 'absolute', top: '10%', left: '5%', width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255,255,255,0.5)' }}></div>
            <div style={{ position: 'absolute', top: '30%', right: '10%', width: '30px', height: '30px', borderRadius: '50%', background: 'rgba(255,255,255,0.5)' }}></div>
            {/* Add more bubbles as needed */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}