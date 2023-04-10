import React from "react";
import { createPortal } from "react-dom";
import "./AddModal.css";

function AddModal({children}){
    return createPortal(
        <div className="ModalBackground">
            {children}
        </div>,
        document.getElementById("modal")
    );

}

export {AddModal};