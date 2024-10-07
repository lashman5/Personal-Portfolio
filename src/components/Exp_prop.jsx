const Exp_prop = (props) => {
  return (
    <>
      <div className="shadow-2xl rounded-3xl bg-[#e1e1e1] dark:bg-transparent border-[#00040f] h-[450px] max-sm:h-[500px] p-6 hover:bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:from-[#00040F] dark:to-[#0B274C] overflow-hidden">
        <div className="HEADER flex items-center p-1 mb-3">
          <div className="w-[50px] h-[50px] flex-shrink-0 mr-3">
            <img src={props.img} alt="" className="w-full h-full object-contain" />
          </div>

          <div className="flex-grow">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200 text-xl tracking-wide font-semibold leading-tight">
              {props.title}
            </h1>
          </div>
        </div>

        <p className="text-[#00040f] dark:text-white text-base font-medium p-1 mb-1 ml-1">
          {props.subtitle}
        </p>
        <p className="italic text-xs text-slate-700 dark:text-slate-300 mb-2 ml-2">
          {props.date}
        </p>
         
        <div className="h-[320px] overflow-y-auto pr-2">
          <p className="text-sm text-slate-700 dark:text-slate-300 my-1 ml-2 mr-1 leading-6">
            {props.para1}
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300 ml-2 mr-1 leading-6">
            {props.para2}
          </p>
        </div>
      </div>
    </>
  );
};

export default Exp_prop;