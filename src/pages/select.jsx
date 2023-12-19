import React from "react";
import VaultifyIcon from '../assets/vaultify.png'
import JudgeIcon from '../assets/judge.png'
import LawyerIcon from '../assets/lawyer.png'
import ClientIcon from '../assets/client.png'
import { Link } from "react-router-dom";

const Select = () => {

  return (
    <div id="/select" className="min-h-screen flex items-start justify-start bg-gradient-to-tr from-[#0E0A2A] via-[#12196B] to-[#0E0A2A] text-white overflow-hidden">
      <div className="w-full p-8">
        {/* Logo */}
        <div className="mb-8 ml-8">
          <img src={VaultifyIcon} alt="Logo" className="w-26 h-16" />
        </div>

        <div className="lg:mx-10">
          <div className="flex flex-col lg:flex-col mb-10">
            <div className="flex-grow md:mr-4">
              <h1 className="font-extrabold mb-4 text-left text-7xl ml-4 md:ml-0"><span className="text-yellow-300">Select</span> your role<span className="text-yellow-300">,</span></h1>
            </div>
          </div>

          {/* Previously Shared with Section */}
          <div className="mt-6">

            {/* Manage Accessibility and Search */}
            <div className="w-full p-8 bg-white flex flex-col lg:flex-row md:justify-evenly rounded-3xl shadow-lg min-h-[500px]" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
            <Link to={'/lawyer'} className="mb-4 lg:mb-20 ml-8">
          <img src={LawyerIcon} alt="Logo" className="w-60 h-60" /><span className="text-4xl ml-20">I'm a<br/> <span className="text-yellow-300 font-bold ml-16">Lawyer</span></span>
        </Link>
        <Link to={'/client'} className=" mt-40 ml-8 hidden lg:block">
        <span className="text-4xl ml-20">I'm a<br/> <span className="text-yellow-300 font-bold ml-16">Client</span></span><img src={ClientIcon} alt="Logo" className="w-60 h-60" />
        </Link>
        <Link to={'/client'} className="mb-4 lg:mt-40 ml-8 block lg:hidden">
        <img src={ClientIcon} alt="Logo" className="w-60 h-60" /><span className="text-4xl ml-20">I'm a<br/> <span className="text-yellow-300 font-bold ml-16">Client</span></span>
        </Link>
        <Link to={'/judge'} className="mb-20 ml-8">
          <img src={JudgeIcon} alt="Logo" className="w-60 h-60" /><span className="text-4xl ml-20">I'm a<br/> <span className="text-yellow-300 font-bold ml-16">Judge</span></span>
        </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Select;
