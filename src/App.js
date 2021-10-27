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
      case audioList[0].keyCode:
        
        break
      case audioList[1].keyCode:
        
        break
      case audioList[2].keyCode:
        
        break
      case audioList[3].keyCode:
        
        break
      case audioList[4].keyCode:
        
        break
      case audioList[5].keyCode:
        
        break
      case audioList[6].keyCode:
        
        break
      case audioList[7].keyCode:
        
        break
      case audioList[8].keyCode:
        
        break
      default: 
        return 
    }
  }
  
  
  return (
    <div className="drum-machine">
      <div className="display">
        {audioList.map((elem)=>{
          return <Buttons {...elem} /> 
        })}
      </div>
    </div>
  );
}

export default App;
