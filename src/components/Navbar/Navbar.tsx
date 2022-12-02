import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
export interface NavbarInterface {}

const Navbar : React.FC<NavbarInterface> = () => {
	return <div>
		<AppBar position="fixed">
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
            JulianDev
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
	</div>;
};

export default Navbar;
