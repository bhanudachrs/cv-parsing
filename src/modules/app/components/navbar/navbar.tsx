import React, { useEffect, useState } from "react";
import {
  NavContainer,
  NavTabs,
  NavTab,
  NavContainerWrap,
  AppLogo,
  AppName,
  Item,
} from "./style";
import { useSelector, useDispatch } from "react-redux";
import { Paths } from "../routes/types";
import history from "../history";
import { Redirect } from "react-router-dom";
//@ts-ignore
// import injectTapEventPlugin from "react-tap-event-plugin";
//@ts-ignore
import { DropDownMenu } from 'material-ui';
//@ts-ignore
import MenuItem from 'material-ui/MenuItem';
//@ts-ignore
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import imag from "../../../../assets/icons/mainLogo.png"
const Navbar = () => {

  const [activeLink, setActiveLink] = React.useState(history.location.pathname);
  const [selection, setSelection] = useState(1)

  //console.log("Navbar",walletBalance, walletConnectCheck, userAddress)

  React.useEffect(() => {
    // injectTapEventPlugin()
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
  const handleSelectionChange = (val:any)  => {
    console.log("val", val)
    setSelection(val)
  }
  //@ts-ignore
  const ItemCSS = {
    outline: "none",
    color:"white",
background:"black",
cursor: "pointer",
fontFamily: "sans-serif",
fontStyle: "normal",
fontWeight: "600",
fontSize: "15px",
lineHeight: "15px",
letterSpacing: "0.05em",

  }

  const MenuCSS = {
 background : "transparent",
 border:"none",
 outline:"none"
  }
  return (
    <NavContainerWrap>
       <NavContainer>
      <NavContainer>
          <AppName
              onClick={toHomePage}
            >
              RecHelper
            </AppName>
            {/* <MuiThemeProvider>
          <DropDownMenu 
          value={selection} 
          onChange ={handleSelectionChange}   
          style={{border : "none"}}
         >
          <MenuItem value={1} primaryText="Professionals" style={ItemCSS} />
          <MenuItem value={2} primaryText="Home" style={ItemCSS}   />  
          <MenuItem value={3} primaryText="Locations" style={ItemCSS}  />  
          <MenuItem value={4} primaryText="Professions" style={ItemCSS}  />

        </DropDownMenu>
        </MuiThemeProvider> */}

        <NavTab
            >
              <a>Professionals </a>
            </NavTab>

        <NavTab
            >
              <a>Students and Graduates</a>
            </NavTab>

        <NavTab
            >
              <a>Life at RecHelper</a>
            </NavTab>

        </NavContainer>
        <NavContainer>
        {/* <NavTabs > */}
          <NavTab
              isActiveTab={activeLink === "signIn" ? true : false}
              onClick={tosignIn}
            >
              <a>SignIn</a>
            </NavTab>
        {/* </NavTabs> */}
        
      </NavContainer>
      </NavContainer>
    </NavContainerWrap>
  );
};

export default Navbar;