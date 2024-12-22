import { useState } from "react"
import Modal from "./Modal";

export default function SearchBtn() {

    const [showModal, setShowModal] = useState(false);


    function toggleModal() {
        console.log('hello')
    }

    return (
        <>
          <div onClick={toggleModal} className="search-modal">Seach</div>
        </>
    )
}