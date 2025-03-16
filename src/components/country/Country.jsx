import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function Country({data}) {
  const idd = useParams() 
  console.log(idd)
  

  useEffect(() => {
    console.log(`selected is defined as ${selected} !`)
  } , [selected])
  return ( 
      <h2>
        
      </h2>
    )
}