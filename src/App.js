import Welcome from './pages/welcome';
import Login from './pages/login';
import Game from './pages/game';
import Result from './pages/result';

import {Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>

     
  <Route exact path={"/welcome/:place"} element={<Welcome />} />
    <Route path='/login' element={<Login/>} /> 
    <Route path='/game' element={<Game/>} /> 
    <Route path='/result' element={<Result/>} /> 

    </Routes>
        </div>
  );
}

export default App;
