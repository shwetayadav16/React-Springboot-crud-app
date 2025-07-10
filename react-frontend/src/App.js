import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (

    <div>
      <router>
        <div className="container">
          <HeaderComponent />
          <div className="container">
            <switch>
              <ListEmployeeComponent />
            </switch>
          </div>
          <FooterComponent />
        </div>
      </router>
    </div>
  );
}

export default App;
