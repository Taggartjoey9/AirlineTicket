// eslint-disable-next-line react/prop-types
export default function DestinationCards({ headerText }) {
    return (
        <>
        <h1 className="card-header-text">{headerText}</h1>
        <container className="main-card-container" >
            <div className="card-container">
                <img src="sanDiego.jpg" alt="golden gate bridge" />
                <h3>Charlotte, NC (CLT)<br></br>to<br></br>San Diego, CA (SAN)</h3>
                <h5>02/05/25 - 02/12/25</h5>
                <h4>from $359* Updated: 7 hours ago Round trip | Economy</h4>
                <button>See Latest Fare</button>
            </div>
            <div className="card-container"></div>
            <div className="card-container"></div>
            <div className="card-container"></div>
        </container>
        </>
    )
}