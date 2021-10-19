import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import './App.css';
import Detail from './components/Details/Detail/Detail';
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home/Home';
import NotFound from './components/Home/NotFound/NotFound';
import LogIn from './components/LogIn/LogIn/LogIn';
import PrivateRoute from './components/LogIn/PrivateRoute/PrivateRoute';
import Register from './components/LogIn/Register/Register';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div>
   <AuthProvider>
   <BrowserRouter>
   <Header></Header>
   <Switch>
     <Route exact path="/">
       <Home></Home>
     </Route>
     <Route path="/home">
  <Home></Home>
     </Route>
     <Route path ="/register">
       <Register></Register>
       </Route>
     <Route path="/login">
       <LogIn></LogIn>
       </Route>
     <PrivateRoute path="/details/:serviceId">
         <Detail></Detail>
       </PrivateRoute>
     <Route path="*">
       <NotFound></NotFound>
     </Route>
   </Switch>
   </BrowserRouter>
   </AuthProvider>
  </div>
  );
}

export default App;
