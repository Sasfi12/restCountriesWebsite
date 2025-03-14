import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Countries from './components/countries/Countries';
function App() {
  const [data , setData] = useState(null);
  const [loading , setLoading] = useState(true);
  const [error , setError] = useState(null) ; 
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((response) => { setData(response); setLoading(false) ;  })
    .catch((error) => error)
  }, [])
  if(loading) 
    return ( 
      <h1>Loading...</h1> 
  )
  if(error) 
    return ( 
      <h1>Error found</h1>
  )
    return (
    <>
    <Router>
        <Routes>
          <Route path={"/"} element={<Countries informations={data}/>} />
          <Route path={"/:id"} />
        </Routes>
    </Router>
    
    </>
  )
}

export default App
