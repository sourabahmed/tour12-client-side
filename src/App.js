
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Headers from './pages/Headers/Headers';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Headers></Headers>
        <Switch>
          <Route exact path='/'>
           <Home></Home>
          </Route>
          <Route exact path='/home'>
           <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
