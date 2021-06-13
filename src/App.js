import { Route, Switch, BrowserRouter } from "react-router-dom";
import HomePage from "./components/layout/pages/HomePage";
import SearchPage from "./components/layout/pages/SearchPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/search" component={SearchPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
