import { useState, useEffect } from "react"

const ItemCount = () => {

    const [CantImtems, setCantItems] = useState (0)

    useEffect(() =>  {
        console.log("Se monto el componente")

        return () => {
            console.log("se desmonto el componente")
        }
    }, [] )

    const HandlleAdd = () => {
        setCantItems (CantImtems + 1)
        console.log ("click +", CantImtems)
    }
    const HandlleSubs = () => {
        if (CantImtems > 0) {
        setCantItems (CantImtems - 1)
        console.log ("click -", CantImtems)
        }

    }

  return (
    <>
      <div>ItemCount</div>
      <button onClick={HandlleAdd}> + </button>
      <span> {CantImtems} </span>
      <button onClick={HandlleSubs}> - </button>
    </>
  )
}

export default ItemCount
