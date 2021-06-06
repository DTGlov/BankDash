import React from 'react';
import { transdata } from './TransData';


function Transaction() {
    return (
      <div className="mt-4">
        <div>
          <h1 className="trans-header dark:text-white">Last Transactions</h1>
          <div className="mt-6">
            {transdata.map((data) => (
              <div className="trans-item" key={data.id}>
                <div className="flex items-center">
                  <img
                    src={data.image}
                    alt=""
                    className="w-12 p-2 bg-gray-200 rounded-lg"
                  />
                  <p className="ml-3 text-sm dark:text-white font-bold">{ data.activity}</p>
                </div>
                <h1 className={data.class}>{ data.amount}$</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Transaction
