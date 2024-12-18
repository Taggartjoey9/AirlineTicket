// eslint-disable-next-line react/prop-types
export default function DestinationCards({ headerText }) {
    return (
        <>
        <h1 className="card-header-text">{headerText}</h1>
        <container className="main-card-container" >
            <div className="card-container"></div>
            <div className="card-container"></div>
            <div className="card-container"></div>
            <div className="card-container"></div>
        </container>
        </>
    )
}