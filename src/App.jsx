import { useState } from 'react'
import './App.css'

function App() {


  return (
    <div className="container">
      <div className="contimgs">
        <div className='boximgs'>
          <h1>imagem1</h1>  
          <img src="/piramides.png" alt="Piramides do Egito"  className='imagem1'/>
        </div>
        <div className='boximgs'>
          <h1>imagem2</h1>  
          <img src="/piramides.png" alt="Piramides do Egito"  className='imagem2'/>
        </div>

      </div>
    </div>
  )
}

export default App
