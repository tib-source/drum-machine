import './style/App.css'
import { bankTwo, bankOne } from './constant/constants';
import Buttons from './components/Buttons';
import { useEffect, useState} from 'react';

function App() {
   
  useEffect(() => {
    window.addEventListener('keydown', handleKeypress)
    setDisplay('')
  }, [])
  
  const [audioList, setaudioList] = useState(bankOne)
  const [display, setDisplay] = useState('')

  const keys = ["Q","W","E","A","S","D","Z","X", "C"]
  const handleKeypress =(e)=>{
    try{
      const key = e.code.split('').pop()
      const keyData = getDataFromKey(key) 
      if(keys.includes(key)){
        resetAudio()
        const audio = document.getElementById(key)
        setDisplay(keyData.id)
        audio.play()
      }

    } catch(error){
      return console.log(error)
    }
  }

  const handleClick=(e)=>{
    try{
      const key = e.target.innerText
      const keyData = getDataFromKey(key)
      resetAudio()
      const audio = document.getElementById(keyData.keyTrigger)
      setDisplay(keyData.id)
      audio.play()

    }catch(e){
      return console.log(e)
    }
  }
  const resetAudio = () => {
    for(let i = 0; i<keys.length; i++){
      const audio = document.getElementById(keys[i])
      audio.pause()
      audio.currentTime = 0;
    }
  }
  
  const getDataFromKey =(key)=> {
    const data =  audioList.filter((elem)=>elem.keyTrigger==key)
    return data[0]
    }
  
  return (
    <div id="drum-machine">
      <h1>Drum Machine</h1>
      <div id="display">Currently Playing: {display}</div>
        <div className="buttons">
          {audioList.map((elem)=>{
            return <Buttons handleClick={handleClick} {...elem} />
          })}
        </div>
    </div>
  );
}

export default App;







// switch(e.keyCode){
//   case audioList[0].keyCode:
    
//     break
//   case audioList[1].keyCode:
    
//     break
//   case audioList[2].keyCode:
    
//     break
//   case audioList[3].keyCode:
    
//     break
//   case audioList[4].keyCode:
    
//     break
//   case audioList[5].keyCode:
    
//     break
//   case audioList[6].keyCode:
    
//     break
//   case audioList[7].keyCode:
    
//     break
//   case audioList[8].keyCode:
    
//     break
//   default: 
//     return 
// }