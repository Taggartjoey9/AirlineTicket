export default function Header() {
    return (
        <header className="header-nav">
            <div className="header-left">
                <h1>Airline Tickets</h1>
                <img src="./main-logo.png" alt="airplane image" />
            </div>
              <ul className="nav-items">
                <div className="delta">
                    <img src="Delta.png" alt="" />
                    <li>Delta Airlines</li>
                </div>
                <div className="american">
                    <img src="AA.png" alt="" />
                    <li>American Airlines</li>
                </div>
                <div className="united">
                    <img src="United.png" alt="" />
                    <li>United Airlines</li>
                </div>
                <div className="southwest">
                    <img src="SW.png" alt="" />
                    <li>Southwest Airlines</li>
                </div>
              </ul>
        </header>
)}