import React from "react";
import { /* RouteComponentProps */ Redirect, Switch } from "react-router";
import { Router, Route } from "react-router-dom";
import history from "../history";
import { Paths } from "./types";
import { NotFound } from "./NotFound";
import { StyledRoutes, StyledRoutesContainer } from "./style";

import HomePage from "../../../homePage";
import Navbar from "../navbar";
import SignIn from "../../../signIn";
import DashBoard from "../../../dashboard";
import Footer from "../footer";
import Profile from "../../../dashboard/Components/profile";
import JobAlerts from "../../../dashboard/Components/jobAlerts";
import ActionCenter from "../../../dashboard/Components/actionCenter";
import CanSignIn from "../../../signIn/components/canSignIn";
import HrSignIn from "../../../signIn/components/hrSignIn";

// import ReactGA from 'react-ga'

// history.listen(location => {
//   ReactGA.set({ page: location.pathname })
//   ReactGA.pageview(location.pathname)
// })

// console.log(location.pathname ,"location.pathname ")
// console.log("🚀 ~ file: Routes.tsx ~ line 18 ~ history", history)

/* const LazyDocument = lazy(() => import('modules/home')) */

const notFoundRoute: RouteDefinition = {
  path: "*",
  component: NotFound,
  protected: false,
  title: "",
};

export const routes: RouteDefinition[] = [
  {
    path: Paths.root,
    component: HomePage,
    protected: false,
    redirect: Paths.homePage,
    title: "RecHelper",
    pathType: 1,
  },
  {
    path: Paths.homePage,
    component: HomePage,
    protected: false,
    redirect: Paths.homePage,
    title: "RecHelper",
    pathType: 2,
  },
  {
    path: Paths.dashboard,
    component: DashBoard,
    protected: false,
    redirect: Paths.dashboard,
    title: "DashBoard",
    pathType: 3,
  },
  {
    path: Paths.signIn,
    component: SignIn,
    protected: false,
    redirect: Paths.signIn,
    title: "signIn",
    pathType: 4,
  },
  
  {
    path: Paths.canSignIn,
    component: CanSignIn,
    protected: false,
    redirect: Paths.canSignIn,
    title: "canSignIn",
    pathType: 5,
  },
  {
    path: Paths.hrSignIn,
    component: HrSignIn,
    protected: false,
    redirect: Paths.hrSignIn,
    title: "Hr SignIn",
    pathType: 6,
  },
].concat(notFoundRoute as any); // Ensure that notFound is the last route

export interface RouteDefinition {
  path: string;
  protected?: boolean;
  redirect?: string;
  component?: any;
  routes?: RouteDefinition[];
  title?: string;
  pathType?: number;
}

interface Props {
  // userLoaded: boolean
}
interface RoutesProps {}
// interface StateProps {
//   loggedIn: boolean;
//   authLoading: boolean;
//   userInfo: any;
//   isLoaded: boolean;
// }

function getRouteRenderWithAuth(route: RouteDefinition, i: number) {
  return () => <route.component />;
}

const Routes: React.FC<Props & RoutesProps> = () => {
  // const dispatch = useDispatch();

 
  return (
    <StyledRoutesContainer>
      <Router history={history}>
        <Navbar />
        <StyledRoutes>
          <Switch>
            <Redirect exact from="/" to={Paths.homePage} />
            {routes.map((route, i) => {
              const render = getRouteRenderWithAuth(route, i);
              const rest = { render };
              return <Route key={i} path={route.path} exact {...rest} />;
            })}
          </Switch>
        </StyledRoutes>
        <Footer />
      </Router>
    </StyledRoutesContainer>
  );
};

export default Routes;
