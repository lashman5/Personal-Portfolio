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
              I am a Computer Science engineer and MBA student with a passion for blending technical expertise and management insights to drive innovation. With a track record of success in diverse projects, I am proficient in data analytics tools such as Excel, Power BI, SQL, and Google Analytics, and I’m eager to tackle real-world industry challenges, aspiring to thrive in a product management role.
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
