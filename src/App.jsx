import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { QueryClient, QueryClientProvider } from 'react-query';

import { LOCAL_STORAGE_KEYS, ROUTES } from './constants';
import DashboardLayout from './app/layouts/DashboardLayout';
import DashboardContainer from './app/containers/Dashboard.container';
import { setUser } from './store/reducers/user.reducer';
import './styles/global.scss';
import ModalContaienr from './app/containers/common/Modal.contaienr';
import Input from './app/components/common/Input';
import Button from './app/components/common/Button';

const queryClient = new QueryClient();

function App() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.userId);

  const [userNameInput, setUserNameInput] = useState('');

  useEffect(() => {
    const localUser = localStorage.getItem(LOCAL_STORAGE_KEYS.USER_ID);
    if (localUser) {
      dispatch(setUser(localUser));
    }
  }, []);

  return (
    <main>
      {userId ? (
        <QueryClientProvider client={queryClient}>
          {userId}
          <Routes>
            <Route element={<DashboardLayout />}>
              <Route path={ROUTES.DASHBOARD} element={<DashboardContainer />} />
            </Route>
          </Routes>
        </QueryClientProvider>
      ) : (
        <ModalContaienr
          title="Enter user name"
          open={!userId}
          showClose={false}
        >
          <Input
            type=""
            value={userNameInput}
            onChange={(e) => {
              setUserNameInput(e.target.value);
            }}
            placeholder="User name"
          />
          <Button
            label="Continue"
            onClick={() => dispatch(setUser(userNameInput))}
          />
        </ModalContaienr>
      )}
    </main>
  );
}

export default App;
