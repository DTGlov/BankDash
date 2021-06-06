import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";



function App() {
  return (
      <Router>
        <Route path="/" component={Dashboard} />
      </Router>
  );
}

export default App;
