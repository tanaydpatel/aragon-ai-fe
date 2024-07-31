/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RxTable } from 'react-icons/rx';

import { createBoard, getAllBoards } from '../../data/boards';
import Button from '../../components/common/Button';
import ModalContaienr from './Modal.contaienr';
import Input from '../../components/common/Input';

import { setBoard } from '../../../store/reducers/board.reducer';

function SidebarContainter() {
  const { userId } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [boards, setBoards] = useState(null);

  const [newBoardName, setNewBoardName] = useState('');
  const [isCreatingBoard, setIsCreatingBoard] = useState(false);

  const fecthBoards = async () => {
    const response = await getAllBoards({ userId });
    setBoards(response.data);
  };

  useEffect(() => {
    fecthBoards();
  }, []);

  return (
    <div className="sidebar ">
      <div className="sidebar-name flex-row">
        <img src="/favicon.png" alt="Logo" className="navbar-logo" />
        <h1>Kanban</h1>
      </div>
      <div className="sidebar-boards">
        <p>All boards ({boards?.length || 0})</p>
        <ul className="boards-list">
          {boards &&
            boards?.map((board) => (
              <li
                key={board.id}
                className="sidebar-board"
                onClick={() => {
                  dispatch(setBoard(board));
                }}
              >
                <RxTable /> <Link to="/">{board.name}</Link>
              </li>
            ))}
        </ul>
        <Button
          label="+ Create a new board"
          onClick={() => {
            setIsCreatingBoard(true);
          }}
        />
      </div>
      <ModalContaienr
        title="Create new board"
        open={isCreatingBoard}
        onClose={() => {
          setIsCreatingBoard(false);
        }}
      >
        <Input
          value={newBoardName}
          onChange={(e) => setNewBoardName(e.target.value)}
          placeholder="Board name"
        />
        <Button
          label="Create"
          onClick={async () => {
            await createBoard({ name: newBoardName, userId });
            await fecthBoards({ userId });
            setIsCreatingBoard(false);
          }}
        />
      </ModalContaienr>
    </div>
  );
}

export default SidebarContainter;
