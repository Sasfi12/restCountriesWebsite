import { useParams } from "react-router-dom"

export default function Country({data}) {
  const { cca3 } = useParams();
  const selected = data.find((e) => e.cca3 === cca3);

  return ( 
    selected ?  
      <div>
        <div className="one-card-container" >
                    <img src={selected.flags.png} alt="" />
                <br />
                Name : {selected.name.official}
                <br />   
                Capital : {selected.capital} 
                <br />
                Population : {selected.population}
                <br />
                Region : {selected.region}
            </div>
      </div> : "Loading... "
    )
}