import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles
} from "@material-ui/core";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from "@material-ui/icons/Menu";
// @ts-ignore
import { Link } from "react-router-dom";
import { colors } from "../../../../shared/styles/theme";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: `${colors.black}`,
    fontSize: "20px",
    padding: "10px",
    border: "2px solid neon",

    "&:hover": {
      background: `${colors.whiteSmoke}`,
      borderRadius: "4px",
      // color: `${colors.black}`,
    }
  },
  menulink: {
    textDecoration: "none",
    color: `${colors.black}`,
    fontSize: "16px",
    padding: "10px",
    border: "2px solid neon",

    "&:hover": {
      background: `${colors.whiteSmoke}`,
      borderRadius: "4px",
    }
  },
  icon: {
    color: "white"
  },
  menu: {
    width: "auto",
  }
}));

function DrawerComponent() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpenDrawer(false)
  };
  return (
    <div style={{ background: `${colors.black}` }}>
      <Drawer
        anchor={'top'}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>

          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link className={classes.link} to="/">Home</Link>
            </ListItemText>
          </ListItem>

          <ListItem >
            <ListItemText>
              <div>

                <a
                  className={classes.link}
                  id="basic-button"
                  aria-controls="basic-menu"
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  
                >
                  Professionals
                </a>
                <Menu
                  id="basic-menu"
                  className={classes.menu}
                  anchorEl={anchorEl}
                  open={open}
                  // onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={handleClose}><Link className={classes.menulink} to="/">Home</Link></MenuItem>
                  <MenuItem onClick={handleClose}><Link className={classes.menulink}to="/">Locations</Link></MenuItem>
                  <MenuItem onClick={handleClose}><Link className={classes.menulink}to="/">Professions</Link></MenuItem>
                  <MenuItem onClick={handleClose}><Link className={classes.menulink}to="/">US Military & Veterans</Link></MenuItem>
                </Menu>
              </div>
            </ListItemText>
          </ListItem>

          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link className={classes.link} to="/dashboard">Students and Graduates</Link>
            </ListItemText>
          </ListItem>

          <ListItem >
            <ListItemText>
            
              <div>

<a
  className={classes.link}
  id="basic-button"
  aria-controls="basic-menu"
  aria-haspopup="true"
  aria-expanded={open ? 'true' : undefined}
  onClick={handleClick}
>
Life at RecHelper
</a>
<Menu
  id="basic-menu"
  className={classes.menu}
  anchorEl={anchorEl}
  open={open}
  onClose={handleClose}
  MenuListProps={{
    'aria-labelledby': 'basic-button',
  }}
>
  <MenuItem onClick={handleClose}><Link className={classes.menulink} to="/">Benefits</Link></MenuItem>
  <MenuItem onClick={handleClose}><Link className={classes.menulink}to="/">Culture</Link></MenuItem>
  <MenuItem onClick={handleClose}><Link className={classes.menulink}to="/">Diversity and inculsion</Link></MenuItem>
  <MenuItem onClick={handleClose}><Link className={classes.menulink}to="/">RecHelper Life</Link></MenuItem>
</Menu>
</div>
            </ListItemText>
          </ListItem>

          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link className={classes.link} to="/dashboard">Dashboard</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link className={classes.link} to="/Signin">Signin</Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton style={{ marginTop: "10px", color: `${colors.whiteSmoke}` }} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </div>
  );
}
export default DrawerComponent;