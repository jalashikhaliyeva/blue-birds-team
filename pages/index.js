import About from "@/components/About";
import Beats from "@/components/Beats";
import Container from "@/components/Container";
import EmblaCarousel from "@/components/EmblaCarouselSingle/EmblaCarousel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OurCollections from "@/components/OurCollections";
import Slider from "@/components/Slider";
import Team from "@/components/Team";
import ViewOnOpenSea from "@/components/ViewOnOpenSea";

export default function Home({
  // Create 11 slides, each with an array of two images.
  slides = Array.from({ length: 21 }, () => ({
    images: ["/images/birds-heads/1.png", "/images/logo/logo2.png"],
  })),
}) {
  const OPTIONS = { loop: true };
  const autoScrollLeft = { playOnInit: true, interval: 8000, speed: -1 };

  return (
    <>
      <div className="relative bg-[url('/images/bg/illustration.jpg')] bg-no-repeat bg-cover bg-bottom min-h-screen">
        <Container>
          <Header />
        </Container>
        <div className="z-10">
          <Slider />
        </div>

        <Container>
          <About />
        </Container>

        {/* Absolutely position the image and set a high z-index via inline style */}
        <div
          className="absolute hidden md:flex inset-0  items-center justify-center pt-[120px] xxl:pt-[100px]"
          style={{ zIndex: 9999 }}
        >
          <img
            src="/images/team-birds/Cocky.png"
            alt="Cocky"
            className="h-[1899px] xxl:h-[1900px]"
          />
        </div>
      </div>

      <Beats />
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
      <Team />
      <Footer />
    </>
  );
}
