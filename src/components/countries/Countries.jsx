import {Link} from "react-router-dom"
export default function Countries({informations , showCard}) {
    return (
        <div>
            <h2>HELLO</h2>
        {informations.map((e , index) => {
            return (
            <div key={index} className="card-container" >
                <Link to={e.idd.root}>
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