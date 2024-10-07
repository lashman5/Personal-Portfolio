import {
  Jira,
  Google,
  Excel,
  Analytics,
  PowerBI,
  Office,
  Tableau,
  SQL,
  C
} from "../constants/Constant";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "./Img_prop";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="SKILLS p-5 mx-20 mb-10  font-['Poppins']  max-sm:p-2 max-sm:mx-5">
        <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center max-sm:text-4xl ">
          SKILLS
        </h1>
        <div
          className="IMG grid place-content-center p-5 grid-cols-3 gap-5 max-sm:p-2 mt-10"
          data-aos="zoom-out-up"
        >
          <Image img={Analytics}></Image>
          <Image img={PowerBI}></Image>
          <Image img={Tableau}></Image>
          <Image img={SQL}></Image>
          <Image img={Jira}></Image>
          <Image img={Excel}></Image>
          <Image img={Google}></Image>
          <Image img={Office}></Image>
          <Image img={C}></Image>
        </div>
      </section>
    </>
  );
};
export default Skills;
