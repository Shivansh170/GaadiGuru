import hero from "../assets/ChatGPT Image Aug 30, 2025, 10_19_10 PM.png";
import Searchbar from "./Searchbar";
export default function Hero() {
  return (
    <>
      <section className="w-full h-[80vh] lg:h-[100vh] relative">
        <img src={hero} alt="hero_image" className="w-full h-[100%]" />
        <Searchbar />
      </section>
    </>
  );
}
