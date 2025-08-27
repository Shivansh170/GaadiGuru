import hero from "../assets/hero_image.png";
import Searchbar from "./Searchbar";
export default function Hero() {
  return (
    <>
      <section className="w-full h-[80vh] lg:h-[130vh] relative">
        <img src={hero} alt="hero_image" className="w-full h-[100%]" />
        <Searchbar />
      </section>
    </>
  );
}
