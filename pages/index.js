import About from "@/components/About";
import Beats from "@/components/Beats";
import Container from "@/components/Container";
import EmblaCarousel from "@/components/EmblaCarouselSingle/EmblaCarousel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OurCollections from "@/components/OurCollections";
import Shop from "@/components/Shop";
import Slider from "@/components/Slider";
import Team from "@/components/Team";
import ViewOnOpenSea from "@/components/ViewOnOpenSea";
import { getAbout, getHero, getSettings, getSlider } from "@/lib/api";
import Image from "next/image";

export async function getServerSideProps() {
  try {
    const hero = await getHero();
    const settings = await getSettings();
    const about = await getAbout();
    const slider = await getSlider();
    return { props: { hero, settings, about, slider } };
  } catch (error) {
    return { props: { settings: null, hero: null, about: null, slider: null } };
  }
}

export default function Home({ settings, hero, about, slider }) {
  console.log(slider, "slider");

  const OPTIONS = { loop: true };
  const autoScrollLeft = { playOnInit: true, interval: 8000, speed: -1 };
  const slides = Array.from({ length: 22 }, (_, i) => {
    const item = slider.data[i % slider.data.length];
    return {
      images: [item.icon, item.image],
    };
  });

  return (
    <>
      <div
        className="relative bg-no-repeat bg-cover bg-bottom min-h-screen p-0"
        style={{ backgroundImage: `url(${hero.hero.background})` }}
      >
        <Container>
          <Header props={settings.main} />
        </Container>
        <div className="z-10">
          <Slider />
        </div>
        <About props={hero.hero} />
        <div className="absolute hidden md:flex inset-0 z-[9999]  items-center justify-center pt-[120px] xxl:pt-[100px]">
          <Image
            src={hero.hero.icon}
            alt="Cocky"
            width={1500}
            height={1900}
            className="h-[1900px] xxl:h-[1940px]"
          />
        </div>
      </div>

      <Beats props={about.data} />
      <EmblaCarousel
        slides={slides}
        options={OPTIONS}
        autoScrollOptions={autoScrollLeft}
      />

      <OurCollections />
      <EmblaCarousel
        slides={slides}
        options={OPTIONS}
        autoScrollOptions={autoScrollLeft}
      />

      <ViewOnOpenSea />
      <Shop />
      <Team />
      <Footer props={settings.main} />
    </>
  );
}
