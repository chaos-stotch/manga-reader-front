import Navbar from './components/navbar/Navbar'
import Hilights from './components/hilights/Hilights';
import MangaList from './components/mangaList/MangaList';
import MangaMenu from './components/mangaMenu/MangaMenu';

import {
  BrowserRouter,
  Routes,
  Route,
  } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path ="/" element={
          <div className='App'>
            <Hilights/>
            <MangaList/>
          </div>
          
          } />
        <Route exact path ="/mangas" element={
          <MangaMenu/>
          } />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
