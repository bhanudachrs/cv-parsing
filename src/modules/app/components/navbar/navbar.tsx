import React, { useEffect } from "react";
import {
  NavContainer,
  NavTabs,
  NavTab,
  NavContainerWrap,
} from "./style";
import { useSelector, useDispatch } from "react-redux";
import { Paths } from "../routes/types";
import history from "../history";
import { Redirect } from "react-router-dom";

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
      if (path === "/swap") {
        setActiveLink("swap");
      }
    });
  }, [history]);
  const toHomePage = () => {
    history.push(Paths.homePage);
    setActiveLink("swap");
  };

  const toDashboard = () => {
    history.push(Paths.dashboard);
    setActiveLink("pool");
  };

  const tosignIn = () => {
    history.push(Paths.signIn);
    setActiveLink("farming");
  };

  const path = window.location.pathname
  // //console.log(activeLink,"path",path.slice(1,path.length))

  useEffect(() => {
    //console.log("setActiveLink")
    const newPath = path.slice(1,path.length)
    if(activeLink !== newPath) {
      // //console.log("newPath",newPath)
      if(newPath === "add-liquidity") {
        setActiveLink("pool")
      } else if(newPath === "farmDetails") {
       setActiveLink("farming") 
      } else {
      setActiveLink(newPath)
    }
    }
  }, [path])

  return (
    <NavContainerWrap>
      {/* {console.log("view port of navbar")} */}
      <NavContainer>
        {/* <NavWrap> */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <a href="https://www.busta.gg/" target="_blank">
            {/* <AppLogo
              src={require("../../../../assets/image/logo.svg").default}
            /> */}
          </a>
        </div>
        <NavTabs
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              display: "flex",
              borderRadius: "4px",
              padding: "4px",
            }}
          >
            <NavTab
              isActiveTab={
                activeLink === "homePage" || activeLink === "" ? true : false
              }
              onClick={toHomePage}
              // disabled={true}
              // style={{
              //   background: "#1b2732",
              //   opacity: "0.5",
              //   cursor: "inherit",
              // }}
            >
              <a>RecHelper </a>
              {/* <BetaTag> coming soon </BetaTag>  */}
            </NavTab>

            <NavTab
              isActiveTab={activeLink === "signIn" ? true : false}
              onClick={tosignIn}
            >
              <a>SignIn</a>
            </NavTab>
          </div>
        </NavTabs>
        
      </NavContainer>
    </NavContainerWrap>
  );
};

export default Navbar;