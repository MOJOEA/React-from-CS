import { AppBar, Toolbar, IconButton, Typography, Button, Box} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Outlet } from "react-router-dom"; 

function Header() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
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

      <Box sx={{ }}>
        <Outlet />
      </Box>
    </>
  );
}

export default Header;
