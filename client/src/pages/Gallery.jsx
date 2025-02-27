import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import galleryHero from "../assets/Gallery/galleryHero.png";
// import galleryOne from "../assets/Gallery/galleryOne.png";
// import galleryTwo from "../assets/Gallery/galleryTwo.png";
// import galleryThree from "../assets/Gallery/galleryThree.png";
// import galleryFour from "../assets/Gallery/galleryFour.png";
// import galleryFive from "../assets/Gallery/galleryFive.png";
// import gallerySix from "../assets/Gallery/gallerySix.png";
// import gallerySeven from "../assets/Gallery/gallerySeven.png";
// import galleryEight from "../assets/Gallery/galleryEight.png";
// import galleryNine from "../assets/Gallery/galleryNine.png";
// import galleryTen from "../assets/Gallery/galleryTen.png";
// import gallery1 from "../assets/Gallery/gallery1.png";
import GallleryBg from "../assets/background/GallleryBg.png";
import GalleryGroup from "../assets/Gallery/GalleryGroup.png";

function Gallery() {
  return (
    <>
      <Navbar />
      <div
        className="bg-center bg- bg-cover items-center justify-center flex flex-col"
        style={{ backgroundImage: `url(${GallleryBg})` }}
      >
        <section
          className="h-[550px] my-12 w-[1360px] bg-cover bg-center rounded-xl"
          style={{ backgroundImage: `url(${galleryHero})` }}
        >
          <div className="py-2 w-[460px] px-5 text-white border flex flex-col gap-2 rounded-xl bg-black/20 border-slate-400 mt-[210px] ml-[70px] backdrop-blur-md">
            <span className="font-trap text-3xl font-semibold ">
              Our Gallery
            </span>
            <p className="font-sans text-2xl ">
              Capturing Moments, Crafting Memories Explore Our Event Creations
            </p>
          </div>
        </section>
        <section className="mt-5 pb-40">
          {/* <img src={gallery1} />
          <img src={galleryOne} />
          <img src={galleryTwo} />
          <img src={galleryThree} />
          <img src={galleryFour} />
          <img src={galleryFive} />
          <img src={gallerySix} />
          <img src={gallerySeven} />
          <img src={galleryEight} />
          <img src={galleryNine} />
          <img src={galleryTen} /> */}
          <img src={GalleryGroup} />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Gallery;
