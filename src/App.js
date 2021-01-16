import React from "react";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import Layout from "./components/layout";
import MainPage from "./containers/mainPageContainer";
import DetailPage from "./containers/detailPageContainer";
import MyTokomonPage from "./containers/myTokomonPageContainer";
import history from "./middlewares/history";

const App = (props) => {
  return (
    <ConnectedRouter history={history}>
      <Layout>
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
      </Layout>
    </ConnectedRouter>
  );
};

export default App;
