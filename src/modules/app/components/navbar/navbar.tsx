import React, { useEffect } from "react";
import {
  NavContainer,
  NavTabs,
  NavTab,
  NavContainerWrap,
  AppLogo,
  AppName,
} from "./style";
import { useSelector, useDispatch } from "react-redux";
import { Paths } from "../routes/types";
import history from "../history";
import { Redirect } from "react-router-dom";
// import imag from "../../../../assets/icons/mainLogo.png"
const Navbar = () => {

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
    <NavContainerWrap>
      <NavContainer>
        <div style={{ display: "flex", alignItems: "center" }}
        onClick={toHomePage}
        >
            <AppLogo
              src={require("../../../../assets/icons/mainLogo.png").default}
            />
          <AppName
              onClick={toHomePage}
            >
              RecHelper
            </AppName>
        </div>
        <NavTabs
        >
            <NavTab
              isActiveTab={activeLink === "signIn" ? true : false}
              onClick={tosignIn}
            >
              <a>SignIn</a>
            </NavTab>
        </NavTabs>
        
      </NavContainer>
    </NavContainerWrap>
  );
};

export default Navbar;