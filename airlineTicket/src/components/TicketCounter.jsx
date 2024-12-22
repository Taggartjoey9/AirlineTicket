import NavButton from './NavButton.jsx';
import TicketInputFields from './TicketInputFields.jsx'

export default function TicketCounter() {
    return (
        <section className="ticket-container">
            <section className="counter-section">
                <div className="ticket-header">Airline Flight Deals</div>
                <div className="button-selectors">
                    <NavButton />
                </div>
                <div>
                    <TicketInputFields />
                </div>
            </section>
        </section>
    )
}