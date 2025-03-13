import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data , setData] = useState(null);
  const [loading , setLoading] = useState(false);
  const [error , setError] = useState(false)
  // useEffect(() => {
  //   fetch("https://restcountries.com/v3.1/all").
  //   then((response) => response.jons()).
  //   then((response) => console.log(response))
  //   .catch((error) => error)
  // }, [])

  return (
    <>
    <h2>HEELO</h2>
    </>
  )
}

export default App
