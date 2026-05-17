import { AppBar, Toolbar, IconButton, Typography, Button, Box} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Outlet } from "react-router-dom"; 
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: "#2f2f2f" }} >
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
              color: "#00d397",
              letterSpacing: 1,}}>
                Home
            </Typography>
            <Button color="inherit" sx={{ color: "#fff" }} component={Link} to="/test1">
              TEST01
            </Button>
            <Button color="inherit" sx={{ color: "#fff" }} component={Link} to="/test2">
              TEST02
            </Button>
            <Button color="inherit" sx={{ color: "#fff" }} component={Link} to="/test3">
              TEST03
            </Button>
            <Button color="inherit" sx={{ color: "#fff" }} component={Link} to="/test4">
              TEST04
            </Button>
            <Button color="inherit" sx={{ color: "#fff" }} component={Link} to="/test5">
              TEST05
            </Button>
            <Button color="inherit" sx={{ color: "#fff" }} component={Link} to="/test6">
              TEST06
            </Button>
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
