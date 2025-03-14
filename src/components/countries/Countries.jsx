export default function Countries({informations , showCard}) {
    return (
        <div>
            <h2>HELLO</h2>
        {informations.map((e , index) => {
            return (
            <div key={index} className="card-container" onClick={() =>showCard(e)}>
                <img src={e.flags.png} alt="" />
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