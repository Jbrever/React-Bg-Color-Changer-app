import { useState } from 'react'
import './App.css'

function App() {
  let [color ,  setColor] = useState('grey');
  // let [inputValue , setInputValue] = useState('');
  let val = null;
  function handleInputChange(e){
    val = e.target.value;
  }
  
  
  return (
   <>
     <div className="main" style={{backgroundColor:color}}>
      <div className="up-navbar">
           <input className='inp' type="text" placeholder='Enter color' onChange={handleInputChange}/>
           <button className='btn' style={{backgroundColor:'red', margin:'0 20px'}} onClick={()=>setColor(val)}>generate</button>
       </div>
       <div className='bt-navbar'>
        <button className='btn btn-blue' style={{backgroundColor:'blue'}} onClick={()=>setColor('blue')}>blue</button>
        <button className='btn btn-red' style={{backgroundColor:'red'}} onClick={()=>setColor('red')}>red</button>
        <button className='btn btn-brown' style={{backgroundColor:'brown'}} onClick={()=>setColor('brown')}>brown</button>
        <button className='btn btn-yellow' style={{backgroundColor:'yellow'}} onClick={()=>setColor('yellow')}>yellow</button>
        <button className='btn btn-pink' style={{backgroundColor:'pink'}} onClick={()=>setColor('pink')}>pink</button>
        <button className='btn btn-violet' style={{backgroundColor:'violet'}} onClick={()=>setColor('violet')}>violet</button>
        <button className='btn btn-grey' style={{backgroundColor:'grey'}} onClick={()=>setColor('grey')}>grey</button>
       </div>
     </div>
    </>
  )
}

export default App
