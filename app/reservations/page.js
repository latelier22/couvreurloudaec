import React from "react";
import Navbar from "../NavBar";
import Footer from "../Footer";
import HeaderSimple from "../headerSimple";
import MyLightBox from "../MyLightBox";
import RootLayout from "../layout";
import Title from "../Title";
import ListeActionsGauche from "../ListeActionsGauche";

const Reservation = () => {
  const pageTitle = "Pensez à réserver!";
  const pageDescription =
    "Réservez dès maintenant votre journée inoubliable, par mail, téléphone, ou directement sur cette page dédiée :";

  const listeTitle = "Réservez dès maintenant votre journée inoubliable";
  const listeSubTitle = "Comment réserver?";
  const actions = ["Email ", "téléphone ", "En ligne "];

  const photo = {
    url: "reservation-agenda.png",
    alt: "agenda reservation anniversaire",
  };

  const backgroundColor = "bg-orange-500";

  return (
    <RootLayout pageTitle={pageTitle} pageDescription={pageDescription}>
      <Navbar />
      <Title
        myTitle={pageTitle}
        mySubTitle={""}
        backgroundColor={backgroundColor}
      />
      <div className="bg-orange-200">
        <ListeActionsGauche
          actions={actions}
          listeTitle={listeTitle}
          listeSubTitle={listeSubTitle}
          photo={photo}
          gauche={false}
        />
      </div>
      <Footer backgroundColor={backgroundColor} />
    </RootLayout>
  );
};

export default Reservation;
