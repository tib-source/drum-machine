import './style/App.css'
import { bankTwo, bankOne } from './constant/constants';
import Buttons from './components/Buttons';
import { useEffect, useState} from 'react';

function App() {
   
  useEffect(() => {
    window.addEventListener('keydown', handleKeypress)
  }, [])
  
  const [audioList, setaudioList] = useState(bankOne)
  
  const handleKeypress =(e)=>{
    switch(e.keyCode){
      case bankOne[0].keyCode:
        
        break
      case bankOne[1].keyCode:
        
        break
      case bankOne[2].keyCode:
        
        break
      case bankOne[3].keyCode:
        
        break
      case bankOne[4].keyCode:
        
        break
      case bankOne[5].keyCode:
        
        break
      case bankOne[6].keyCode:
        
        break
      case bankOne[7].keyCode:
        
        break
      case bankOne[8].keyCode:
        
        break
      default: 
        return 
    }
  }
  
  
  return (
    <div className="drum-machine">
      <div className="display">
        {audioList.map()}
      </div>
    </div>
  );
}

export default App;
