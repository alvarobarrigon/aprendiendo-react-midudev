import { Children, useState } from 'react'
import './App.css'

const TURNS = {
  X: 'x',
  O: 'o'
}


const Square = ({children, isSelected, udpateBoard, index}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  
  const handleClick = () => {
    udpateBoard(index)
  }
  return (
    <div  onClick={handleClick} className={className}>
      {children}
    </div>
  )
}


function App() {
  const [board,setBoard] = useState(
    Array (9).fill(null)
  )

  const [turn, setTurn]=useState(TURNS.X)
  
  //no hay ganador, false es empate
  const [winner,setWinner]=useState(null) 


  const udpateBoard = (index) => {
    //no actualizar esta posicion
    //si tiene algo
    if(board[index]) return
    //actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    //cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
  }

  return (
    <main className='board'>
      <h1>Tren en Raya</h1>
      <section className='game'>
        {
          board.map((_,index)=>{
            return(
              <Square
                key={index}
                index={index}
                udpateBoard={udpateBoard}
              >
                {board[index]}
              </Square>
            )
          }
        )
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn===TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn===TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
    </main>

  )

}

export default App
