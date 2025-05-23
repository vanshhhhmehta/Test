import Image from "next/image";

import HeroSection from "../../components/HeroSection";
import EventsSection from "../../components/EventsSection";
import Category from "../../components/categories";
import Testimonies from "../../components/testimonals";
import MovieHero from "../../components/FDheroSection";

export default function Home() {
  return (
    <div>
      <HeroSection/>
    <EventsSection/>
    <Category />
    <MovieHero />
    <Testimonies/>
    </div>
  );
}
