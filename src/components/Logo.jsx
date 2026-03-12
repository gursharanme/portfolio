import { Link } from "react-router-dom";
import SlideupText from "./SlideupText";

const Logo = () => {
  return (
    <>
      <SlideupText
        href={"/"}
        className={"text-3xl md:text-4xl text-white/80 hover:text-lime-yellow"}
        text={"Gurshrn"}
      />
    </>
  );
};

export default Logo;
