const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6 rounded-b-2xl mt-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
          
          <div className="md:w-1/3">
            <h2 className="text-lg font-semibold mb-3">About BallotNaija</h2>
            <p className="text-sm text-gray-400">
              BallotNaija provides insights, reports, and updates on Nigeria’s political landscape, helping citizens stay informed and engaged.
            </p>
          </div>
  
          <div className="md:w-1/3">
            <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
            <ul className="text-sm text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-gray-200">Home</a></li>
              <li><a href="#" className="hover:text-gray-200">Reports</a></li>
              <li><a href="#" className="hover:text-gray-200">Events</a></li>
              <li><a href="#" className="hover:text-gray-200">Merch</a></li>
              <li><a href="#" className="hover:text-gray-200">Contact</a></li>
            </ul>
          </div>
  
          <div className="md:w-1/3">
            <h2 className="text-lg font-semibold mb-3">Newsletter</h2>
            <p className="text-sm text-gray-400 mb-3">
              Subscribe to get the latest political insights directly in your inbox.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-3 py-2 text-gray-900 rounded-l-md focus:outline-none"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white rounded-r-md transition">
                Subscribe
              </button>
            </form>
  
            <h2 className="text-lg font-semibold mt-6 mb-3">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white text-xl"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-400 hover:text-white text-xl"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-400 hover:text-white text-xl"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-400 hover:text-white text-xl"><i className="fab fa-youtube"></i></a>
              <a href="#" className="text-gray-400 hover:text-white text-xl"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
  
        </div>
  
        <div className="mt-6 text-center text-gray-500 text-xs border-t border-gray-700 pt-4">
          &copy; {new Date().getFullYear()} BallotNaija. All rights reserved.
        </div>
  
      </footer>
    );
  };
  
  export default Footer;
  