import './result.css'
import {useState} from 'react'

function Result() {
    const [pricereq,setpricereq] = useState(false)
    const [moreprice,setmoreprice] = useState(false)
    if(moreprice) {
        return(
            <div className="modal">
                    <img src="/add.jpeg" className="add" alt="" srcset=""/>
                </div>
        )
    }
    return(
       
            <div className="main"> 
            
            <div className="spinwheelsec">
            <img src="/error.png" className="spin-win" alt="" srcSet=""/>
               <div className="middle">
            <h2 className="colour"> Better luck next time !</h2>
            <p className="colour"> Look like you got bit unlucky this time . Don't worry we got you . Please continue and learn about other context and giveaways  <br/>

            </p>
         <a href="http://" target="_blank" rel="noopener noreferrer">Terms and conf</a>
            </div> 
            </div>
         
                  
                    <img src="/add.jpeg"  className="add" alt="" srcSet=""/> 

            </div>
    )
   
   
}

export default Result;
