import React, { useState } from "react";
import {
  RiEyeFill,
  RiEyeOffFill,
  RiSearch2Line,
  RiSettingsFill,
  RiUserFill,
} from "react-icons/ri";
import VaultifyIcon from '../assets/vaultify.png'
import MetaMaskIcon from '../assets/metamask-icon.svg'

// Dummy data for the table
const tableData = [
  { media: "A.png", address: "0xFabCdeFGhIjKlMnoPqRstUv", time: "12:34 PM,12/07/2023" },
  { media: "B.png", address: "0xFabCdeFGhIjKlMnoPqRs", time: "09:45 AM,12/07/2023" },
  { media: "C.png", address: "0xFabHijkLmNopQrsTuVwXy", time: "10:40 AM,12/07/2023" },
  { media: "D.png", address: "0xFabCdEfGhIjKlMnOpQrSt", time: "05:15 PM,12/07/2023 " },
  { media: "E.png", address: "0xFabGhIjKlMnOpQrStUvWxYz", time: "06:23 PM,12/07/2023" },
];

const Share = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-start justify-start bg-gradient-to-tr from-pink-500 via-[#12196B] to-[#0E0A2A] text-white overflow-hidden">
      <div className="w-full p-8">
        {/* Logo */}
        <div className="mb-8 ml-8">
          <img src={VaultifyIcon} alt="Logo" className="w-26 h-16" />
        </div>

        <div className="lg:mx-16">
          {/* Title and Address*/}
          <div className="flex flex-col lg:flex-row items-center mb-20">
            <div className="flex-grow md:mr-4">
              <h1 className="font-extrabold mb-4 text-left text-7xl ml-4 md:ml-0"><span className="text-yellow-500">Easy</span> Share<span className="text-yellow-500">,</span></h1>
              <div className="flex flex-row ml-4"><img src={MetaMaskIcon} alt="metamask" className="w-6 h-6 mr-2" /><h2>0xFabCdeFGIjlMnpQStUvWx2386wbjA</h2></div>
            </div>
            <div className="relative mb-4 md:mb-0">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="enter the address whom you want to share"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="lg:w-[600px] md:w-96 w-80 lg:mt-0 mt-10 px-6 py-3 border font-bold rounded-xl border-none focus:outline-none"
                style={{ background: '#4C4966', color: '#fff' }}
              />
              <span
                className="absolute lg:top-3 top-14 text-2xl right-3 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <RiEyeFill color="#fff" /> : <RiEyeOffFill color="#fff" />}
              </span>
            </div>
            {/* Validate Button */}
            <button
              className="w-40 mt-4 lg:mt-0 md:ml-2 flex items-center  bg-gradient-to-r from-pink-500 to-purple-800 mr-8 hover:bg-gradient-to-r hover:from-pink-700 hover:to-purple-900 rounded-2xl justify-center focus:outline-none"
              style={{
                color: '#fff',
                padding: '.75rem',
              }}
            >
              Validate
              <RiSettingsFill className="ml-2" />
            </button>
          </div>

          {/* Previously Shared with Section */}
          <div className="mt-6">
            <p className="font-normal text-3xl mb-10">Previously <span className="text-yellow-500">Shared</span> with,</p>

            {/* Manage Accessibility and Search */}
            <div className="w-full p-8 bg-white rounded-3xl shadow-lg" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
              <div className="flex flex-col md:flex-row items-center mb-2">
                <button
                  className="lg:ml-auto ml-8 mb-4 lg:mb-0 text-white rounded-2xl bg-gradient-to-r from-orange-500 to-orange-800 mr-8 hover:bg-gradient-to-r hover:from-orange-700 hover:to-orange-900 focus:outline-none flex items-center"
                  style={{ padding: '0.75rem 1.5rem' }}
                >
                  Manage Accessibility
                  <RiUserFill className="ml-2" />
                </button>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search your shared files here..."
                    className="lg:w-96 h-10 px-10 py-1 border rounded-xl border-none focus:outline-none"
                    style={{ background: '#4C4966', color: '#fff' }}
                  />
                  <span className="absolute top-3 left-3">
                    <RiSearch2Line color="#fff" />
                  </span>
                </div>
              </div>


              {/* Table */}
              <div className="overflow-scroll md:overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left py-2">Media</th>
                      <th className="text-left py-2">Address</th>
                      <th className="text-left py-2">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((item, index) => (
                      <React.Fragment key={index}>
                        <tr className="border-b-2">
                          <td className="py-2">{item.media}</td>
                          <td className="py-2">{item.address}</td>
                          <td className="py-2">{item.time}</td>
                        </tr>
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
