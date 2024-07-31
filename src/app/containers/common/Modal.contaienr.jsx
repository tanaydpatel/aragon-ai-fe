import React from 'react';
import PropTypes from 'prop-types';

import { RxCross2 } from 'react-icons/rx';

function ModalContaienr({ title, open, onClose, children, showClose }) {
  if (!open) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-topbar">
          <h1>{title}</h1>{' '}
          {showClose && (
            <button
              type="button"
              className="modal-close-button"
              onClick={onClose}
              aria-label="Close Modal"
            >
              <RxCross2 />
            </button>
          )}{' '}
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

ModalContaienr.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  showClose: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

ModalContaienr.defaultProps = {
  showClose: true,
};

export default ModalContaienr;
