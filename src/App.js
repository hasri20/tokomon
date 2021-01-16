import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import history from "./middlewares/history";
import Layout from "./components/layout";
const MainPage = lazy(() => import("./containers/mainPageContainer"));
const DetailPage = lazy(() => import("./containers/detailPageContainer"));
const MyTokomonPage = lazy(() => import("./containers/myTokomonPageContainer"));

const App = (props) => {
  return (
    <ConnectedRouter history={history}>
      <Layout>
        <Suspense fallback={<div></div>}>
          <Switch>
            <Route path="/tokomon/:name">
              <DetailPage />
            </Route>
            <Route path="/tokomon">
              <MainPage />
            </Route>
            <Route path="/my-tokomon">
              <MyTokomonPage />
            </Route>
            <Route path="/">
              <MainPage />
            </Route>
          </Switch>
        </Suspense>
      </Layout>
    </ConnectedRouter>
  );
};

export default App;
