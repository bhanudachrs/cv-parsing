import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
 makeStyles
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const useStyles = makeStyles(()=>({
    link:{
        textDecoration:"none",
        color: "#00D7E7",
        fontSize: "20px",
        padding:"10px",
        border:"2px solid neon",
        "&:hover":{
        background: "#1b2732",
        borderRadius: "4px",
        color:"white"
      }
    },
    icon:{
        color: "white"
    }
}));

function DrawerComponent() {
const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const drawerWidth = 240;
  return (
    <>
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
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link className={classes.link} to="/Signin">Signin</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link className={classes.link} to="/about">Dashboard</Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton style={{marginTop:"8px"}} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;