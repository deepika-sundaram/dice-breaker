import Dice from './dice'
import React from 'react'

import './rollingDice.css'
function Rolldice(){
    let myInterval:any;
    let [number1,setNumber1] =React.useState(Math.floor(Math.random()*6))
    let [number2,setNumber2] =React.useState(Math.floor(Math.random()*6))
    let[roll,setRoll]=React.useState(true);

      function changingWhileRolling()
      {
          setNumber1(Math.floor(Math.random()*6));
          setNumber2(Math.floor(Math.random()*6));
      }

   
 function  getRandomNumber(){
    setRoll(false);   
    myInterval= setInterval(changingWhileRolling, 200);
   setTimeout(()=>{setRoll(true),setNumber1(Math.floor(Math.random()*6)),setNumber2(Math.floor(Math.random()*6)),clearInterval(myInterval);},1000);

 }
   
return(<div><div className='content'>
    <img src='Screen Shot 2023-08-21 at 9.52.57 PM.png'></img>
    <div className='inner'>
        
    <Dice face1={number1} face2={number2} rolling={roll}/>
   
    <button onClick={getRandomNumber}>{roll?'ROLL DICE!!!':'ROLLING'}</button></div>
    </div>
    </div>)
  }
export default Rolldice;
