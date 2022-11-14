import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../config/ProTip';
import Link from '../components/common/Link';

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
      </Box>
    </Container>
  );
}
