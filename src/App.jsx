import './App.css';
import AuthentificationHome from './Components/AuthentificationHome';
import Formulaire from './Components/Formulaire';
import SideBar from './Components/SideBar';
import Authentification from './Pages/Authentification';
import SearchBar from './Components/SearchBar';
import Video from './Components/Video';
import BlocVideo from './Components/CardItem'
import CardItem from './Components/CardItem';
import CardList from './Components/CardList';
import Videoplayer from './Pages/Videoplayer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Components/Login';
import Logout from './Components/Logout';


function App() {


  return (
    <div className="App">
      <Logout/>
    
        <Routes>
          <Route path='/' element={<Authentification/>}/>
          <Route path='/home' element={<Videoplayer/>}/>
        </Routes>
     
    </div>
  );
}

export default App;
