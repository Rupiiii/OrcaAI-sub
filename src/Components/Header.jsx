// src/components/Header.js
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="bg-gray-100 py-2 px-4 flex items-center font-['Calibri']">
      <button className="text-[rgb(76,91,147)] flex items-center bg-gray-200 p-1 rounded-lg">
        <FaArrowLeft className="mr-2" />
        <span >Back</span>
      </button>
      <span className="ml-4 text-sm text-[rgb(76,91,147)]">Templates / Sales Effectiveness / BANT</span>
    </div>
  );
};

export default Header;
