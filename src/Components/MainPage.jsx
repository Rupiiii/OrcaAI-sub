import React from 'react'
import { FaCaretDown } from 'react-icons/fa'
import { FaCircleUser } from 'react-icons/fa6'
import { FaLock } from 'react-icons/fa'
import { FaCaretRight } from 'react-icons/fa'
import { FaPen } from 'react-icons/fa'
import Header from './Header'

const MainPage = () => {
  return (
    <>
      <div className="flex flex-col flex-grow">
      <Header />
        <div className="p-2   bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-gray-100  p-8">
        <h1 className="text-3xl font-bold mb-6 text-[rgb(76,91,147)] font-['Calibri']">Analyse the calls for Soft Skills Coaching</h1>
        
        
        <div className="mb-3">
          <h2 className="text-lg font-bold mb-2 flex items-center text-[rgb(76,91,147)] ">
            <FaCaretDown icon={'fa-solid fa-caret-down'} className="mr-2" />
            How does it work?
          </h2>
          {/* Add your content here */}
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2 flex items-center text-[#4c5b93]"> <FaCaretDown icon={'fa-solid fa-caret-down'} className="mr-2" />When should you use this?</h2>
          {/* Add your content here */}
        </div>

        <div className="mb-6 rounded-xl shadow-sm shadow-gray-700 p-6">
        
          <h2 className="text-base font-semibold mb-2 font-['Calibri'] inline-block mr-4">Setup<span className="block w-full h-1 bg-[#835fff] mt-1 mb-5 rounded-md"></span></h2>
          
          
          <h2 className="text-base text-gray-300 font-semibold mb-5 font-['Calibri'] inline-block ">Sample Output</h2>

         <div className='rounded-xl shadow-sm shadow-gray-700 p-6'>
          <div className="mb-8 ">
            <h3 className="text-md font-semibold mb-3 flex text-[#4c5b93] items-center"><FaCircleUser icon="fa-duotone fa-circle-user" style={{"--fa-primary-color": "#7a56fe", "--fa-secondary-color": "#dedce5",}} className='mr-2' />Call Opening</h3>
            <p className="mb-3 text-lg flex items-center"><FaCaretDown icon={'fa-solid fa-caret-down'} className="mr-2" />Was the purpose of the call stated in the beginning?</p>
            <h5 className="text-gray-400 text-xs pl-7 mb-4 font-['Calibri']">HOW WILL THIS BE SCORED ?</h5>
          <div className='rounded-xl shadow-sm shadow-gray-700 py-2 px-4 ml-8 '>
            <p className="text-gray-500 flex items-center mb-1 font-['Calibri']"><span>Was the purpose of the call stated in the beginning ?</span><FaLock icon={"fa-solid fa-lock-keyhole"} className="ml-2"/><button className="ml-60 rounded-md px-2 shadow-md text-[#835fff]  flex items-center">
                <FaPen icon="fa-solid fa-pen" className='mr-1' />
                <span className="mr-1 text-base font-semibold font-['Calibri']  ">Edit</span>
                
              </button></p>
             <p className="font-['Calibri'] text-[#4c5b93] text-md font-medium mb-0"> Did the PST member greet the customer and start the call opening with good energetic tone ?</p>
             <p className="font-['Calibri'] text-[#4c5b93] text-md font-medium"> Did the PST member use the right salutation and greeting at the onset ?</p>
          </div>
          </div>
          

          <div className="mb-5    ">
          <div className=" left-0 right-0 -mx-6 border-t border-gray-300 mb-3"></div>
            <h3 className="text-md font-semibold mb-3  flex text-[#4c5b93] items-center"><FaCircleUser icon="fa-duotone fa-circle-user" style={{"--fa-primary-color": "#7a56fe", "--fa-secondary-color": "#dedce5",}} className='mr-2' />Greeting</h3>
            <p className="mb-3 text-lg flex items-center"><FaCaretRight icon={'fa-solid fa-caret-right'} className="mr-2" />Did the salesperson use an appropriate opening greeting?</p>
            <div className=" left-0 right-0 -mx-6 border-b border-gray-300"></div>
          </div>

          <div className="mb-5 ">
          
            <h3 className="text-md font-semibold mb-3 flex text-[#4c5b93] items-center"><FaCircleUser icon="fa-duotone fa-circle-user" style={{"--fa-primary-color": "#7a56fe", "--fa-secondary-color": "#dedce5",}} className='mr-2' />Call Closing</h3>
            <p className="mb-3 text-lg flex items-center"><FaCaretRight icon={'fa-solid fa-caret-right'} className="mr-2" />Did the salesperson summarize the key points discussed during the call?</p>
            <div className=" left-0 right-0 -mx-6 border-b border-gray-300"></div>
          </div>

          <div className="mb-1">
          
            <h3 className="text-md font-semibold mb-3 flex text-[#4c5b93] items-center"><FaCircleUser icon="fa-duotone fa-circle-user" style={{"--fa-primary-color": "#7a56fe", "--fa-secondary-color": "#dedce5",}} className='mr-2' />Confidence</h3>
            <p className="mb-3 text-lg flex items-center"><FaCaretRight icon={'fa-solid fa-caret-right'} className="mr-2" />Did the sales person appear confident and knowledgeable about the product?</p>
            <div className=" left-0 right-0 -mx-6 border-b border-gray-300"></div>
          </div>
        </div>
        </div>
        </div>
      </div>
      </div>
   
    </>
  )
}

export default MainPage