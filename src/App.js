import './App.css';
import Home from './pages/Home';
import { Route } from 'react-router-dom';
import MyPage from './pages/MyPage';
import SignUp from './components/SignUp/SignUp.js';
import Login from './components/Login/Login';
import ProductDetails from './components/Products/ProductDetails';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Login}></Route>
      <Route path="/home"component={Home}></Route>
      <Route path="/mypage"component={MyPage}></Route>
      <Route path="/signup" component={SignUp}></Route>
      <Route path="/search" component={Search}></Route>
      <Route path="/:category/:id" component={ProductDetails}></Route>
    </div>
  );
}

export default App;
