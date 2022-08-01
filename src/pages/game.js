import './welcome.css'
import {useState} from 'react';
import {prizecheck} from '../api/apicall'
import Add from './addpage'

import {Link,useParams} from 'react-router-dom'
function changevar(value) {
    document.documentElement.style.setProperty('--change', value+'deg');
}
function Game() {
    const [clas, setIsActive] = useState('spin-win');
    const [clicked, setClicked] = useState(false);
    const [nextpage, setnextpage] = useState(false);
    const [modal, setmodal] = useState(false);


    async function selose(){
        setClicked(true)
        setIsActive('rotate')
        setTimeout(() => {
            setmodal(true)
        }, 43000);
        prizecheck().then(docs=>{
                    changevar(parseInt(docs.data.angle))

        })

    }
   
  if(nextpage){
            return <Add/>
  }
  if(!nextpage){
        return (
            <div className="app">
                {modal?
                <div className="modal">
                <img src="/oops.png" className='spin-win' alt="" srcSet=""/> 
                <div className="middle">
            <h2 className="colour"> Better luck next time !</h2>
            <p className="colour"> Look like you got bit unlucky this time . Don't worry we got you . Please continue and learn about other context and giveaways  <br/>

            </p>
            <button className="btn" onClick={()=>{setnextpage(true)}} >
            Go to next page
            </button>
            </div>
                </div>:
                <div className="app">
            <div className="middle">
            <h2> Welcome Back !</h2>
            <p>Spin the wheel to win exiting prizes <br/>
            </p>

            </div>
            <div className="spinwheelsec">
            <img src="/wheel-pointer.png" className="pointer" /> 
            <img src="/spinwheel.png" className={clas} alt="" srcSet=""/> 
            </div>

            {clicked?'':<div className="flex-item">
                        {/* <Link to='/result'> */}
                                <img src="/spintowin.png" onClick={selose} className="playnow-btn clicker" alt="" srcSet="" /></div>}

                        {/* </Link> */}
                        
            <img src="/moviename.png" className="moviename" alt="" srcSet=""/> 

            </div>}
            </div>
            );
  }

}

export default Game;
