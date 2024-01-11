"use client";
import { useEffect } from "react";

const Photos = ({photos}) => {
  useEffect(() => {
    const init = async () => {
      const { Tooltip, initTE } = await import("tw-elements");
      initTE({ Tooltip });
    };
    init();
  }, []);

  

  return (
    <header>
     
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

export default Photos;
