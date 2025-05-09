
import About from "@/components/About";
import dynamic from "next/dynamic";

// Import About with SSR disabled.
const Beats = dynamic(() => import("@/components/Beats"), { ssr: false });

// import Beats from "@/components/Beats";
import Container from "@/components/Container";
import EmblaCarousel from "@/components/EmblaCarouselSingle/EmblaCarousel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OurCollections from "@/components/OurCollections";
import Shop from "@/components/Shop";
import Slider from "@/components/Slider";
import Team from "@/components/Team";
import ViewOnOpenSea from "@/components/ViewOnOpenSea";
import {
  getAbout,
  getCategories,
  getCategory,
  getHero,
  getProducts,
  getSettings,
  getShops,
  getSlider,
  getTeams,
} from "@/lib/api";
import { getOpenSeaAssets } from "@/lib/openseaApi";
import Image from "next/image";
import BgImage from "@/components/BgImage";
import Head from "next/head";

export async function getServerSideProps() {
  try {
    const hero = await getHero();
    const settings = await getSettings();
    const about = await getAbout();
    const slider = await getSlider();
    const category = await getCategory();
    const categories = await getCategories();
    const team = await getTeams();
    const products = await getProducts();
    const shopProducts = await getShops();

    return {
      props: {
        hero,
        settings,
        about,
        slider,
        category,
        team,
        categories,
        products,
        shopProducts,
      },
    };
  } catch (error) {
    return {
      props: {
        settings: null,
        hero: null,
        about: null,
        slider: null,
        category: null,
        team: null,
        categories: null,
        products: null,
        shopProducts: null,
      },
    };
  }
}

export default function Home({
  settings,
  hero,
  about,
  slider,
  category,
  team,
  categories,
  products,
  shopProducts,
}) {
  const OPTIONS = { loop: true };
  const autoScrollLeft = { playOnInit: true, interval: 8000, speed: -1 };
  const slides = Array.from({ length: 22 }, (_, i) => {
    const item = slider?.data[i % slider?.data?.length];
    return {
      images: [item?.icon, item?.image],
    };
  });

  // console.log(slider, "slider");

  const meta = settings?.meta_tags?.[0] || {};
  // console.log(settings, "settings");

  return (
    <main>
      <Head>
        {/* page title */}
        {meta.meta_title && <title>{meta.meta_title}</title>}

        {/* standard meta tags */}
        {meta.meta_description && (
          <meta name="description" content={meta.meta_description} />
        )}
        {meta.meta_keywords && (
          <meta name="keywords" content={meta.meta_keywords} />
        )}

        {/* favicon / touch icon */}
        {/* {settings?.main?.favicon && (
          <link rel="icon" href={settings.main.favicon} />
        )} */}
        {settings?.main?.image && (
          <link rel="apple-touch-icon" href={settings.main.image} />
        )}

        {/* you can also add Open Graph / Twitter tags here if you like */}
        {/* e.g.
          <meta property="og:title" content={meta.meta_title} />
          <meta property="og:description" content={meta.meta_description} />
          <meta property="og:image" content={hero.hero.icon} />
        */}
      </Head>
      <div
        className="relative bg-no-repeat bg-cover bg-bottom min-h-screen p-0"
        style={{ backgroundImage: `url(${hero.hero.background})` }}
      >
        <Container>
          <Header props={settings} />
        </Container>
        <div className="z-10">
          <Slider slidesData={hero.slider} />
        </div>
        <About props={hero.hero} />
        {/* <div className="absolute hidden md:flex inset-0  z-[9999]  items-center justify-center pt-[120px] xxl:pt-[100px]">
          <Image
            src={hero.hero.icon}
            alt="Cocky"
            width={3300}
            height={1900}
            quality={100}
            className="h-[2000px] xxl:h-[2120px]"
          />
        </div> */}
        <div>
          {/* For tablet and larger */}
          <div className="absolute hidden md:flex inset-0 z-[9999] pointer-events-none items-center justify-center pt-[80px] xxl:pt-[100px]">
          <Image
              src={hero.hero.icon}
              alt="Cocky"
              width={7300}
              height={900}
              quality={100}
              className="h-[900px] object-cover md:h-[1700px] md:w-auto xxl:h-[2120px]"
            />
          </div>

          {/* For mobile and smaller devices */}
          <div className="absolute flex md:hidden inset-0 z-[9999] items-center justify-center pt-[120px]">
            <Image
              src={hero.hero.thumb_icon}
              alt="Cocky Thumbnail"
              width={600}
              height={700}
              quality={100}
              layout="responsive"
              className="!h-[570px]  object-cover"
            />
          </div>
        </div>
      </div>

      <Beats props={about.data} />
      <EmblaCarousel
        slides={slides}
        options={OPTIONS}
        autoScrollOptions={autoScrollLeft}
      />

      <OurCollections
        products={products}
        categories={categories}
        collectionCharacters={category}
      />
      <EmblaCarousel
        slides={slides}
        options={OPTIONS}
        autoScrollOptions={autoScrollLeft}
      />
      <ViewOnOpenSea collectionCharacters={category} />
      <BgImage />

      <Shop shopProducts={shopProducts} collectionCharacters={category} />
      <Team teamData={team} />
      <Footer props={settings} />
    </main>
  );
}
