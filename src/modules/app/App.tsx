import React,{useEffect} from "react";
// import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "../../shared/styles/theme";
import Routes from "./components/routes/Routes";

const App = (props: any) => {

  return (
    <>

        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Routes />
        </ThemeProvider>
    </>
  );
};

export default App;
