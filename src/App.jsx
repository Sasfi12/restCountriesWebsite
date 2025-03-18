import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Countries from './components/countries/Countries';
import Country from './components/country/Country';
function App() {
  const [data , setData] = useState([]);
  const [display , setDisplay] = useState([]);
  const [loading , setLoading] = useState(true);
  const [error , setError] = useState(null) ; 
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((response) => { setData(response); setLoading(false) ;  })
    .catch((error) => setError(error) , setLoading(false))
  }, [])
  const filterFunction = (e) => {
    if(e.target.value !== "") {
    setDisplay(data.filter((element) => element.name.official.toLowerCase().includes(e.target.value.toLowerCase()) ))
   }
  }
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
          <Route path={"/"} element={<Countries informations={display} filterFunction={filterFunction}/>} />
          <Route path={"/:cca3"} element={<Country data={data} />}/>
        </Routes>
    </Router>
    
    </>
  )
}

export default App
