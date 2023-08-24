import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceOne } from '@fortawesome/free-solid-svg-icons'
import { faDiceTwo } from '@fortawesome/free-solid-svg-icons'
 import { faDiceThree } from '@fortawesome/free-solid-svg-icons'
import { faDiceFour} from '@fortawesome/free-solid-svg-icons'
import { faDiceFive } from '@fortawesome/free-solid-svg-icons'
import { faDiceSix} from '@fortawesome/free-solid-svg-icons'
import "./dice.css"
let element1: any;
let element2: any;
let audioInterval;

    
function Dice(props:any){
    let {face1,face2,rolling} =props;
    
switch(face1)
{
    case 0:element1=faDiceSix;
    break;
case 1:
element1=faDiceOne;
break;
case 2:
    element1=faDiceTwo;
    break;
case 3:
    element1=faDiceThree;
    break;
case 4:
        element1=faDiceFour;
        break;
case 5:
            element1=faDiceFive;
            break;
 case 6:
                element1=faDiceSix;
                break;
                    
    
}
switch(face2)
{
    case 0: element2=faDiceSix;
    break;
case 1:
element2=faDiceOne;
break;
case 2:
    element2=faDiceTwo;
    break;
    case 3:
    element2= faDiceThree;
    break;
case 4:
        element2=faDiceFour;
        break;
case 5:
            element2=faDiceFive;
            break;
 case 6:
         element2=faDiceSix;
         break;

}
console.log(`face1:${face1}  face2:${face2}`)



return(<div className='dice'>
{rolling?<FontAwesomeIcon icon={element1} style={{color: "#4c5490",marginRight:'1rem'}} />:<div className='diceone'><FontAwesomeIcon icon={element1} style={{color: "#4c5490",marginRight:'1rem'}} /></div>}

{rolling?<FontAwesomeIcon icon={element2} style={{color: "#4c5490",}} />:<div className='dicetwo'><FontAwesomeIcon icon={element2} style={{color: "#4c5490",}} /></div>}


{rolling?null:<audio autoPlay>
    <source src="Rolling Dice.mp3" type="audio/mpeg"/> 
    </audio>} 
   
    

</div>

)


}
export default Dice;