import './App.css'
import TicTacToe from './components/TicTacToe'

function App() {

  return (
    <div>
       <h1>3*3</h1>
     <TicTacToe />
      <h1>4*4</h1>
     <TicTacToe boardSize={4}/>

      <h1>5*5</h1>
     <TicTacToe boardSize={5}/>
        
    </div>
  )
}

export default App
