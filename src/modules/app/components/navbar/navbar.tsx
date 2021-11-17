import React, { useEffect } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import {
  //   NavContainer,
  //   NavTabs,
    NavTab,
  //   NavContainerWrap,
  AppLogo,
  AppName,
} from "./style";
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
import {
  NavContainer,
  // NavTabs,
  // NavTab,
  NavContainerWrap,
  // AppLogo,
  // AppName,
} from "./style";
import { useSelector, useDispatch } from "react-redux";
import { Paths } from "../routes/types";
import history from "../history";
import { Redirect } from "react-router-dom";
import DrawerNav from "./DrawerNav"
import imag from "../../../../assets/icons/mainLogo.png"

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  link: {
    textDecoration:"none",
    color: "white",
    fontSize: "24px",
    fontWeight:"bolder",
    padding:"10px 20px",
    marginTop:"12px",
    border:"2px solid neon",
    "&:hover":{
    background: "#1b2732",
    borderRadius: "8px",
    color:"white"
  }
  },
}));

const Navbar = () => {
  // console.log(props)
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [activeLink, setActiveLink] = React.useState(history.location.pathname);
  const [token, setToken] = React.useState<any>();

  React.useEffect(() => {
    setToken(localStorage.getItem('auth-token'))
    console.log(token)
    const path = history.location.pathname;
    console.log("history.location.pathname", path)
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
    //  setToken(localStorage.getItem('auth-token'))
    //  console.log(token)
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

  const toLogout = () => {
    localStorage.clear()
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
    <NavContainerWrap > 
    <AppBar position="relative" style={{ height: "80px", backgroundColor: "#00D7E7" }}>
      <CssBaseline />
      <Toolbar >
          <div style={{display:"flex",width:"100%",justifyContent:"space-between"}}>
            <div style={{display:"flex"}}>
        <AppLogo src={imag} />
        <Typography variant="h4" >
          <AppName
            onClick={toHomePage}
          >
            RecHelper
          </AppName>
        </Typography>
        </div>
        {isMobile ? (
          <DrawerNav />
          ) : (
            <div className={classes.navlinks} >
              {
                token ?  <Link to="/" onClick={toLogout} className={classes.link}>
                Logout
              </Link>:<Link to="/signin" className={classes.link}>
              SignIn
            </Link>
              }
            
            {/* <NavTab
            className={classes.link}
              isActiveTab={activeLink === "signIn" ? true : false}
              onClick={tosignIn}
              >
            <a>  SignIn</a>
            </NavTab> */}
          </div>
        )}
        </div>
      </Toolbar>
    </AppBar>
    </NavContainerWrap> 
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