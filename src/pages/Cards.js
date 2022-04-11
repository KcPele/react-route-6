
import React, {useState} from "react";

const Cards = (props) => {
    const [state, setState] = useState([])
   React.useEffect(() => {
       let count = []
        for(let i =0; i < props.amount; i++){
            count.push(i)
       }
   
       let box = count.map(val => {
           return {id: val, status:"down"}
       })
       setState(box)
   }, [])
   const handleClick = (id) => {
       setState(prevState => {
            const newSquares = []
            for(let i = 0; i < prevState.length; i++) {
                const currentSquare = prevState[i]
                if(currentSquare.id === id) { 
                    
                    if(currentSquare.status === "up"){
                        const updatedSquare = {
                            ...currentSquare,
                            status: "down"
                        }
                        newSquares.push(updatedSquare)
                        
                    } else {
                        const updatedSquare = {
                            ...currentSquare,
                            status: "up"
                        }
                        newSquares.push(updatedSquare)
                    }
                    
                    
                } else {
                    newSquares.push(currentSquare)
                }
            }
            return newSquares

       })
   }
   const display = state.map(val => {
        return <td key={val.id} onClick={() => handleClick(val.id)}>{val.status}</td>
   })
    return (
        <>
        <table>
            <tbody>
                <tr>
                    {display}
                </tr>
            </tbody>
        </table>
        </>
    );
  };


  export default Cards