import { Switch, Route, Router as WouterRouter } from "wouter";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import GridPage from "./pages/GridPage";
import TypographyPage from "./pages/TypographyPage";
import ControlsPage from "./pages/ControlsPage";
import NavigationPage from "./pages/NavigationPage";
import TablesPage from "./pages/TablesPage";
import UtilitiesPage from "./pages/UtilitiesPage";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/grid" component={GridPage} />
        <Route path="/typography" component={TypographyPage} />
        <Route path="/controls" component={ControlsPage} />
        <Route path="/navigation" component={NavigationPage} />
        <Route path="/tables" component={TablesPage} />
        <Route path="/utilities" component={UtilitiesPage} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
    </WouterRouter>
  );
}

export default App;
