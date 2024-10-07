import React, { useState, useEffect } from 'react';
import { CgMenuRightAlt } from "react-icons/cg";
import { HiSun, HiMoon } from "react-icons/hi";
import Menu from "./Menu";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <section className="NAVBAR fixed top-0 left-0 w-full p-5 font-['Poppins'] max-sm:p-2 max-sm:max-h-[55px] bg-[#e2e2e2ab]/80 dark:bg-[#121212]/80 backdrop-blur-lg z-50">
      <div className="NAVBAR flex justify-between capitalize px-5">
        <div className="LOGO">
          <a
            href="#"
            className="text-3xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent dark:text-cyan-500 max-sm:text-2xl"
          >
            {"<Priya/>"}
          </a>
        </div>
        <div className="NAVLINKS text-[20px] max-sm:hidden flex gap-12 text-[#00040f] dark:text-[#e1e1e1]">
          {['about', 'experience', 'education', 'blog', 'projects', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`hover:text-cyan-500 relative
                ${activeSection === section ? "text-cyan-500" : ""}
                transition-all duration-300 ease-in-out pb-2
                before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-cyan-500
                before:transform before:scale-x-0 before:origin-left before:transition-transform before:duration-300 before:ease-in-out
                ${activeSection === section ? 'before:scale-x-100' : 'hover:before:scale-x-100'}`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
          <button onClick={handleTheme}>
            {theme === "dark" ? (
              <HiMoon className="-translate-y-1 text-2xl" />
            ) : (
              <HiSun className="-translate-y-1 text-2xl" />
            )}
          </button>
        </div>

        <button onClick={() => setNav(!nav)}>
          <CgMenuRightAlt className="hidden max-sm:block text-[#00040f] dark:text-[#e1e1e1] text-[32px]" />
        </button>
      </div>
      {nav && <Menu />}
    </section>
  );
};

export default Navbar;