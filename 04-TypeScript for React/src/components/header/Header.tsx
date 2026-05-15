import { AppBar, Toolbar, IconButton, Typography, Button, Box} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Outlet } from "react-router-dom"; 

function Header() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: "#505050" }} >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ 
              flexGrow: 1,
              fontWeight: "bold",
              color: "#f5c518",
              letterSpacing: 1,}}>
                IMDB
            </Typography>
            <Button color="inherit" sx={{ color: "#fff" }}>HOME</Button>
            <Button color="inherit" sx={{ color: "#fff" }}>STORY</Button>
            <Button color="inherit" sx={{ color: "#fff" }}>GALLERY</Button>
            <Button color="inherit" sx={{ color: "#fff" }}>CHARACTERS</Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Box sx={{ }}>
        <Outlet />
      </Box>
    </>
  );
}

export default Header;
