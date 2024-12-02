import Lottie from "lottie-react";
import marketing from "../assets/lottie/marketing.json";
import scroll from "../assets/lottie/scroll.json";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="p-5 mx-20 font-medium font-['Poppins'] max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-20 flex max-sm:flex-col gap-2 items-center justify-between">
          <div className="INTRO text-[60px] leading-[80px] font-semibold max-sm:text-[42px] max-sm:leading-[70px] max-sm:font-semibold">
            <h3 className="text-[#00040f] dark:text-white">
              Hi, there! <br />I am
            </h3>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200">
              Priya Santhini
            </span>

            <p className="ABOUT text-lg max-sm:text-[15px] bg-clip-text text-transparent bg-gradient-to-r from-[#00040f] to-slate-600 dark:from-slate-500 dark:to-slate-200 max-w-[720px] mt-5 pl-1.5 text-left text-justify">
              I’m a results-oriented Marketing Strategist with an MBA specializing in Marketing and a background in Computer Science. My journey began with a successful internship at Whatfix, where I secured a pre-placement offer, marking my potential as a valuable asset. Leveraging my analytical skills and technical expertise, I create data-driven marketing campaigns that boost engagement and drive growth. Proficient in Excel, Power BI, and Google Marketing Platforms (Campaign Manager, Video 360, Search Ads 360), I excel at bridging the gap between marketing and technical teams, optimizing strategies that attract and retain customers for sustainable success.
            </p>
          </div>

          <Lottie
            animationData={marketing}
            loop={true}
            className="max-w-[500px] w-full h-auto max-sm:mt-8"
          />
        </div>

        <div className="flex justify-center items-center mt-5">
          <Lottie
            animationData={scroll}
            loop={true}
            className="max-w-[100px] w-full h-auto"
          />
       </div>
     </section>
    </>
  );
};
export default About;
