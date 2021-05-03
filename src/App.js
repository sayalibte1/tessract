import logo from './logo.svg';
import Menu from "./component/menu/index";
import Routes from "./component/Routes";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <>
     <Router>
        <Menu />
        <Routes />
      </Router>
    </>
  );
}

export default App;
