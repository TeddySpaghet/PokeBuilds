import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom'
import './HeaderMenu.scss'

const HeaderMenu = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div id="nav-menu">
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      > {props.currentUser ? (
        <>
          <MenuItem onClick={handleClose}><Link to={'/teams'}>Teams</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link to={'/teams/create'}>Create Team</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link to={'/profile'}>Profile</Link></MenuItem>
          <MenuItem onClick={handleClose}><a href='/logout' onClick={props.logout}>
                    Log Out
                  </a></MenuItem>
                  </>
            ) : (
              <>
                <MenuItem onClick={handleClose}><Link to={'/register'}>Register</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to={'/login'}>Login</Link></MenuItem>
              </>
              )}
      </Menu>
    </div>
  );
}
export default HeaderMenu