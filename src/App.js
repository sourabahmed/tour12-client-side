
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AddPackage from './pages/AddPackage/AddPackage';
import AuthProvider from './pages/context/AuthProvider';
import Footer from './pages/Footer/Footer';
import Headers from './pages/Headers/Headers';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import MyOrders from './pages/MyOrders/MyOrders';
import PackageDetail from './pages/PackageDetail/PackageDetail';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import NotFound from './pages/NotFound/NotFound'
import ManageOrders from './pages/ManageOrders/ManageOrders';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Headers></Headers>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute exact path='/booknow/:detailId'>
              <PackageDetail></PackageDetail>
            </PrivateRoute>
            <Route exact path='/addPackage'>
              <AddPackage></AddPackage>
            </Route>
            <Route exact path='/orders'>
              <MyOrders></MyOrders>
            </Route>
            <Route exact path='/manageOrders'>
              <ManageOrders></ManageOrders>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
