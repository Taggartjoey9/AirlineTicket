import { createPortal } from 'react-dom';
import SearchBtn from './SearchBtn';

export default function Modal({ setIsOpen }) {

    function handleClose() {
        setIsOpen(false);
    }



    const mountElement = document.getElementById('overlays');

    return (
            createPortal(
            <>
                <dialog className="modal-container">
                    <div>No Flights Available</div>
                    <p>There are no flights currently with you search results. Contact an associate for better assistance</p>
                    <div>1-800-AirlineDirect</div>
                    <button onClick={handleClose}>Close</button>
                </dialog>
            </>,
              mountElement
              
        )
    )
}