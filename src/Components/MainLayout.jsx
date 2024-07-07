import React from 'react';
import Dashboard from './Dashboard';
import MainPage from './MainPage';
import SidePanel from './SidePanel';


const MainLayout = () => {
  return (
    <div className="flex">

    
      <Dashboard />
      <MainPage />
      <SidePanel />
    </div>
  );
};

export default MainLayout;