import {useState} from 'react'
import MobileEnter from '../components/mobilenumberenter'
import Otpenter from '../components/otpenter'
import Succeeed from '../components/successpage'

function Login() {
   const [otprequested,setotprequested] = useState(false)
   const [mobile,setMobile] = useState('')
   const [success,setVerifide] = useState(false)
   const [otp,setotp] = useState('')
   const [checked,setChecked] = useState(false)

   function otpreq (){
     if(!mobile || mobile.length!==10){
       return alert('Please Enter A Valid Mobile Number')
     }
     setVerifide(false)
    setotprequested(true)
   }
   function successed () {
   
    setVerifide(true)
    setotprequested(false)
  }
   if(otprequested){
    return  <Otpenter mobile={mobile} setotp={setotp} otp={otp} successed={successed} />
   }else if(success){
      return <Succeeed setChecked={setChecked} checked={checked} />
   }else{
     return <MobileEnter mobile={mobile} otpreq={otpreq} setMobile={setMobile}/>
   }
  
}

export default Login;
