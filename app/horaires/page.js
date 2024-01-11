import React from "react";
import Navbar from "../NavBar";
import Footer from "../Footer";
import RootLayout from "../layout";
import Title from "../Title";
import ListeActionsGauche from "../ListeActionsGauche";

const Horaires = () => {

  const pageTitle = "Horaires";
  const pageDescription =
    "Les horaires d’ouverture Périodes scolaires mercredi et samedi et dimanche de 14h à 19h Vacances scolaires du lundi au samedi de 10h à 19h le dimanche de 14h à 19h Vacances d été :lundi, mardi, jeudi, vendredi, samedi et dimanche de 14h à 19h mercredi de 10h à 19h";

    const listeTitle = "Les horaires d’ouverture"
    const listeSubTitle = ""
    const photo = { url: "aire-de-jeu.jpg", alt: "de nombreuses activites pour les petits et les grands" }
    const actions = [
      "Périodes scolaires : mercredi et samedi et dimanche de 14h à 19h",
      "Vacances scolaires : du lundi au samedi de 10h à 19h le dimanche de 14h à 19h",
      "Vacances d’été : lundi, mardi, jeudi, vendredi, samedi et dimanche de 14h à 19h mercredi de 10h à 19h",
    ];

    const backgroundColor ="bg-amber-600";
    const mySubTitleColor ="text-amber-200";


  return (
    <RootLayout pageTitle={pageTitle} pageDescription={pageDescription}>
      <Navbar />

      <Title
        myTitle={pageTitle}
        mySubTitle={""}
        backgroundColor={backgroundColor}
      />

      <ListeActionsGauche actions={actions} listeTitle={listeTitle} listeSubTitle={listeSubTitle} photo={photo} gauche={true}/>

      <Footer backgroundColor={backgroundColor}/>
    </RootLayout>
  );
};

export default Horaires;
