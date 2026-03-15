import { Switch, Route, Router as WouterRouter } from "wouter";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import GridPage from "./pages/GridPage";
import TypographyPage from "./pages/TypographyPage";
import ButtonsPage from "./pages/ButtonsPage";
import FormsPage from "./pages/FormsPage";
import NavigationPage from "./pages/NavigationPage";
import AlertsPage from "./pages/AlertsPage";
import TablesPage from "./pages/TablesPage";
import HelpersPage from "./pages/HelpersPage";
import ThemingPage from "./pages/ThemingPage";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/grid" component={GridPage} />
        <Route path="/typography" component={TypographyPage} />
        <Route path="/buttons" component={ButtonsPage} />
        <Route path="/forms" component={FormsPage} />
        <Route path="/navigation" component={NavigationPage} />
        <Route path="/alerts" component={AlertsPage} />
        <Route path="/tables" component={TablesPage} />
        <Route path="/helpers" component={HelpersPage} />
        <Route path="/theming" component={ThemingPage} />
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
