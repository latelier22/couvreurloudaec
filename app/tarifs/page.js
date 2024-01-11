import React from "react";
import Navbar from "../NavBar";
import Footer from "../Footer";
import RootLayout from "../layout";
import Title from "../Title";
import ListeActionsGauche from "../ListeActionsGauche";

const Tarifs = () => {
  const pageTitle = "Les tarifs";
  const pageDescription =
    "Les tarifs des entrées, des formules anniversaires, Quand vous venez au Repaire des p’tits loups n’oubliez pas les chaussettes pour vos enfants.";
  ("");

  const listeTitle1 = "Les tarifs";
  const listeSubTitle1 = "Entrée:";
  const photo1 = {
    url: "crocodile.jpg",
    alt: "venez défier le crocodile sans vous dégonfler !!!",
  };
  const actions1 = [
    "POUR LES 1 à 3 ans : 5,90€",
    "POUR LES 3 à 14 ans : 7,90€",
    "ACCOMPAGNANT + 18 ans : GRATUIT",
    "SOIRÉE LUDIK : 20€"
  ];

  const listeTitle2 = "Autres informations";
  const listeSubTitle2 = "PETIT RAPPEL :";
    const photo2 = {
    url: "circuit-voiture.jpg",
    alt: "venez défier les champions automobiles sans sortie de route!!!",
  };
  const actions2 = [
    "Quand vous venez au Repaire des p’tits loups n’oubliez pas les chaussettes pour vos enfants.",
    "Pas de violence...",
    "Autres..."
  ];
  const paragraphe2 = "A très bientôt!"

  const mySubTitleColor = "text-teal-200";
  const backgroundColor = "bg-teal-500";

  return (
    <RootLayout pageTitle={pageTitle} pageDescription={pageDescription}>
      <Navbar />
      <Title
        myTitle={pageTitle}
        mySubTitle={""}
        backgroundColor={backgroundColor}
      />
<div className="bg-teal-200">
        
      
      <ListeActionsGauche
        actions={actions1}
        listeTitle={listeTitle1}
        listeSubTitle={listeSubTitle1}
        photo={photo1}
        gauche={false}
      />
        
      
</div>
<ListeActionsGauche
        actions={actions2}
        listeTitle={listeTitle2}
        listeSubTitle={listeSubTitle2}
        photo={photo2}
        gauche={true}
      >
        <div className="flex flex-col md:flex-row items-center md:items-end md:justify-center">
        <img
            alt="logo le repaire des ptit loup"
            className={
              "block h-40 w-auto object-cover rounded-lg"
            }
            src={`images/logo-le-repaire-des-petit-loups.png`}
          />
        <h2 className="text-xl font-bold mb-2 text-center">
        {paragraphe2}
        </h2>
       
          </div>
        
      
      </ListeActionsGauche>
      <Footer backgroundColor={backgroundColor} />
    </RootLayout>
  );
};

export default Tarifs;
