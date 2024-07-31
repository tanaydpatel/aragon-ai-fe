import React from 'react';
import Button from './Button';

function Navbar({ title, onAddTask, boardId }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-title">{title}</span>
      </div>

      {boardId && (
        <div className="navbar-right">
          <Button label="+ Add a new task" onClick={onAddTask} />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
