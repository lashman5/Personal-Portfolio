import Project_prop from "./Project_prop";
import {
  Research,
  EV,
  Blockchain,
} from "../constants/Constant";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="projects"
      className="EXPERIENCE p-5 mx-20 min-h-screen font-['Poppins']  max-sm:p-2 max-sm:mx-5"
    >
      <div className="WRAPPER mt-20" data-aos="fade-down">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5  max-sm:text-4xl  ">
          Projects
        </h1>

        <div
          className="PROJECTS mt-16 grid gap-10 grid-cols-2 max-sm:grid-cols-1"
          data-aos="zoom-out-down"
        >
          <Project_prop
            title="SheChoice: Insights into Sanitary Napkin Preferences"
            para="A comprehensive market research study analyzing consumer preferences and the factors influencing their choices in the sanitary napkin market. 
            The project aims to empower brands with actionable insights to better cater to women's hygiene needs."
            img={Research}
            link=""
          />
          <Project_prop
            title="GreenDrive: Decoding Customer Preferences in Electric Vehicles"
            para="A deep dive into customer behavior and preferences in the Electric Vehicle (EV) market using conjoint analysis. 
            The study focuses on improving convenience, affordability, and variety of options in the evolving EV sector."
            img={EV}
            link=""
          />
          <Project_prop
            title="ChainVote: Secure Decentralized E-Voting on Blockchain"
            para="A cutting-edge e-voting system designed using open blockchain technology, ensuring transparency and tamper-proof vote recording. 
            It integrates advanced security features such as cryptographic protocols and multi-factor authentication to safeguard electoral integrity."
            img={Blockchain}
            link=""
          />
          
        </div>
      </div>
    </section>
  );
};
export default Projects;
