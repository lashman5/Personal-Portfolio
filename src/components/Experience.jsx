import Exp_prop from "./Exp_prop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import {
  Whatfix,
  SSN,
  Adimaginz,
  MEXC,
  Sponsee
} from "../constants/Constant";

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        id="experience"
        className="p-5 mx-20 mb-10 font-medium font-['Poppins'] max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-20 ">
          <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center">
            EXPERIENCE
          </h1>

          <div
            className="EXPERIENCE mt-16 grid gap-20 max-sm:gap-10 max-sm:grid-cols-1 grid-cols-3"
            data-aos="zoom-in-up"
          >
            <Exp_prop
              img={Whatfix}
              title="Whatfix - Digital Adoption Platform"
              subtitle="Partner Marketing Intern"
              date="Banglore, Febraury 2024 - present"
              para1="● Managed end-to-end email marketing for clients, optimizing campaigns by analyzing open and click rates."
              para2="● Ensured timely project delivery, actively selecting templates and images that resonated with diverse client target audiences, enhancing the overall effectiveness of email marketing strategies."
            />
            <Exp_prop
              img={SSN}
              title="SSN School of Management"
              subtitle="Senior Placement Coordinator"
              date="Chennai, January 2023 - present"
              para1="● Organized corporate lectures, facilitating interactions between professionals and students to enhance understanding of industry trends and requirements."
              para2="● Managed student and college databases, ensuring accurate records, and implemented JIRA for improved task tracking and efficiency in placement activities."
            />
            <Exp_prop
              img={Adimaginz}
              title="Adimaginz Marketing Services Pvt Ltd."
              subtitle="Business Development Executive"
              date="Bangalore, August 2023 - present"
              para1="● Managed end-to-end email marketing for clients, optimizing campaigns by analyzing open and click rates."
              para2="● Ensured timely project delivery, actively selecting templates and images that resonated with diverse client target audiences, enhancing the overall effectiveness of email marketing strategies."
            />
            <Exp_prop
              img={MEXC}
              title="MEXC Global"
              subtitle="Business Development Specialist"
              date="Singapore, August 2023 - present"
              para1="● Conducted research on the Indian crypto market, analyzing trends and opportunities, and identified influencers using social platforms like YouTube, Instagram, and Telegram."
              para2="● Onboarded influencers through strategic meetings, demonstrating communication skills and fostering collaborations for marketing and enhancing brand growth."
            />
            <Exp_prop
              img={Sponsee}
              title="Sponsee"
              subtitle="Blockchain Developer"
              date="Singapore, April 2023 - present"
              para1="● Developed a blockchain-based bidding system for an NFT gaming project, ensuring transparent and secure transactions."
              para2="● Conducted end-to-end system testing, identifying and fixing issues to ensure seamless integration and functionality of the system."
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default Experience;
