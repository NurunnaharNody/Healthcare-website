import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import './App.css';
import Details from './components/Details/Details/Details';
import AboutUs from './components/Home/AboutUs/AboutUs';
import Contacts from './components/Home/Contacts/Contacts';
import Footer from './components/Home/Footer/Footer';
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home/Home';
import NotFound from './components/Home/NotFound/NotFound';
import Recommandations from './components/Home/Recommandations/Rcommandations';
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
       <Route path="/recommandations">
         <Recommandations></Recommandations>
         </Route>
         <Route path="/aboutus">
           <AboutUs></AboutUs>
           </Route>
         <Route path="/contacts">
           <Contacts></Contacts>
           </Route>
     <PrivateRoute path="/details/:serviceId">
         <Details></Details>
       </PrivateRoute>
     <Route path="*">
       <NotFound></NotFound>
     </Route>
   </Switch>
   <Footer></Footer>
   </BrowserRouter>
   </AuthProvider>
  </div>
  );
}

export default App;
