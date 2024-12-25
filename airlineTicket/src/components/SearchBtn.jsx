import { useState } from "react"
import Modal from "./Modal";

export default function SearchBtn() {

    const [isOpen, setIsOpen] = useState(false);

    function handleOpen() {
        setIsOpen(true);
    }
    
    return (
        <>
          <div onClick={handleOpen}className="search-modal">Seach</div>
          {isOpen ? <Modal/> : ""}
        </>
    )
}