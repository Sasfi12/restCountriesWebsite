import {Link} from "react-router-dom"
export default function Countries({informations , filterFunction}) {
    console.log()
    return (
        <div>
            <h2>HELLO</h2>
            <input type="text" onChange={filterFunction}/>
        {informations.map((e , index) => {
            return (
            <div key={index} className="card-container" >
                <Link to={e.cca3}>
                    <img src={e.flags.png} alt="" />
                </Link>
                <br />
                Name : {e.name.official}
                <br />   
                Capital : {e.capital} 
                <br />
                Population : {e.population}
                <br />
                Region : {e.region}
            </div>
            )
        })}
        </div>
    )
}