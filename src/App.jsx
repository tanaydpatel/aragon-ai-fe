import React from 'react';
import { Route, Routes, } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from 'react-query';
import { Notifications } from '@mantine/notifications';

import './styles/global.scss';
import { ROUTES } from './constants';
import DashboardLayout from './app/layouts/DashboardLayout';
import DashboardContainer from './app/pages/dashboard/containers/Dashboard.container';

const queryClient = new QueryClient();

function App() {



  return (
    <QueryClientProvider client={queryClient}>
      <Notifications position="top-right" />
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path={ROUTES.DASHBOARD} element={<DashboardContainer />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
