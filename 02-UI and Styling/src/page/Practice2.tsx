import * as React from 'react';
import { useState } from 'react';

import { Box, Container, TextField, Button, Typography, Divider, Switch, FormControlLabel } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import posterImage1 from "../assets/Poster.png"; 


export default function Practice2() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const handleToggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };
  const dynamicTheme = createTheme({
    palette: {
      mode: mode, 
      background: {
        default: mode === 'dark' ? '#121212' : '#ffffff',
        paper: mode === 'dark' ? '#1e1e1e' : '#fcfcfc',
      },
    },
  });
  return (
    <ThemeProvider theme={dynamicTheme}>
      <CssBaseline />
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', width: '100%', pt: 1, pb: 4 }}>
        <Container maxWidth="md" sx={{ px: { xs: 2, sm: 2 } }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
            <FormControlLabel
              control={
                <Switch 
                  checked={mode === 'dark'} 
                  onChange={handleToggleMode} 
                  color="primary"
                />
              }
              label={mode === 'dark' ? "Dark Mode" : "Light Mode"}
              sx={{ color: 'text.primary' }}
            />
          </Box>
          

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mb: 2, mt: 1 }}>
            <Box 
              component="img"
              src={posterImage1}
              alt="Daenerys Character"
              sx={{
                width: 320,
                height: 180,
                objectFit: 'cover',
                flexShrink: 0
              }}
            />
            <Box sx={{ pl: { xs: 0, sm: 3 }, pt: { xs: 2, sm: 0 }, flex: 1 }}>
              <Typography variant="h4" sx={{ fontFamily: 'Arial, sans-serif', fontWeight: 400, color: 'text.secondary', fontSize: '1.5rem', mb: 2}}>
                  Daenerys Targaryen
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="h4" sx={{ fontFamily: 'Arial, sans-serif', fontWeight: 400, color: 'text.primary', mb: 1, fontSize: '1.8rem' }}>
                Character
              </Typography>
              <Typography sx={{ fontFamily: 'Arial, sans-serif', fontSize: '0.7rem', color: 'text.primary', lineHeight: 1.5, textAlign: 'justify' }}>
                Daenerys Targaryen is the daughter of King Aerys II Targaryen (also referred to as "The Mad King") and his sister-wife Queen Rhaella, and is one of the last survivors of House Targaryen. She serves as the third-person point-of-view character of 31 chapters of A Game of Thrones, A Clash of Kings, A Storm of Swords, and A Dance with Dragons. This makes her the series' fourth most prominent narrative voice after Tyrion Lannister, Jon Snow and Arya Stark.
              </Typography>
            </Box>
          </Box>


          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mb: 4 }}>
            <Box 
              component="iframe"
              src="https://www.youtube.com/embed/bjqEWgDVPe0?si=mDz6AhP6qWB7h32h" title="YouTube video player" frameborder="0" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              sx={{
                  width: 380,
                  height: 180,
                  border: 0, 
                  flexShrink: 0
              }}
            />
            <Box sx={{ pl: { xs: 0, sm: 3 }, pt: { xs: 2, sm: 0 }, flex: 1 }}>
              <Typography variant="h5" sx={{ fontFamily: 'Arial, sans-serif', fontWeight: 400, color: 'text.secondary', mb: 1, fontSize: '1.4rem' }}>
                Personality
              </Typography>
              <Typography sx={{ fontFamily: 'Arial, sans-serif', fontSize: '0.7rem', color: 'text.primary', lineHeight: 1.5, textAlign: 'justify' }}>
                Daenerys is most often described as uncommonly beautiful, with long, pale silver-gold hair and purple eyes. She is slender and pale, although taller than some of her female ancestors. Tales of Daenerys's beauty are numerous, and throughout the novels she encounters countless suitors who seek her hand in marriage, sometimes to gain control of her three dragons. She is fluent in the Common Tongue of Westeros, Dothraki, High Valyrian and bastard Valyrian, which she speaks with a Tyroshi accent. Over the course of the first three novels she becomes fluent in the Dothraki language and Ghiscari, spoken in the slave cities in Essos.
              </Typography>
            </Box>
          </Box>


          <Divider sx={{ mb: 3, mt: 5 }}/>


          <Box sx={{ width: '100%' }}>
            <Typography sx={{ fontFamily: 'Arial, sans-serif', fontSize: '0.85rem', color: 'text.primary', mb: 1 }}>
              Comment
            </Typography>
            
            <TextField
              fullWidth
              multiline
              rows={4}
              placeholder="What do you feel about this?"
              variant="outlined"
              sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '2px',
                    backgroundColor: 'background.paper', // กล่องข้อความใช้สี paper เพื่อให้ตัดกับพื้นหลังเว็บบล็อก
                  },
                  '& .MuiInputBase-input::placeholder': {
                    color: 'text.disabled', // สีตัวอักษรจางลงในโหมดมืดเพื่อความสบายตา
                    opacity: 1,
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '0.85rem'
                  }
              }}
            />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1.5 }}>
              <Box sx={{ display: 'flex', gap: 0.3, color: 'text.disabled' }}>
                { Array.from({ length: 5 }, (_, i) => <FavoriteBorderIcon key={i} sx={{ fontSize: '1.2rem' }} /> )}
              </Box>
              <Button variant="contained" color="primary" size="small" sx={{ px: 4 }}>
                  SEND
              </Button>
            </Box>
          </Box>

        </Container>
      </Box>
    </ThemeProvider>
  );
}
