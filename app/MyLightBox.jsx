// TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com 
"use client";
import { useEffect } from "react";

const MyLightBox = ({ images }) => {
  useEffect(() => {
    const init = async () => {
      const { Lightbox, initTE } = await import("tw-elements");
      initTE({ Lightbox });
    };
    init();
  }, []);

  return (

<div className="flex items-center justify-center ">
<div
  data-te-lightbox-init
  className="flex flex-col space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0 justify-between">
  <div className="flex h-full w-full flex-1 flex-col">
    <img
      src={images[0].src}
      data-te-img={images[0].src}
      alt={images[0].alt}
      className="mb-5 w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto" />
    <img
      src={images[1].src}
      data-te-img={images[1].src}
      alt={images[1].alt}
      className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto" />
  </div>
  <div className="flex h-full w-full flex-1 flex-col">
    <img
      src={images[2].src}
      data-te-img={images[2].src}
      alt={images[2].alt}
      className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto" />
  </div>
</div>
</div>
  );
};

export default MyLightBox;