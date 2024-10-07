import Lottie from "lottie-react";
import education from "../assets/lottie/education.json";
import SREC from "../assets/srec.png";
import SSN from "../assets/SSN.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Education = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id="education"
      className="EXPERIENCE p-5 mx-20 min-h-screen font-['Poppins'] max-sm:p-2 max-sm:mx-5"
    >
      <div className="WRAPPER mt-20">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5 max-sm:text-4xl">
          Education
        </h1>
        <div
          className="EDUCATION flex gap-5 justify-between flex-row-reverse max-sm:flex-col"
          data-aos="fade-right"
        >
          <div className="max-w-[520px] mt-[52px] max-sm:p-3">
            <div className="flex flex-col items-center mb-4">
              <img
                src={SSN}
                alt="SSN"
                className="w-[150px] h-[50px] mb-2"
              />
              <h1 className="bg-clip-text text-transparent bg-gradient-to-r max-sm:text-[17px] from-amber-500 via-orange-600 to-yellow-500 dark:from-[#ff6600] dark:to-slate-100 font-semibold text-2xl text-center tracking-wider">
                SSN School of Management Chennai
              </h1>
            </div>
            <div className="mt-7 flex flex-col gap-5 text-left pl-4">
              <h3 className="capitalize text-slate-800 dark:text-slate-300 text-xl max-sm:text-lg">
                Master of Business Administration
              </h3>
              <p className="italic capitalize text-gray-500 dark:text-slate-500 text-xl max-sm:text-lg leading-9">
                2023 - 2025
              </p>
              <p className="capitalize text-gray-500 dark:text-slate-500 text-xl max-sm:text-lg leading-9">
                Information Technology and Analytics
              </p>
            </div>
          </div>
          <div className="max-w-[520px] mt-[23px] p-7 max-sm:p-3">
            <div className="flex items-center gap-5 mb-4">
              <img
                src={SREC}
                alt="SREC"
                className="w-[90px] h-[90px]"
              />
              <h1 className="bg-clip-text text-transparent bg-gradient-to-r max-sm:text-[17px] from-amber-500 via-orange-600 to-yellow-500 dark:from-[#ff6600] dark:to-slate-100 font-semibold text-2xl tracking-wider">
                Sri Ramakrishna Engineering College Coimbatore
              </h1>
            </div>
            <div className="mt-7 flex flex-col gap-5 text-left pl-4">
              <h3 className="capitalize text-slate-800 dark:text-slate-300 text-xl max-sm:text-lg">
                Bachelor of Engineering
              </h3>
              <p className="italic capitalize text-gray-500 dark:text-slate-500 text-xl max-sm:text-lg leading-9">
                2019 - 2023
              </p>
              <p className="capitalize text-gray-500 dark:text-slate-500 text-xl max-sm:text-lg leading-9">
                Computer Science and Engineering
              </p>
            </div>
          </div>
          <Lottie
            animationData={education}
            loop={true}
            className="max-w-[350px] max-h-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Education;