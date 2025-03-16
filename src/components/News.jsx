import React from 'react'
import testpic from '../assets/wike.jpeg'
import DPNewsFeed from './DPNewsFeed'
import PTNewsFeed from './PTNewsFeed'

const News = () => {
  return (
    <div className="w-full lg:w-[68%] p-4 bg-white shadow-md rounded-lg">

        <DPNewsFeed />
        <br />
        <br />
        <br />
        <PTNewsFeed />


{/*         
          <h2 className="text-xl font-semibold mb-4">Latest Political Headlines</h2>

          <div className="border-b-[#e7e4e4] pb-2 mb-2">
            <img 
              src= {testpic} 
              alt="Election results" 
              className="w-full h-56 object-cover rounded-lg mb-3"
            />
            <h3 className="text-lg font-medium">Election Results Announced</h3>
            <p className="text-sm text-gray-600">
              The latest election results are out. Find out who won in the key states.
            </p>
            <a href="#" className="text-green-600 font-semibold">Read More</a>
          </div>


          <div className="flex flex-wrap gap-6">
            <div className="flex-1 min-w-[48%]">
                <img 
                src={testpic} 
                alt="Election update" 
                className="w-full h-32 object-cover rounded-lg mb-2"
                />
                <h3 className="text-base font-medium text-[0.85rem]">
                Minnesota House Democrats restore tie, Iowa House Republicans maintain supermajority in March 11 special elections
                </h3>
            </div>

            <div className="flex-1 min-w-[48%]">
                <img 
                src={testpic} 
                alt="State controller news" 
                className="w-full h-32 object-cover rounded-lg mb-2"
                />
                <h3 className="text-base font-medium text-[0.85rem]">
                Did you know that 20 states have established the state-level position of controller (sometimes called comptroller)?
                </h3>
            </div>

            <div className="flex-1 min-w-[48%]">
                <img 
                src={testpic} 
                alt="Ballotpedia data services" 
                className="w-full h-32 object-cover rounded-lg mb-2"
                />
                <h3 className="text-base font-medium text-[0.85rem]">
                America's most trusted source for accurate election information
                </h3>
            </div>
            
            <div className="flex-1 min-w-[48%]">
                <img 
                src={testpic} 
                alt="Ballotpedia data services" 
                className="w-full h-32 object-cover rounded-lg mb-2"
                />
                <h3 className="text-base font-medium text-[0.85rem]">
                America's most trusted source for accurate election information
                </h3>
            </div>
          </div> */}


          {/* <div className="border-b border-[#e7e4e4] pb-2 mb-2 flex gap-4">
            <img 
              src={testpic} 
              alt="Policy change" 
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div>
              <h3 className="text-lg font-medium">New Policies Introduced</h3>
              <p className="text-sm text-gray-600">
                The government has rolled out new policies affecting the economy.
              </p>
              <a href="#" className="text-green-600 font-semibold">Read More</a>
            </div>
          </div>

          <div className="border-b-[#e7e4e4] pb-2 mb-2 flex gap-4">
            <img 
              src={testpic}
              alt="Political rally" 
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div>
              <h3 className="text-lg font-medium">Upcoming Political Rally</h3>
              <p className="text-sm text-gray-600">
                Major political parties are preparing for a nationwide rally next month.
              </p>
              <a href="#" className="text-green-600 font-semibold">Read More</a>
            </div>
          </div> */}


        </div>
  )
}

export default News