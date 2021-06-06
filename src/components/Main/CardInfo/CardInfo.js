import React from 'react';
import CircleChart from '../Chart/CircleChart';
import CircleChartTwo from '../Chart/CircleChartTwo';
import { EyeIcon } from '@heroicons/react/solid';
import visa from '../../../assets/visa.png'

function CardInfo() {
    return (
      <div className="mt-6 p-8 border-b border-gray-300">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <div className="flex space-x-6">
              <div className="flex items-center space-x-3">
                <div className="w-24">
                  <CircleChart />
                </div>
                <div>
                  <h1 className="font-semibold">Credit Limit</h1>
                  <p className="orange-text font-bold">
                    1600/
                    <span className="text-gray-400 text-sm ">2000 USD</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-24">
                  <CircleChartTwo />
                </div>
                <div>
                  <h1 className="font-semibold">Online Limit</h1>
                  <p className="yellow-text font-bold">
                    250/<span className="text-gray-400 text-sm ">2000 USD</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex space-x-6 items-center mt-6">
              <div className="bg-gray-200 p-3 font-bold text-gray-700 rounded-lg cursor-pointer hover:bg-gray-300">
                <h1>Control Limit</h1>
              </div>
              <div className="bg-gray-200 p-3 flex items-center text-gray-700 font-bold rounded-lg cursor-pointer hover:bg-gray-300">
                <EyeIcon className="h-5" />
                <h1 className="text-md  ml-3">ccv</h1>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-b from-yellow-400 to-yellow-700 rounded-md p-5 flex flex-col ">
            <img src={visa} className="w-12 object-contain" alt="" />
            <div className="card-details">
              <p className="text-sm">Balance</p>
              <h1 className="text-2xl">$2.675</h1>
              <p className="pr-28 mt-4 text-sm">3433  23232 3232 424</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default CardInfo
