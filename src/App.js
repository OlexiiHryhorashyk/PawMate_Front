import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./routes/Routes";
import Toolbar from "./components/toolbar/toolbar";

const App = () => {
  return (
      <>
      <Toolbar/>
      <Router>
        <Routes/>
      </Router>
      </>
  )
}

export default App;
