import React, { useState } from "react";
import PrimaryBtn from "../PrimaryBtn";
import SecondaryBtn from "../SecondaryBtn";
import { useNavigate } from "react-router-dom";
import Icon from "../Icon";

const Hero = () => {
  const navigate = useNavigate();
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="relative py-16 overflow-hidden section-padding-x">
      {/* gradient blobs */}
      <div className="absolute -top-40 -left-40 w-160 h-160 bg-[#CFF30B] opacity-1 blur-[220px] rounded-full -z-10 pointer-events-none"></div>
      <div className="absolute bottom-55 right-40 w-140 h-140 bg-[#CFF30B] opacity-2 blur-[210px] rounded-full -z-10 pointer-events-none"></div>
      <div className="absolute top-[45%] left-[35%] w-130 h-130 bg-[#CFF30B] opacity-5 blur-[230px] rounded-full -z-10 pointer-events-none"></div>
      <div className="absolute top-[25%] left-[10%] w-95 h-95 bg-[#CFF30B] opacity-3 blur-[200px] rounded-full -z-10 pointer-events-none"></div>
      <div className="absolute top-[60%] right-[12%] w-105 h-105 bg-[#CFF30B] opacity-2 blur-[210px] rounded-full -z-10 pointer-events-none"></div>

      {/* grain */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-soft-light bg-[url('/noise.jpg')] -z-10"></div>

      {/* content */}
      <div className="relative z-10 grid md:grid-cols-12 gap-12 items-center">
        {/* Text */}
        <div className="flex flex-col gap-3 md:gap-4 md:col-span-8">
          <span className="text-base uppercase font-light text-lime-yellow tracking-widest mb-2">
            Frontend Engineer
          </span>

          <h1 className="text-[clamp(50px,7vw,80px)] leading-[1.15em] md:leading-[1.05em] font-medium">
            Building High-Performance Web Interfaces
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
            Frontend Developer specializing in React, Tailwind CSS, and modern
            JavaScript, creating scalable, responsive, and user-focused web
            experiences.
          </p>

          <div className="flex flex-wrap items-center gap-5 md:gap-6 mt-4">
            <PrimaryBtn
              ariaLabel="Contact me"
              onClick={() => navigate("/#contact")}
              title="Let's Connect"
              className="font-medium"
            />

            <SecondaryBtn
              ariaLabel="View my work"
              onClick={() => navigate("/#work")}
              title="View Work"
              className="font-medium"
            />
          </div>
        </div>

        {/* Video */}
        <div className="w-full aspect-9/16 max-h-170 md:col-span-4 relative z-10">
          <video
            src="/videoplayback.mp4"
            className="w-full h-full object-cover rounded-2xl"
            playsInline
            loop
            autoPlay
            muted={isMuted}
            preload="metadata"
          />

          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div
              onClick={() => setIsMuted((p) => !p)}
              className="bg-onyx/60 backdrop-blur-xl p-3 rounded-full flex items-center justify-center absolute top-4 right-4 hover:scale-103 active:scale-95 cursor-pointer transition-all duration-300 ease-in-out"
            >
              <Icon
                ariaLabel={"Open Menu"}
                className={"size-6 md:size-8"}
                path={
                  isMuted
                    ? "M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                    : "M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
