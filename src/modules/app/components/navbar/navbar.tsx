import React, { useEffect } from "react";
import MenuIcon from "@material-ui/icons/Menu";
// import {
//   NavContainer,
//   NavTabs,
//   NavTab,
//   NavContainerWrap,
//   AppLogo,
//   AppName,
// } from "./style";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  useTheme,
  useMediaQuery
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Paths } from "../routes/types";
import history from "../history";
import { Redirect } from "react-router-dom";
import DrawerNav from "./DrawerNav";
// import imag from "../../../../assets/icons/mainLogo.png"

const useStyles = makeStyles((theme)=>({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
  icon:{
      color: "white"
  }
}));

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [activeLink, setActiveLink] = React.useState(history.location.pathname);

  //console.log("Navbar",walletBalance, walletConnectCheck, userAddress)

  React.useEffect(() => {
    
    const path = history.location.pathname;
    console.log("history.location.pathname" , path)
    if (path === "/homePage") {
      setActiveLink("homePage");
    } else if (path === "/signIn") {
      setActiveLink("signIn");
    } else if (path === "/dashboard") {
      setActiveLink("dashboard");
    } else if (history.location.search === "") {
      history.push(history.location.pathname);
    }
  }, []);

  React.useEffect(() => {
    //console.log("history")
    return history.listen((location) => {
      // //console.log(`You changed the page to: ${location.pathname}`);
      const path = history.location.pathname;
      if (path === "/homePage") {
        setActiveLink("homePage");
      }
    });
  }, [history]);
  const toHomePage = () => {
    history.push(Paths.homePage);
    setActiveLink("homePage");
  };

  const toDashboard = () => {
    history.push(Paths.dashboard);
    setActiveLink("dashboard");
  };

  const tosignIn = () => {
    history.push(Paths.signIn);
    setActiveLink("signIn");
  };

  const path = window.location.pathname
  // //console.log(activeLink,"path",path.slice(1,path.length))

  // useEffect(() => {
  //   //console.log("setActiveLink")
  //   const newPath = path.slice(1,path.length)
  //   if(activeLink !== newPath) {
  //     // //console.log("newPath",newPath)
  //     if(newPath === "add-liquidity") {
  //       setActiveLink("pool")
  //     } else if(newPath === "farmDetails") {
  //      setActiveLink("farming") 
  //     } else {
  //     setActiveLink(newPath)
  //   }
  //   }
  // }, [path])

  return (
    <AppBar position="static">
    <CssBaseline />
    <Toolbar>
      <Typography variant="h4" >
      </Typography>
      {isMobile ? (
        <DrawerNav />
      ) : (
        <div className={classes.navlinks}>
          <Link to="/" className={classes.link}>
            Home
          </Link>
          <Link to="/about" className={classes.link}>
            About
          </Link>
          <Link to="/contact" className={classes.link}>
            Contact
          </Link>
          <Link to="/faq" className={classes.link}>
            FAQ
          </Link>
        </div>
      )}
    </Toolbar>
  </AppBar>
  //  <NavContainerWrap> 
  //     <NavContainer>
  //       <div style={{ display: "flex", alignItems: "center" }}
  //       onClick={toHomePage}
  //       >
  //           <AppLogo
  //             src={require("../../../../assets/icons/mainLogo.png").default}
  //           />
  //         <AppName
  //             onClick={toHomePage}
  //           >
  //             RecHelper
  //           </AppName>
  //       </div>
  //       <NavTabs
  //       >
  //           <NavTab
  //             isActiveTab={activeLink === "signIn" ? true : false}
  //             onClick={tosignIn}
  //           >
  //             <a>SignIn</a>
  //           </NavTab>
        
  //       </NavTabs>
        
  //     </NavContainer> 
   
  //    </NavContainerWrap> 
  );
};

export default Navbar;