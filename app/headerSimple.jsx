"use client";
import { useEffect } from "react";

const HeaderSimple = () => {
  useEffect(() => {
    const init = async () => {
      const { Tooltip, initTE } = await import("tw-elements");
      initTE({ Tooltip });
    };
    init();
  }, []);

  // Déclarer les photos dans un tableau d'objets
  const photos = [
    { url: "photo-toit1.png", alt: "gallery" },
    { url: "photo-fuite1.png", alt: "gallery" },
    { url: "photo-fuite2.png", alt: "gallery" },
    { url: "photo-maconnerie1.png", alt: "gallery" },
    { url: "photo-maconnerie2.png", alt: "gallery" },
    { url: "photo-maconnerie3.png", alt: "gallery" },
    { url: "photo-maconnerie4.png", alt: "gallery" },
  ];

  return (
    <header>
      <div className="bg-black px-6 py-6 text-center text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200">
        <div className="flex flex-col  lg:flex-row first-letter:lg:justify-around  justify-center items-center">
        <div className="hidden md:block">
          <img src="logo-sans-fond.png" className="rounded-full w-10  md:w-40 lg:w-96 h-auto" alt="" />
        </div>
        
        <div className="flex-col justify-center">
        <h1 className="mb-6 text-white  text-5xl font-bold">
          PRO COUVREUR ET NETTOYAGE
        </h1>
        <h3 className="mb-8 text-orange-500 text-3xl font-bold">
          Loudéac et ses alentours
        </h3>
        <a
          className="inline-block rounded  bg-orange-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          data-te-ripple-init
          data-te-ripple-color="light"
          href="/contact"
          role="button"
        >
          Me contacter
        </a>
      </div></div>
      </div>



      <div>
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 animate-slideRight">
          <div className="-m-1 flex flex-wrap md:-m-2">
            {/* Utiliser une boucle pour générer les éléments d'image */}
            {photos.map((photo, index) => (
              <div key={index} className="flex justify-center sm:w-full md:w-1/2 lg:w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt={photo.alt}
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={`images/${photo.url}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSimple;
