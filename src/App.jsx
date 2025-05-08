import { useState } from "react";
import { CardInical } from "./Components/CardInicial";
import { CardFinal } from "./Components/CardFinal";

export function App(){
  const[nota, setNota] = useState(0);
  const[submited, setSubimeted] = useState(false)


 

  return(
    submited === false ? (
        <CardInical nota={nota} setNota= {setNota} setSubimeted={setSubimeted} />
    ) : (
      <CardFinal nota={nota}/>
    )
  )
}