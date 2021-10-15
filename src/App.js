import './style/sass/m_pack.scss';
import { GlobalProvider } from "./context/Provider";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import PageRoutes from './components/Routes';

function App(props) {
  console.log(props)
  return (
    <GlobalProvider>
      <Router>
       <PageRoutes/>
      </Router>
    </GlobalProvider>
  );
}

export default App;
