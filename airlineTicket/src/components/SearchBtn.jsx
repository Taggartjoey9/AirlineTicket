import { useState } from "react"
import Modal from "./Modal";

export default function SearchBtn() {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
          {showModal ? <Modal closeModal={setShowModal} /> : ""}
          <div onClick={() => setShowModal(true)} className="search-modal">Seach</div>
        </>
    )
}