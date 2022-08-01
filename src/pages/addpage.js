import './welcome.css'
import {useState} from 'react';
import {prizecheck} from '../api/apicall'

import {Link,useParams} from 'react-router-dom'
function changevar(value) {
    document.documentElement.style.setProperty('--change', value+'deg');
}
function Game() {
    const [clas, setIsActive] = useState('spin-win');
    const [clicked, setClicked] = useState(false);


    async function selose(){
        setClicked(true)
        setIsActive('rotate')
        var registration = await prizecheck()
       changevar(parseInt(registration.data.angle))

    }
   
  
  return (
<div className="addpage">
  <div>
  <img src="/movieposter.jpeg" className="adimage"  alt="" srcSet=""/> 

    </div>
  <div className="middle">
            <h2 className="colour"> Watch Movie Vivaha avahanam!</h2>
            <p className="colour"> Movie discription  <br/>

            </p>
            <Link to='/result' className="btn">     <button className="btn"  >
            Go to next page
            </button> </Link>

          
            </div>
            </div>
  );
}

export default Game;
