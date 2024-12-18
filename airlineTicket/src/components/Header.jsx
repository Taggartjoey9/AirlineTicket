export default function Header() {
    return (
        <header className="header-nav">
            <div className="header-left">
                <h1>Airline Tickets</h1>
                <img src="./main-logo.png" alt="airplane image" />
            </div>
              <ul className="nav-items">
                <div className="delta">
                    <img className="nav-image" src="Delta.png" alt="" />
                    <li>Delta Airlines</li>
                </div>
                <div className="american">
                    <img className="nav-image" src="AA.png" alt="" />
                    <li>American Airlines</li>
                </div>
                <div className="united">
                    <img className="nav-image" src="United.png" alt="" />
                    <li>United Airlines</li>
                </div>
                <div className="southwest">
                    <img className="nav-image" src="SW.png" alt="" />
                    <li>Southwest Airlines</li>
                </div>
              </ul>
        </header>
)}