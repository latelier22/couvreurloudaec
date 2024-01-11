"use client";
import { useEffect } from "react";

const ListeActions = ({ actions, listeTitle, listeSubTitle, photo }) => {
  useEffect(() => {
    const init = async () => {
      const { Tooltip, initTE } = await import("tw-elements");
      initTE({ Tooltip });
    };
    init();
  }, []);

  return (
    < div className=" container mx-auto px-5 py-2 lg:px-32 lg:pt-12 animate-slideRight">
    <div className="flex flex-col items-center">

   
    <div className=" flex flex-col lg:flex-row align-middle">
        <img
          alt={photo.alt}
          className="block h-full w-full rounded-lg object-cover object-center"
          src={`images/${photo.url}`}
        />
      <section className="container mx-auto mt-8 p-4">
        <h1 className="text-4xl font-bold mb-4">{listeTitle}</h1>
        <h2 className="text-2xl font-bold mb-2">{listeSubTitle}</h2>
        <ul className="list-disc ml-8">
          {actions.map((action, index) => (
            <li key={index}>{action}</li>
          ))}
        </ul>
      </section>
    </div>
    </div>
    </div>
  );
};

export default ListeActions;
