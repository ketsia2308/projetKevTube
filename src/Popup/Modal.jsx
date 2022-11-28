import React from "react";
import ReactDOM from "react-dom";
import './Popup.css';
import PropTypes from "prop-types";

const Modal = ({ isAffiching, hide, title, ...props }) =>
isAffiching
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay">
            <div className="modal-wrapper">
              <div className="modal">
                <div className="modal-header">
                  <h4>{title}</h4>
                  <button className="modal-close-button" onClick={hide}>
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">{props.children}</div>
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;
Modal.propTypes = {
  isAffiching: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
export default Modal;
