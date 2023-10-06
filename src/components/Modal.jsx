import React from 'react'
import del from "../assets/img/delete.png";

const Modal = ({toggle, setToggle}) => {
  return (
    <div className="modal-window">
      <div class="modal-bg">
      <div class="modal-body">
        <div class="modal-header">
          <h3>Add new Category</h3>
          <img className="modal-close" src={del} onClick={() => setToggle(!toggle)}/> 
        </div>
        <div class="modal-body__content">
          <input className="modal__input" />
          <button>Отправить</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Modal