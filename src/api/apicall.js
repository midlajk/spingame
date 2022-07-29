import axios from 'axios';

import * as c from '../constants/apis';


export async function registermobile(phone,location){
  
    try{
        let res = await axios.post(c.Registration, {
            "phone": phone,
            "location": location
            } );
            
         return res
        
    }catch (e) {
        throw handler(e);
    }
}
export async function Verifyotp(phone,otp){
  
    try{
        let res = await axios.post(c.Verifyotp, {
            "phone": phone,
            "otp": otp
            } );
            
         return res
        
    }catch (e) {
        throw handler(e);
    }
}

export async function prizecheck(phone,otp){
  
    try{
        let res = await axios.post(c.Prizecheck, {
            "phone": "9744061516",
            "location": "location",

            } );
            
         return res
        
    }catch (e) {
        throw handler(e);
    }
}

export function handler(err) {
    let error = err;

    if (err.response && err.response.data.hasOwnProperty("message"))
        error = err.response.data;
    else if (!err.hasOwnProperty("message")) error = err.toJSON();

    return new Error(error.message);
}
