const Aside = () => {
    return (
      <div className="w-full lg:w-[32%] p-4 bg-white shadow-md rounded-lg space-y-6">
  
        {/* Advertisement */}
        <div className="p-2">
          <h2 className="font-semibold text-[0.563rem] text-[#999] text-center uppercase tracking-[0.2rem]">Advertisement</h2>
          <a href="#" target="_blank">
            <img src="/BetKing-300x250-English.gif" alt="advertisement" />
          </a>
        </div>
  
        <hr />
  
        {/* Most Read */}
        <div className="p-2">
          <h2 className="text-xl font-semibold mb-2">Most Read</h2>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>🔹 2025 Presidential Elections: What to Expect</li>
            <li>🔹 New Cabinet Appointments Announced</li>
            <li>🔹 Economic Reforms and Their Impact</li>
            <li>🔹 Supreme Court Ruling on Electoral Disputes</li>
            <li>🔹 The Future of Nigeria’s Political Landscape</li>
          </ul>
        </div>
  
        <hr />
  
        {/* Quote of the Day */}
        <div className="p-2">
          <h2 className="text-xl font-semibold mb-2">Quote of the Day</h2>
          <p className="text-gray-700 italic">
            "Leadership is not about being in charge. It is about taking care of those in your charge."
          </p>
        </div>
  
        <hr />
  
        {/* Upcoming Political Events */}
        <div className="p-2">
          <h2 className="text-xl font-semibold mb-2">Upcoming Political Events</h2>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>🗓️ National Assembly Meeting - March 20</li>
            <li>🗓️ Policy Reform Summit - April 5</li>
            <li>🗓️ Democracy Day Symposium - June 12</li>
            <li>🗓️ Gubernatorial Debates - August 15</li>
            <li>🗓️ Electoral Reform Workshop - October 10</li>
            <li>🗓️ Presidential Debate - November 5</li>
            <li>🗓️ End of Year Political Review - December 20</li>
          </ul>
        </div>
  
        <hr />
  
        {/* Exclusive Events (Paid) */}
        <div className="p-2 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Exclusive Events</h2>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>💼 Political Strategy Masterclass (Paid Webinar) - April 20</li>
            <li>📢 Online Political Debate (Sponsored Entries) - June 25</li>
            <li>🎙️ Political Commentary Workshop (VIP Access) - August 10</li>
            <li>📊 Election Prediction Contest (Entry Fee & Prizes) - October 1</li>
            <li>🤝 Private Networking Dinner (Ticketed Event) - December 15</li>
          </ul>
          <button className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition">
            Register Now
          </button>
        </div>
  
        <hr />
  
        {/* Interactive Section - Quiz */}
        <div className="p-2 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Political Quiz 🎯</h2>
          <p className="text-gray-700 mb-3">Who was Nigeria's first executive president?</p>
          <div className="space-y-2">
            <button className="block w-full bg-gray-700 hover:bg-gray-800 text-white py-2 rounded-md transition">A) Nnamdi Azikiwe</button>
            <button className="block w-full bg-gray-700 hover:bg-gray-800 text-white py-2 rounded-md transition">B) Olusegun Obasanjo</button>
            <button className="block w-full bg-gray-700 hover:bg-gray-800 text-white py-2 rounded-md transition">C) Shehu Shagari</button>
          </div>
        </div>
  
        <hr />
  
        {/* Meme of the Week */}
        <div className="p-2 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Meme of the Week 🎭</h2>
          <img src="/political-meme.jpg" alt="Political Meme" className="w-full rounded-md"/>
          <p className="text-gray-700 mt-2 text-sm text-center">Caption this meme below 👇</p>
        </div>
  
        <hr />
  
        {/* Political Merchandise */}
        <div className="p-2 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2">🔥 Political T-Shirts & Merch</h2>
          <img src="/merch-preview.jpg" alt="Political Merchandise" className="w-full rounded-md"/>
          <button className="mt-3 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md transition">
            Shop Now
          </button>
        </div>
  
        <hr />
  
        {/* Political Trend Report */}
        <div className="p-2 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2">📊 Political Trend Report</h2>
          <p className="text-gray-700 mb-3">Get exclusive insights & political analysis every month.</p>
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md transition">
            Download Report
          </button>
        </div>
  
        <hr />
  
        {/* Hall of Fame & Shame */}
        <div className="p-2 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2">🏆 Hall of Fame & Shame</h2>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>✅ Best Performing Politician: [Name]</li>
            <li>🚫 Most Controversial Politician: [Name]</li>
          </ul>
        </div>
  
        <hr />
  
        {/* Quick Poll */}
        <div className="py-4 px-2 sticky top-0 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Quick Poll</h2>
          <p className="text-gray-700 mb-3">Do you support the new economic policy?</p>
          <div className="space-y-2">
            <button className="block w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition">Yes</button>
            <button className="block w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md transition">No</button>
            <button className="block w-full bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-md transition">Undecided</button>
          </div>
        </div>
  
      </div>
    );
  };
  
  export default Aside;
  