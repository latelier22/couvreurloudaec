"use client";
import { useEffect } from "react";

const Title = ({ myTitle, mySubTitle, backgroundColor, mySubTitleColor }) => {
  useEffect(() => {
    const init = async () => {
      const { Tooltip, initTE } = await import("tw-elements");
      initTE({ Tooltip });
    };
    init();
  }, []);

  return (
    <header>
      <div className={`${backgroundColor} text-center dark:bg-neutral-600 dark:text-neutral-200`}>
          <div className="flex-col flex">
            
          <h1 className=" text-white  mt-10 text-5xl font-bold" style={{ fontFamily: 'knicknack-font'}}>{myTitle}</h1>
            <h3 className={` text-neutral-300  mt-2 mb-10 text-3xl font-bold`} style={{ fontFamily: 'knicknack-font' }}>

              {mySubTitle}
            </h3>
            
          </div>
        </div>
    </header>
  );
};

export default Title;
