
import React from 'react';
import { FaHome,FaFileAlt,FaChartPie,FaClipboard } from 'react-icons/fa';


const Dashboard = () => {
  return (
    <div className="w-60 bg-white shadow-lg rounded-xl font-['Calibri'] p-6 m-4 h-fit">
      <div className="mb-1">
        <h1 className="text-2xl font-bold text-center text-[rgb(76,91,147)] mb-16">ORCA AI</h1>
        <ul>
          <li className="flex items-center mb-8 text-[rgb(76,91,147)] ">
            <FaHome icon="fa-solid fa-house"  className="mr-2" />
            Home
          </li>
          <li className="flex items-center mb-8 text-[rgb(76,91,147)] ">
            <FaClipboard  icon="fa-regular fa-clipboard" className="mr-2" />
            Templates
          </li>
          <li className="flex items-center mb-8 text-[rgb(76,91,147)] ">
            <FaFileAlt icon="fa-solid fa-file"  className="mr-2" />
            Reports
          </li>
          <li className="flex items-center mb-[540px] text-[rgb(76,91,147)] ">
            <FaChartPie icon="fa-solid fa-chart-pie"  className="mr-2" />
            Sales Performance
          </li>
        </ul>
      </div>
      <div className="flex items-center mt-auto">
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="rounded-full mr-4"
        />
        <div>
          <h2 className="text-sm font-semibold text-[rgb(76,91,147)]">Adela Parkson</h2>
          <p className="text-xs text-gray-500">Manager</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
