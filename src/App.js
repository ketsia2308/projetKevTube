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
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Logout from './Components/Logout';
import { useState, createContext } from 'react';
import appContext from './context';

function App() {
  const [user, setUser] = useState(null)
  const [accessToken, setAccessToken]  = useState('');
  const [playId,setPlayId] = useState('');
  return (
    <appContext.Provider value={{user, setUser, accessToken, setAccessToken,playId, setPlayId }} >
    <div className="App">
      <Logout />

      <Routes>
        <Route path='/' element={<Authentification />} />
        <Route path='/home' element={<Videoplayer />} />
      </Routes>

    </div>
    </appContext.Provider>
  );
}

export default App;
