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
import { colors } from "../../../../shared/styles/theme";

const useStyles = makeStyles(()=>({
    link:{
        textDecoration:"none",
        color: `${colors.black}`,
        fontSize: "20px",
        padding:"10px",
        border:"2px solid neon",

        "&:hover":{
        background: `${colors.whiteSmoke}`,
        borderRadius: "4px",
        // color: `${colors.black}`,
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
    <div style={{background:`${colors.black}`}}>
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
              <Link className={classes.link} to="/dashboard">Professionals</Link>
            </ListItemText>
          </ListItem>

          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link className={classes.link} to="/dashboard">Students and Graduates</Link>
            </ListItemText>
          </ListItem>

          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link className={classes.link} to="/dashboard">Life at RecHelper</Link>
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
      <IconButton style={{marginTop:"10px", color:`${colors.whiteSmoke}`}} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </div>
  );
}
export default DrawerComponent;