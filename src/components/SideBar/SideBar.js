import React from 'react'
import Chart from './Chart/Chart';
import Transaction from './Transaction/Transaction';

function SideBar() {
    return (
      <div className="sidebar">
        <div className="mt-10 p-5 ">
          <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-200">
            My Balance
          </h1>
          <p className="text-3xl text-purple-500 mt-4 font-bold">$ 60.13</p>
          <p className="text-gray-400 text-sm mt-3 dark:text-gray-200">
            USD/EUR <span className="ml-5">0,23312/1,2324</span>
          </p>
          <div>
            <Chart />
          </div>
          <div>
            <Transaction />
          </div>
        </div>
      </div>
    );
}

export default SideBar
