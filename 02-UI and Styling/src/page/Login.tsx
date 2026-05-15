import { Box, Container, Card, CardHeader, CardContent, CardActions, TextField, Button, Typography } from "@mui/material";

import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';

export default function Login() {
  return (
    <>
      <Box
          sx={{
            background: '#b5b5b5',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pt: '64px' 
          }}
        >
          <Card sx={{ maxWidth: 450, width: '100%', boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.1)'}}>
            <CardHeader 
              title={
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  color: '#333',
                }}>
                  <EnhancedEncryptionIcon sx={{ mr: 1 }} />
                  Login to My System
                </Box>
              } />
              <CardContent>
                <Box display="flex" alignItems="center">
                  <Typography variant="body1" color="text.secondary" sx={{
                    mb: 2,
                    color: '#555',
                    fontSize: '1rem'
                  }}>
                    Please enter username and password
                  </Typography>
                  <TextField fullWidth label="Email" type="email" variant="outlined" size="medium" />
                  <TextField fullWidth label="Password" type="password" variant="outlined" size="medium" margin="normal" />
                </Box>
              </CardContent>
              <CardActions>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', p: 1 }}>
                  <Button variant="outlined" color="primary" size="large" sx={{ px: 4 }}>
                    SIGN UP
                  </Button>
                  <Button variant="contained" color="primary" size="large" sx={{ px: 4 }}>
                    LOGIN
                  </Button>
                </Box>
              </CardActions>
          </Card>
        </Box>
    </>
  );
}
