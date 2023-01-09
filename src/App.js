// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
// import Content from './Component/Content';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Home from  './Component/Home';
import { Routes,Route } from 'react-router-dom';
import Users from "./Component/Users";

import Places from "./Component/Places";
import Dyanh from "./Component/Dyanh";
import John from "./Component/John";
import Vassu from "./Component/Vassu";
import UserDetails  from "./Component/UserDetails";

function App() {
  return (
    <div className="App">
      <Header/>
          <Routes>
          <Route path="/" element={ <Home/> }/>
              {/* <Route element={home}/> */}
          <Route  path="/user/:country" exact element={ <Users/> } />
          <Route  path="/users/:country/:userId" exact element={ <UserDetails/> } />
          <Route pah="Places"  exact element={ <Places/> } />
          <Route path="Dyanh"  exact element={ <Dyanh/> } />
          <Route path="John"  exact element={ <John/> } />
          <Route path="Vassu"  exact element={ <Vassu/> } />
              {/* </Route> */}
        </Routes>
      
     
      
      <Footer/>

    </div>
  );
}

export default App;
