import React from 'react';
import logo from '../../assets/ballotlogo.svg';

const Header = () => {
  return (
    <header className="w-full h-[5rem] shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-8 h-full">
        <div className="flex items-center space-x-20">
          <img src={logo} alt="BallotNaija Logo" className="w-[10rem] h-auto" />

          <nav>
            <ul className="hidden md:flex space-x-10 text-gray-700 text-lg">
              <li className="hover:text-green-600 hover:underline text-[#008751] cursor-pointer font-semibold">OUR MISSION</li>
              <li className="hover:text-green-600 hover:underline text-[#008751] cursor-pointer font-semibold">PROFILES</li>
              <li className="hover:text-green-600 hover:underline text-[#008751] cursor-pointer font-semibold">POLIQUIZ</li>
              <li className="hover:text-green-600 hover:underline text-[#008751] cursor-pointer font-semibold">CREATE POLL</li>
            </ul>
          </nav>
        </div>

        <div>
          <button className="py-2 px-6 bg-[#008751] text-white text-lg rounded-md hover:bg-green-700 transition font-semibold">
            DONATE
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
