import React from 'react';
import { MailIcon, BellIcon, } from '@heroicons/react/solid';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';
import useDarkMode from '../../../hook/useDarkMode';


function Nav() {
  const [colorTheme,setTheme]=useDarkMode()
    return (
      <nav className="nav">
        <div className="flex space-x-3">
          <h1 className="font-bold cursor-pointer dark:text-purple-500">Personal</h1>
          <h1 className="nav-item">Transfers</h1>
          <h1 className="nav-item">Deposits</h1>
          <h1 className="nav-item">Cashback</h1>
          <h1 className="nav-item">FAQ</h1>
        </div>
        <div className="flex space-x-4">
          <MailIcon className="nav-icon relative" />
          <BellIcon className="nav-icon " />
          <div onClick={()=>setTheme(colorTheme)}>
            {colorTheme === "light" ? (
              <SunIcon className="nav-icon" />
            ) : (
              <MoonIcon className="nav-icon" />
            )}
          </div>

          <div className="bg-red-500 h-4 rounded-full w-4 absolute"></div>
          <img
            src="https://avatars.githubusercontent.com/u/72040567?v=4"
            className="h-8 rounded-full"
            alt="userpic"
          />
          <h1 className="nav-item">Sign Out</h1>
        </div>
      </nav>
    );
}

export default Nav
