import React from 'react';

import { AppBar, Typography, Container, Toolbar } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';

const Header = () => {
  return (
    <AppBar
      sx={{
        backgroundColor: '#121212',
        borderRadius: 15,
      }}
      position="static"
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <LinkIcon
            sx={{
              fontSize: 'xxx-large',
              display: { xs: 'none', md: 'flex' },
              mr: 1,
            }}
          />
          <Typography
            variant="h2"
            component="a"
            href="/"
            sx={{
              flex: '3 1 auto',
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 400,
              fontSize: { xs: '2rem', md: '3.75rem' },
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Shortly
          </Typography>
          <Typography
            variant="h6"
            component="h6"
            sx={{
              fontSize: { xs: '1rem', md: '1.25rem' },
            }}
          >
            Shorten Your URL
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
