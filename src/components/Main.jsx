import React from 'react';
import Profileshome from './Profileshome';
import News from './News';
import Aside from './Aside';

const Main = () => {
  return (
    <div>
      <Profileshome />


      <div className="news-aside flex flex-col lg:flex-row gap-6 w-[93%] mx-auto mt-8">
        
        <News />

        <Aside />

      </div>
    </div>
  );
};

export default Main;


