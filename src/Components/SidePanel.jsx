import React from 'react'
import { FaSearch,FaBell,FaMoon,FaInfoCircle,FaCloudUploadAlt } from 'react-icons/fa'
import Google_Drive_icon_ from '../assets/image/Google_Drive_icon_(2020).svg'
import upload from '../assets/image/upload.svg'
import HubSpot from '../assets/image/HubSpot.svg'

const SidePanel = () => {
  return (
    <>
        <div className="w-72 bg-grey-100  font-['Calibri'] p-2 mr-4 left-0 right-0">
        <div className='flex items-center shadow-lg rounded-xl bg-slate-100 py-2 px-4 mb-4'>
            <div className="bg-gray-200 rounded-xl w-28 flex font-['Calibri'] items-center  py-1"><FaSearch icon="fa-solid fa-magnifying-glass" className='mr-2 ml-2'/>Search</div>
            <div className='flex row-auto text-[rgb(76,91,147)]'><FaBell info='search' className='ml-2 mr-4'/><FaMoon info='bell'className='mr-4'/><FaInfoCircle info='info'/><img
          src="https://via.placeholder.com/40"
          
          alt="Profile"
          className="rounded-full ml-4 -mt-1 max-w-6 max-h-6"
        /></div>
        </div>
        <div className='shadow-lg rounded-xl bg-white p-4 mt-4'>
            <h2 className='text-lg font-extrabold font-["Calibri"] mb-2 flex items-center text-[rgb(76,91,147)] '>Upload Videos, Audios or Transcript</h2>
            <div className='mb-3 bg-[#f5f7ff] w-full mr-2 flex items-center justify-center px-10 py-2 rounded-lg text-md font-bold text-[rgb(76,91,147)]'><img src={Google_Drive_icon_} className='max-w-4 max-h-4 mr-3 inline -ml-8 '/>Upload files from Drive</div>
            <div className='mb-4 bg-[#f5f7ff] w-fit mr-2 flex items-center  px-10 py-2 rounded-lg text-md font-bold text-[rgb(76,91,147)]'><img src={upload} className='max-w-8 max-h-8 mr-3 inline -ml-8 '/>Upload files from this computer</div>
            <h2 className='text-lg font-extrabold font-["Calibri"] mb-2 flex items-center text-[rgb(76,91,147)] '>Data Integration</h2>
            <div className='mb-4  -ml-3 flex items-center  px-10 py-2 text-xl font-extrabold text-[rgb(76,91,147)]'><img src={HubSpot} className='max-w-8 max-h-8 mr-3 inline -ml-8 '/>HubSpot <span className='bg-[#f5f7ff] text-gray-500 font-mono font-semibold text-sm p-1 ml-20'>CRM</span></div>
            <div className="flex items-center mb-2 ml-4 -mt-2">
            <input type="checkbox" className="mr-2 -mt-5" />
            <span>Some data integration I have to ask about</span>
          </div>
          <div className="flex items-center ml-4 -mt-2 ">
            <input type="checkbox" className="mr-2" />
            <span>Some data integration</span>
          </div>
          

        </div>
        <button className="py-3 bg-[#4319ff] text-white rounded-lg mt-6 font-['Calibri'] px-[81px]">Generate Report</button>
        </div>
        
    </>
  )
}

export default SidePanel
