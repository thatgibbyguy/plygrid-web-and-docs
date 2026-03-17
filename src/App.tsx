import { Switch, Route, Router as WouterRouter } from "wouter";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import InstallationPage from "./pages/InstallationPage";
import SemanticHtmlPage from "./pages/SemanticHtmlPage";
import ColorsPage from "./pages/ColorsPage";
import TypographyPage from "./pages/TypographyPage";
import GridPage from "./pages/GridPage";
import ButtonsPage from "./pages/ButtonsPage";
import FormsPage from "./pages/FormsPage";
import NavigationPage from "./pages/NavigationPage";
import TablesPage from "./pages/TablesPage";
import AlertsPage from "./pages/AlertsPage";
import UtilitiesPage from "./pages/UtilitiesPage";
import AccessibilityPage from "./pages/AccessibilityPage";
import AIAgentsPage from "./pages/AIAgentsPage";
import CompliancePage from "./pages/CompliancePage";
import VpatPage from "./pages/VpatPage";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/docs/installation" component={InstallationPage} />
        <Route path="/docs/semantic-html" component={SemanticHtmlPage} />
        <Route path="/docs/colors" component={ColorsPage} />
        <Route path="/docs/typography" component={TypographyPage} />
        <Route path="/docs/grid" component={GridPage} />
        <Route path="/docs/buttons" component={ButtonsPage} />
        <Route path="/docs/forms" component={FormsPage} />
        <Route path="/docs/navigation" component={NavigationPage} />
        <Route path="/docs/tables" component={TablesPage} />
        <Route path="/docs/alerts" component={AlertsPage} />
        <Route path="/docs/utilities" component={UtilitiesPage} />
        <Route path="/docs/accessibility" component={AccessibilityPage} />
        <Route path="/docs/ai-agents" component={AIAgentsPage} />
        <Route path="/docs/compliance" component={CompliancePage} />
        <Route path="/docs/vpat" component={VpatPage} />
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
