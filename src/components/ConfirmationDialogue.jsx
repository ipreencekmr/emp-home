import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buttonClickedAction, toggleModalAction } from "../action/modalAction";

export const ConfirmationDialogue = () => {
    const dispatch = useDispatch();
    const display = useSelector((state) => state.modal.show);
    const cancelButtonText = useSelector((state) => state.modal.cancelButtonText);
    const confirmButtonText = useSelector((state) => state.modal.confirmButtonText);
    const modalTitle = useSelector((state) => state.modal.modalTitle);
    const modalContent = useSelector((state) => state.modal.modalContent);

    const handleClick = (e) => {
        switch(e.target.id) {
            case "modalCancelButtonId":{
                dispatch(buttonClickedAction(0));
            }
                break;
            case "modalConfirmButtonId":{
                dispatch(buttonClickedAction(1));
            }
                break;
            default:
                dispatch(buttonClickedAction(-1));
        }
        dispatch(toggleModalAction(false))
    };

    return (
        <div 
            id="verificationModalId"
            data-testid="verificationModalId"
            className={ `modal fade ${display?"show":"hide"}` }
            tabIndex="-1" 
            data-bs-backdrop="static" 
            data-bs-keyboard="false"
            aria-labelledby="verificationModalLabelId"
            aria-hidden={ display?"false":"true" }
            aria-modal={ display?"true":"false" }>
            <div className="modal-dialog modal-sm modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 id="verificationModalLabelId" className="modal-title">{modalTitle}</h5>
                        <button 
                            type="button" 
                            id="modalCloseButtonId"
                            data-testid="modalCloseButtonId"
                            className="btn btn-close" 
                            onClick={ handleClick }
                            aria-label="Close">
                        </button>
                    </div>
      
                    <div className="modal-body">
                        {modalContent}
                    </div>
                    <div className="modal-footer justify-content-between">
                        <button 
                            type="button" 
                            id="modalCancelButtonId"
                            data-testid="modalCancelButtonId"
                            className="btn btn-outline-secondary" 
                            onClick={ handleClick }
                            data-dismiss="modal">
                            {cancelButtonText}
                        </button>
                        <button 
                            type="button" 
                            id="modalConfirmButtonId"
                            data-testid="modalConfirmButtonId"
                            onClick={ handleClick }
                            className="btn btn-outline-success">
                            {confirmButtonText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

ConfirmationDialogue.displayName = "ConfirmationDialogue";