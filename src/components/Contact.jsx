/* eslint-disable react/no-unescaped-entities */
import {
  SiMedium,
  SiLinkedin,
  SiTwitter,
  SiGmail,
} from "react-icons/si";

import Priya from "../assets/Priya.jpeg";

const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="CONTACT dark:bg-[#111827] p-5 mt-[5rem] font-['Poppins']  max-sm:p-2 "
      >
        <div className="bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:from-[#111827] dark:to-[#111827] dark:shadow-none rounded-2xl shadow-xl WRAPPER mx-2 flex justify-between p-7 mb-7 max-sm:flex-col-reverse max-sm:p-2">
          <div className="ABOUT p-7">
            <h2 className="text-[#00040f] font-semibold dark:text-slate-300 leading-7 text-xl tracking-wider max-sm:text-center">
              Priya Santhini
            </h2>
            <p className="text-gray-600 dark:text-slate-400 leading-[30.8px] mt-7 max-w-[400px] max-sm:text-center">
            Whatfix (PPO) | Top Product Marketing Voice 🎖️ | Partner Marketing | Digital Transformation | MBA
            </p>
            <div className="SOCIALS text-[#00040f] dark:text-white text-2xl flex gap-7 mt-5 max-sm:justify-evenly">
              <a
                href="https://www.linkedin.com/in/priya-santhini/"
                className=" hover:text-slate-500  dark:hover:text-sky-300"
              >
                <SiLinkedin />
              </a>
              <a
                href=""
                className=" hover:text-slate-500  dark:hover:text-sky-300"
              >
                <SiTwitter />
              </a>
              <a
                href="priyasanthini18@gmail.com"
                className=" hover:text-slate-500  dark:hover:text-sky-300"
              >
                <SiGmail />
              </a>
            </div>
            <div className="flex gap-5 max-sm:justify-center">
              <button className="py-3 px-4 bg-gradient-to-t dark:from-cyan-500 dark:to-slate-300  from-blue-600 to-cyan-600 font-medium text-[12px] text-[#e1e1e1] dark:text-black outline-none mt-10 mr-3 rounded ">
                <a href="https://drive.google.com/file/d/1R3M9yOtagCin0myrs-UUu4K5q1Qo7P0c/view?usp=drivesdk">Resume</a>
              </button>

              <button className="py-3 px-4 bg-gradient-to-t dark:from-cyan-500 dark:to-slate-300 from-blue-600 to-cyan-600  font-medium text-[12px] text-[#e1e1e1] dark:text-black outline-none mt-10 mr-3 rounded ">
                <a
                  href="https://medium.com/@Product_Mastery_Hub"
                  className="flex gap-2 items-center justify-center"
                >
                  <SiMedium />
                  Blog
                </a>
              </button>
            </div>
          </div>

          <div className="IMG p-0 max-sm:grid max-sm:place-content-center">
            <img
              src={Priya}
              alt="Priya Santhini"
              className="h-[200px] max-sm:h-[150px] border-[#00040fab] dark:border-slate-300 border-4 rounded-full mt-12"
            />
          </div>
        </div>

        <p className="text-[#00040f] dark:text-slate-300 mx-2 text-center capitalize tracking-widest max-sm:text-sm p-2">
          made with ❤️ By Priya and & the Open Source Community
        </p>
      </section>
    </>
  );
};
export default Contact;
