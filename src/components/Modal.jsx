import React from 'react'

const Modal = ({toggle, setToggle}) => {
  return (
    <div className="modal-window">
      <div class="modal-bg">
      <div class="modal-body">
        <div class="modal-header">
          <h3>Add new Category</h3>
          <div class="modal-close" onClick={() => setToggle(!toggle)}>X</div>
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