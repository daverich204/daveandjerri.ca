import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import Link from '../src/Link';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Welcome to Dave and Jerri's Wedding
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            October 8th, 2023 @ <Link href={"https://nivervilleeventcentre.com/"} target={"_blank"}>Niverville Heritage Centre</Link>
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Link href="/rsvp">
              <Button variant="contained">RSVP</Button>
            </Link>

            <Button variant="outlined">Watch Live</Button>
          </Stack>
        </Container>
      </Box>
    </Container>
  );
}