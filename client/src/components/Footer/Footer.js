import React from 'react';

import { Typography, Grid, Link } from '@mui/material';

const Footer = () => {
  return (
    <footer>
      <Grid container maxWidth="lg" sx={{ marginBottom: '1rem' }}>
        <Grid item xs={12} sx={{ textAlign: 'center' }}>
          <Typography
            variant="h2"
            noWrap
            color={'#fff'}
            sx={{
              textAlign: 'center',
              fontFamily: 'monospace',
              fontWeight: 400,
              fontSize: { xs: '2rem', md: '3.75rem' },
              textDecoration: 'none',
            }}
          >
            Shortly
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            component="h6"
            sx={{
              textAlign: 'center',
              fontSize: { xs: '1rem', md: '1.25rem' },
            }}
          >
            Made By{' '}
            <Link href="https://github.com/ahmed-saied-soliman">
              Ahmed Saied
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
