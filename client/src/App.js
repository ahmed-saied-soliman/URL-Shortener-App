import React from 'react';

import { Container } from '@mui/material';

import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: 'flex',
        minHeight: '100vh;',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Header></Header>
      <Form></Form>
      <Footer></Footer>
    </Container>
  );
};

export default App;
