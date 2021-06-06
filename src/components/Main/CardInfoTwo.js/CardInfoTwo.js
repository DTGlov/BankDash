import React from "react";
import { EyeIcon } from "@heroicons/react/solid";
import chase from "../../../assets/chase.png";
import ChartOne from "./ChartOne";
import ChartTwo from "./ChartTwo";

function CardInfoTwo() {
  return (
    <div className="mt-6 p-8">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="flex space-x-6">
            <div className="flex items-center space-x-3">
              <div className="w-24">
                <ChartOne/>
              </div>
              <div>
                <h1 className="font-semibold">Credit Limit</h1>
                <p className="orange-text font-bold">
                  900/
                  <span className="text-gray-400 text-sm ">2000 USD</span>
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-24">
                <ChartTwo />
              </div>
              <div>
                <h1 className="font-semibold">Online Limit</h1>
                <p className="yellow-text font-bold">
                  20/<span className="text-gray-400 text-sm ">2000 USD</span>
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
        <div className="bg-gradient-to-b from-blue-200 to-blue-700 rounded-md p-5 flex flex-col ">
          <img src={chase} className="w-12 object-contain" alt="" />
          <div className="card-details">
            <p className="text-sm">Balance</p>
            <h1 className="text-2xl">$120.75</h1>
            <p className="pr-28 mt-4 text-sm">3400 21232 8232 904</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardInfoTwo;
