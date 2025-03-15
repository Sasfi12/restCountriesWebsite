import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Countries from './components/countries/Countries';
import Country from './components/country/Country';
function App() {
  const [data , setData] = useState(null);
  const [loading , setLoading] = useState(true);
  const [error , setError] = useState(null) ; 
  const [showing , setShowing] = useState(null);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((response) => { setData(response); setLoading(false) ;  })
    .catch((error) => error)
  }, [])
  const showCard = (e) => {
    setShowing([{
      name: e.name.official, 
      Capital : e.capital[0] , 
      Population : e.population , 
      Region : e.region , 

    }])
    
  }
  useEffect(() => {
    console.log(showing , "showing")
  } , [showing])
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
          <Route path={"/"} element={<Countries informations={data} showCard={showCard}/>} />
          <Route path={"/:id"} element={<Country />}/>
        </Routes>
    </Router>
    
    </>
  )
}

export default App
