import wike from '../assets/wike.jpeg'
import ireti from '../assets/Ireti.jpg'
import sanwo from '../assets/jide-sanwolu.jpeg'

const Profileshome = () => {
    return (
      <div className="popular w-[80%] m-auto pb-6 border-2 mt-12 rounded-2xl border-[#f2efef] p-3 md:pl-6 border-double">
        <p className="text-[0.8rem] text-[#A2A591]">TOP PROFILES THIS MONTH</p>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <div className="rounded-lg shadow-md bg-white w-58 h-60 flex flex-col items-center hover:shadow-lg hover:scale-105 transition">
                <div className="w-full h-[85%] overflow-hidden rounded-t-lg">
                    <img 
                    src={sanwo} 
                    alt="Politician" 
                    className="w-full h-full object-cover"
                    />
                </div>
                <div className="w-full text-center p-2">
                    <h3 className="text-lg font-semibold">Jide Sanwo-olu</h3>
                    <p className="text-sm text-gray-600">Governor | APC</p>
                </div>
            </div>

            <div className="rounded-lg shadow-md bg-white w-58 h-60 flex flex-col items-center hover:shadow-lg hover:scale-105 transition">
                <div className="w-full h-[85%] overflow-hidden rounded-t-lg">
                    <img 
                    src={ireti} 
                    alt="Politician" 
                    className="w-full h-full object-cover"
                    />
                </div>
                <div className="w-full text-center p-2">
                    <h3 className="text-lg font-semibold">Ireti Heebah Kingibe</h3>
                    <p className="text-sm text-gray-600">Senator | LP</p>
                </div>
            </div>

            <div className="rounded-lg shadow-md bg-white w-58 h-60 flex flex-col items-center hover:shadow-lg hover:scale-105 transition">
                <div className="w-full h-[85%] overflow-hidden rounded-t-lg">
                    <img 
                    src={wike} 
                    alt="Politician" 
                    className="w-full h-full object-cover"
                    />
                </div>
                <div className="w-full text-center p-2">
                    <h3 className="text-lg font-semibold">Nyesom Wike</h3>
                    <p className="text-sm text-gray-600">Minister | PDP</p>
                </div>
            </div>

  
        </div>
  
        <div className="text-center mt-6">
          <button className="bg-[#008751] text-white py-2 px-6 rounded-md hover:bg-[#006c3a] transition">
            View All Profiles
          </button>
        </div>
      </div>
    )
  }
  
  export default Profileshome;
  