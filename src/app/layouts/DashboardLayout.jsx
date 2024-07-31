import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarContainer from '../containers/common/Navbar.container';
import SidebarContainter from '../containers/common/Sidebar.containter';

// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { REPO_LINK } from '../../constants';

// Dashboard Layout on all routes starting from "/dashboard"
function DashboardLayout() {
  return (
    <div className="dashboard-layout-container">
      <SidebarContainter />
      <div className="right-section">
        <NavbarContainer />

        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
