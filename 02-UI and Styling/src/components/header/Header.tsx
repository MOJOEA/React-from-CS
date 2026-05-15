import { AppBar, Toolbar, IconButton, Typography, Button, Box } from "@mui/material";
import logoIcon from "../../assets/icon.png"; // เปลี่ยนชื่อตัวแปรให้สื่อถึงไฟล์ภาพ

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box 
            component="img" 
            src={logoIcon} 
            alt="App Logo" 
            sx={{ width: 40, height: 40, objectFit: 'contain' }} 
          />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Game of Thrones
          </Typography>
          <Button color="inherit">HOME</Button>
          <Button color="inherit">STORY</Button>
          <Button color="inherit">GALLERY</Button>
          <Button color="inherit">CHARACTERS</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
