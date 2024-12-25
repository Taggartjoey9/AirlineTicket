
// eslint-disable-next-line react/prop-types
export default function Modal({ closeModal}) {

    return (
        <section className="modal-container">
            <div>No Flights Available</div>
            <p>There are no flights currently with you search results. Contact an associate for better assistance</p>
            <div>1-800-AirlineDirect</div>
            <button onClick={() => closeModal(false) }>Close</button>
        </section>
    )
}