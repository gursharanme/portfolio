import { useEffect, useState } from "react";
import Logo from "../components/Logo";
import PrimaryBtn from "../components/PrimaryBtn";
import Icon from "../components/Icon";
import { AnimatePresence, easeInOut, motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import SlideupText from "../components/SlideupText";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navLinks = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Work",
      url: "/#work",
    },
    {
      title: "Services",
      url: "/#services",
    },
    {
      title: "About",
      url: "/#about",
    },
    {
      title: "Contact",
      url: "/#contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.3, ease: easeInOut }}
        className={`sticky top-0 left-0 z-990 w-full ${scrolled ? "bg-[#41443A]/10 backdrop-blur-xl" : "bg-[#41443A]"} transition-colors duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between section-padding-x py-5 pt-6  md:py-5  ">
          <Logo />
          <div className="flex items-center gap-4">
            <PrimaryBtn
              ariaLabel={"Start a project"}
              onClick={() => navigate("/#contact")}
              title={"Start a project"}
              className="hidden sm:block"
            />

            {/* menu open button */}
            <Icon
              ariaLabel={"Open Menu"}
              onClick={() => setIsOpen(true)}
              path={"M3.75 9h16.5m-16.5 6.75h16.5"}
              className={"-mt-1.5 md:-mt-1 size-8 md:size-10"}
            />
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <aside
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
            className="fixed inset-0 bg-black/60 top-0 left-0 z-999"
          >
            <motion.div
              initial={{ opacity: 0, x: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: 24, filter: "blur(8px)" }}
              transition={{ duration: 0.3, ease: easeInOut }}
              className="absolute right-0 top-0 w-full min-h-dvh sm:w-4/5 md:w-1/2 lg:w-1/3 h-full bg-[#41443A] section-padding-x p-6 md:py-8 overflow-y-auto flex flex-col gap-16"
            >
              <div className="flex items-center justify-between">
                <h3 className="uppercase text-white/60 text-xl">Navigation</h3>
                <Icon
                  ariaLabel={"Close Menu"}
                  onClick={() => setIsOpen(false)}
                  path={"M6 18 18 6M6 6l12 12"}
                  className={"size-8 md:size-10"}
                />
              </div>

              <nav>
                <ul className="flex flex-col gap-1 uppercase text-6xl font-medium">
                  {navLinks.map((link, id) => (
                    <li key={id}>
                      <SlideupText
                        onClick={() => setIsOpen(false)}
                        href={link.url}
                        className="text-white hover:text-lime-yellow transition-colors duration-300 ease-in-out"
                        text={link.title}
                      />
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-auto">
                <PrimaryBtn
                  ariaLabel={"Start a project"}
                  onClick={() => {
                    navigate("/#contact");
                    setIsOpen(false);
                  }}
                  title={"Start a Project"}
                  className="w-full text-xl md:text-2xl! py-4! pb-3.5! font-semibold"
                />
              </div>
            </motion.div>
          </aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
