import { Box, Container, Card, CardHeader, CardContent, CardActions, TextField, Button, Typography } from "@mui/material";

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PasswordOutlinedIcon from '@mui/icons-material/PasswordOutlined';

function App() {
  return (
    <>
      <Box
        sx={{
          background: '#ffffff',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pt: '64px' 
        }}
      >
        <Container maxWidth="sm">
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"} boxShadow={10}
            sx={{
              background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
              borderRadius: 4,
              p: 5
            }}
          >
            
            {/* ปรับสไตล์การ์ด: เพิ่มความโค้งมนเป็น 16px, เอาเส้นขอบออก, เพิ่มมิติเงาให้นุ่มนวลขึ้น */}
            <Card 
              sx={{ 
                width: '100%',
                maxWidth: 420, 
                p: 3, 
                borderRadius: 4, 
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.08)',
                border: 'none',
                bgcolor: 'background.paper'
              }}
            >
              {/* ปรับแต่งส่วนหัวของการ์ดให้ดูทันสมัย */}
              <CardHeader 
                title={
                  <Typography variant="h5" fontWeight="700" textAlign="center" color="text.primary">
                    Welcome Back
                  </Typography>
                }
                subheader={
                  <Typography variant="body2" textAlign="center" color="text.secondary" sx={{ mt: 0.5 }}>
                    Please enter your details to sign in.
                  </Typography>
                }
              />
              
              <CardContent sx={{ px: 1, py: 2 }}>
                {/* แถวช่องกรอก Email */}
                <Box display="flex" alignItems="center" gap={2} mb={3}>
                  <EmailOutlinedIcon sx={{ color: 'primary.main', fontSize: 24 }} />
                  <TextField
                    id="email-basic"
                    label="Email Address"
                    variant="outlined"
                    size="medium"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    placeholder="example@mail.com"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2, // ปรับช่องกรอกให้โค้งมนรับกับการ์ด
                      }
                    }}
                  />
                </Box>

                {/* แถวช่องกรอก Password */}
                <Box display="flex" alignItems="center" gap={2}>
                  <PasswordOutlinedIcon sx={{ color: 'primary.main', fontSize: 24 }} />
                  <TextField
                    id="password-basic"
                    label="Password"
                    variant="outlined"
                    size="medium"
                    fullWidth
                    type="password"
                    InputLabelProps={{ shrink: true }}
                    placeholder="••••••••"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                      }
                    }}
                  />
                </Box>
              </CardContent>

              {/* ปรับแต่งส่วนปุ่มกดด้านล่างให้ใหญ่เด่นชัดขึ้น */}
              <CardActions sx={{ flexDirection: 'column', gap: 1.5, mt: 1, px: 1 }}>
                <Button 
                  variant="contained" 
                  size="large" 
                  fullWidth
                  sx={{ 
                    borderRadius: 2, 
                    py: 1.2,
                    fontWeight: 'bold',
                    boxShadow: '0px 4px 12px rgba(25, 118, 210, 0.2)',
                    textTransform: 'none' // ปิดตัวพิมพ์ใหญ่ทั้งหมดเพื่อให้ดูทันสมัย
                  }}
                >
                  Sign In
                </Button>
                
                <Button 
                  variant="text" 
                  size="small"
                  sx={{ textTransform: 'none', color: 'text.secondary' }}
                >
                  Forgot Password?
                </Button>
              </CardActions>
            </Card>

          </Box>
        </Container>
      </Box>
    </>
  );
}

export default App;
