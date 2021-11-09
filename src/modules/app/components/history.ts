// import { createBrowserHistory } from 'history'
// export default createBrowserHistory()

import { createBrowserHistory } from "history";
import ReactGA from "react-ga";

ReactGA.initialize("UA-194718103-1");

const history = createBrowserHistory();

history.listen((location) => {
    const loc = location.pathname;
    const query = location.search;
    let queryStr = query.replace("?", "");

  const str = loc + '?' + queryStr;

  let strNew = str.replace("=", "");
  // console.log("🚀 ~ file: history.ts ~ line 14 ~ history.listen ~ strNew", queryStr)
  ReactGA.pageview(strNew);
});
// workaround for initial visit
if (
  window.performance &&
  performance.navigation.type === performance.navigation.TYPE_NAVIGATE
) {
  ReactGA.pageview("/");
}

export default history;
