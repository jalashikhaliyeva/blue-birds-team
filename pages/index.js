// import About from "@/components/About";
// import Beats from "@/components/Beats";
// import Container from "@/components/Container";
// import EmblaCarousel from "@/components/EmblaCarouselSingle/EmblaCarousel";
// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
// import OurCollections from "@/components/OurCollections";
// import Shop from "@/components/Shop";
// import Slider from "@/components/Slider";
// import Team from "@/components/Team";
// import ViewOnOpenSea from "@/components/ViewOnOpenSea";
// import {
//   getAbout,
//   getCategories,
//   getCategory,
//   getHero,
//   getProducts,
//   getSettings,
//   getShops,
//   getSlider,
//   getTeams,
// } from "@/lib/api";
// import { getOpenSeaAssets } from "@/lib/openseaApi";
// import Image from "next/image";

// export async function getServerSideProps() {
//   try {
//     const hero = await getHero();
//     const settings = await getSettings();
//     const about = await getAbout();
//     const slider = await getSlider();
//     const category = await getCategory();
//     const categories = await getCategories();
//     const team = await getTeams();
//     const products = await getProducts();
//     const shopProducts = await getShops();

//     return {
//       props: {
//         hero,
//         settings,
//         about,
//         slider,
//         category,
//         team,
//         categories,
//         products,
//         shopProducts,
//       },
//     };
//   } catch (error) {
//     return {
//       props: {
//         settings: null,
//         hero: null,
//         about: null,
//         slider: null,
//         category: null,
//         team: null,
//         categories: null,
//         products: null,
//         shopProducts: null,
//       },
//     };
//   }
// }

// export default function Home({
//   settings,
//   hero,
//   about,
//   slider,
//   category,
//   team,
//   categories,
//   products,
//   shopProducts,
// }) {
//   const OPTIONS = { loop: true };
//   const autoScrollLeft = { playOnInit: true, interval: 8000, speed: -1 };
//   const slides = Array.from({ length: 22 }, (_, i) => {
//     const item = slider.data[i % slider.data.length];
//     return {
//       images: [item.icon, item.image],
//     };
//   });

//   return (
//     <>
//       <div
//         className="relative bg-no-repeat bg-cover bg-bottom min-h-screen p-0"
//         style={{ backgroundImage: `url(${hero.hero.background})` }}
//       >
//         <Container>
//           <Header props={settings} />
//         </Container>
//         <div className="z-10">
//           <Slider slidesData={hero.slider} />
//         </div>
//         <About props={hero.hero} />
//         {/* <div className="absolute hidden md:flex inset-0  z-[9999]  items-center justify-center pt-[120px] xxl:pt-[100px]">
//           <Image
//             src={hero.hero.icon}
//             alt="Cocky"
//             width={3300}
//             height={1900}
//             quality={100}
//             className="h-[2000px] xxl:h-[2120px]"
//           />
//         </div> */}
//         <div className="absolute  hidden md:flex  inset-0 z-[9999] items-center justify-center pt-[120px] xxl:pt-[100px]">
//           <Image
//             src={hero.hero.icon}
//             alt="Cocky"
//             width={1300}
//             height={900}
//             quality={100}
       
//             className="h-[900px] object-cover md:h-[2000px] xxl:h-[2120px]" // adjust mobile size (300px) as needed
//           />
//         </div>
//       </div>

//       <Beats props={about.data} />
//       <EmblaCarousel
//         slides={slides}
//         options={OPTIONS}
//         autoScrollOptions={autoScrollLeft}
//       />

//       <OurCollections
//         products={products}
//         categories={categories}
//         collectionCharacters={category}
//       />
//       <EmblaCarousel
//         slides={slides}
//         options={OPTIONS}
//         autoScrollOptions={autoScrollLeft}
//       />

//       <ViewOnOpenSea collectionCharacters={category} />
//       <Shop shopProducts={shopProducts} collectionCharacters={category} />
//       <Team teamData={team} />
//       <Footer props={settings} />
//     </>
//   );
// }


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
        <div className="absolute flex  inset-0 z-[9999] items-center justify-center pt-[120px] xxl:pt-[100px]">
          <Image
            src={hero.hero.icon}
            alt="Cocky"
            width={1300}
            height={900}
            quality={100}
       
            className="h-[900px] object-cover md:h-[2000px] xxl:h-[2120px]" // adjust mobile size (300px) as needed
          />
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
      <Shop shopProducts={shopProducts} collectionCharacters={category} />
      <Team teamData={team} />
      <Footer props={settings} />
    </>
  );
}
