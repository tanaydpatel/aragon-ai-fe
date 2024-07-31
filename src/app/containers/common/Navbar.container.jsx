import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../../components/common/Navbar';

function NavbarContainer() {
  const board = useSelector((state) => state.board);
  return (
    <Navbar
      title={board?.name || 'Task management app'}
      onAddTask={() => {}}
      boardId={board?.boardId}
    />
  );
}

export default NavbarContainer;
