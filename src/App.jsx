import { useState } from "react";
import ilustration from "./assets/illustration-thank-you.svg"
import { CardInical } from "./Components/CardInicial";

export function App(){
  const[nota, setNota] = useState(0);
  const[submited, setSubimeted] = useState(false)


 

  return(
    submited === false ? (
        <CardInical nota={nota} setNota= {setNota} setSubimeted={setSubimeted} />
    ) : (
      <div className="max-w-103 bg-gradient-dark p-6 rounded-2xl text-white font-overpass text-center">
        <img className="mx-auto mb-6" src={ilustration} alt="" />

        <p className="mb-6 text-orange bg-dark-blue w-fit mx-auto px-3 py-1.25 rounded-3xl text sm">You selected {nota} out of 5</p>
        <h1 className="text-2xl font-bold mb-2.5 " >Thank you!</h1>
        <p className="text-sm text-light-grey mb-6">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
      </div>
    )
  )
}