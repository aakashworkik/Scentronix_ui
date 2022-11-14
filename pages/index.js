import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../components/common/Link';

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome !
          For Recipe page, click <a href="/recipe/whole-grain-banana-bread">Recipe</a>
        </Typography>
      </Box>
    </Container>
  );
}
