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
            
           

                    <div className="bottom">
                        <button className="btn yellow" >
                            Claim Your Prize
                            </button>
                            <button className="btn red" >
                            Get A Chance to Win More Prizes
                            </button>
                    </div>
                    <img src="/movieposter.jpeg" className="movieposter" alt="" srcset=""/>

            </div>
    )
   
   
}

export default Result;
