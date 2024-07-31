import React from 'react';
import { Outlet } from 'react-router-dom';

// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { REPO_LINK } from '../../constants';

// Dashboard Layout on all routes starting from "/dashboard"
function DashboardLayout() {
  return <Outlet />;
}

export default DashboardLayout;
