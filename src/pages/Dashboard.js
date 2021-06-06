import React from 'react';
import Main from '../components/Main/Main';
import SideBar from '../components/SideBar/SideBar';


function Dashboard() {
    return (
      <div className="h-screen grid grid-cols-12 dark:bg-black transition duration-300">
            <SideBar />
            <Main/>
            
      </div>
    );
}

export default Dashboard
