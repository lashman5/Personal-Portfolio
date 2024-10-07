import React from 'react';

const Project_prop = ({ img, title, para }) => {
  return (
    <div 
      className="shadow-2xl rounded-3xl bg-gradient-to-tl from-[#e1e1e1] to-[#fff] 
      dark:from-[#00040F] dark:to-[#0B274C] border-[#00040f] h-[270px] max-sm:h-[480px] p-5 
      hover:bg-gradient-to-tl hover:from-[#f0f4f8] hover:to-[#f8f9fb] 
      dark:hover:from-[#112040] dark:hover:to-[#1c355d] transition duration-300 transform hover:scale-105 flex flex-col"
    >
      <div className="HEADER flex items-center mb-4">
        <div className="ml-2 mr-5 w-16 h-16 flex-shrink-0">
          <img
            src={img}
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h1 className="ml-2 font-semibold tracking-wide bg-clip-text text-[#00040f] dark:text-slate-300 text-xl">
          {title}
        </h1>
      </div>
      <p className="mt-1 ml-2 mr-1 text-slate-500 text-m flex-grow overflow-y-auto">
        {para}
      </p>
    </div>
  );
};

export default Project_prop;