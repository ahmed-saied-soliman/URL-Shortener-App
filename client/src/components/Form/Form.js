import React, { useState } from 'react';
import axios from 'axios';

import {
  Button,
  TextField,
  Grid,
  Alert,
  AlertTitle,
  Snackbar,
  Link,
} from '@mui/material';

const Form = () => {
  const baseURL = 'https://shortly-task.herokuapp.com/';
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState({ status: '', data: '' });
  const [url, setUrl] = useState('');

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleChange = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (url !== '') {
      const URL = { url: url };
      try {
        axios
          .post(baseURL, { URL })
          .then((res) => {
            if (res.status === 200 || res.status === 201) {
              setStatus({ status: 'Successful', data: res.data });
              setOpen(true);
            }
            console.log(res.status);
            console.log(res.data);
          })
          .catch(function (error) {
            if (error.response.status) {
              setStatus({ status: 'Failed', data: '' });
              setOpen(true);
            }
            console.log(error.response.status);
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        alignItems="center"
        justifyContent={'space-evenly'}
        direction="row"
      >
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="URL"
            variant="outlined"
            sx={{ width: '100%' }}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={3}>
          <Button variant="outlined" type="submit">
            Shortly
          </Button>
          <Snackbar open={open} onClose={handleClose}>
            {status.status === 'Successful' ? (
              <Alert severity="success" onClose={handleClose}>
                <AlertTitle>{status.status}</AlertTitle>
                This is a {status.status} operation —{' '}
                <strong>
                  <Link href={baseURL + status.data}>
                    {baseURL + status.data}
                  </Link>
                </strong>
              </Alert>
            ) : (
              <Alert severity="error" onClose={handleClose}>
                <AlertTitle>{status.status}</AlertTitle>
                This is a {status.status} operation
              </Alert>
            )}
          </Snackbar>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;
