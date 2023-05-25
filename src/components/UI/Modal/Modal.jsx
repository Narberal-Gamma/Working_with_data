import React from "react";
import cl from './Modal.module.css'

const Modal = ({ children, isModal, setIsModal }) => {
    return (
        <div className={isModal ? `${cl.bg + ' ' + cl.active}` : cl.bg} onClick={() => setIsModal(false)}>
            <div className={isModal ? `${cl.content + ' ' + cl.active}` : cl.content} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal