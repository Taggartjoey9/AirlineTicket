export default function Header() {
    return (
        <header className="header-nav">
            <div className="header-left">
                <img className="header-logo" src="./logo.png" alt="airplane image" />
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