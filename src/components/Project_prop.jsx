import React from 'react';

const Project_prop = ({ img, title, para }) => {
  return (
    <div className="shadow-xl bg-[#e1e1e1] dark:bg-transparent dark:border-white border rounded-xl h-[280px] max-sm:h-[480px] p-5 hover:bg-gradient-to-tl from-[#ccc] to-[#e1e1e1] dark:from-[#00040F] dark:to-[#0B274C] flex flex-col">
      <div className="HEADER flex items-center mb-4">
        <div className="ml-2 mr-5 w-16 h-16 flex-shrink-0">
          <img
            src={img}
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h1 className="ml-2 font-semibold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200 text-xl">
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