import React from "react";
import Navbar from "../NavBar";
import Footer from "../Footer";
import HeaderSimple from "../headerSimple";
import RootLayout from "../layout";
import Cards from "../Cards";
import Title from "../Title";
import Photos from "../Photos";
import ListeActionsGauche from "../ListeActionsGauche";

const Fuite = () => {
  const pageTitle = "Réception d'anniversaires !";
  const pageDescription =
    "Découvrez toutes nos formules pour offrir à vos enfants une journée inoubliable !!!";

    const listeTitle = "ANNIVERSAIRE"
    const listeSubTitle = "Le repaire des p’tits loups est heureux d’acceuillir votre enfant et ses ami(e)s pour fêté son anniversaire dans un endroit reserver rien que pour vous."
    const photo = { url: "photo-anniversaire.jpg", alt: "de nombreuses activites pour les petits et les grands" }
    const actions = [
      "Le crénaux horaire pour l’anniversaire et de 14h à 17h ( l’emplacement doit être débarrassé à 17h). Dans toutes les formules le pack suivant pour 10 enfants (hôte compris): 9 cartons d’invitation, cadeau pour votre enfant. Un acompte de 30€ est demandé pour valider la réservation (paiment par CB ou éspaces). Plusieurs choix son disponibles :",
      "Merci de nous prévenir à chaque enfant supplémentaire. Toutes boissons ou nourritures personnelles pour adultes sont interdites.",
      
    ];

  // Déclarer les photos dans un tableau d'objets
  const photos = [
    { url: "table-nue.jpg", alt: "aire de jeu tobogant" },
    {
      url: "table-plus-bonbon-gateau.jpg",
      alt: "table anniversaire avec bonbon et gateau",
    },
    { url: "table-faite.jpg", alt: "table anniversaire faite" },
  ];

  const cards = [
    {
      title: "TABLE NUE",
      text: "Cartes Magic, le deuxième jeu de carte le plus popolulaire au monde",
      button: "DETAILS...",
      url: "table-nue.jpg",
      alt: "Cartes Magic, le deuxième jeu de carte le plus popolulaire au monde",
    },
    {
      title: "TABLE DRESSEE",
      text: "Cartes Magic, le deuxième jeu de carte le plus popolulaire au monde",
      button: "DETAILS...",
      url: "table-faite.jpg",
      alt: "table anniversaire faite",
    },
    {
      title: "TABLE COMPLETE",
      text: "Cartes Magic, le deuxième jeu de carte le plus popolulaire au monde",
      button: "DETAILS...",
      url: "carte-jeux.jpg",
      alt: "Cartes Magic, le deuxième jeu de carte le plus popolulaire au monde",
    },
    {
      title: "TABLE COMPLETE",
      text: "Cartes Magic, le deuxième jeu de carte le plus popolulaire au monde",
      button: "DETAILS...",
      url: "carte-jeux.jpg",
      alt: "Cartes Magic, le deuxième jeu de carte le plus popolulaire au monde",
    },
  ];

  const backgroundColor = "bg-fuchsia-700";

  return (
    <RootLayout pageTitle={pageTitle} pageDescription={pageDescription}>
      <Navbar />
      <Title
        myTitle={pageTitle}
        mySubTitle={pageDescription}
        backgroundColor={backgroundColor}
      />

<ListeActionsGauche actions={actions} listeTitle={listeTitle} listeSubTitle={listeSubTitle} photo={photo} gauche={false}/>


      <div className="bg-fuchsia-300">
        <Cards cards={cards} buttonColor={backgroundColor} />
      </div>

      <ListeActionsGauche actions={actions} listeTitle={listeTitle} listeSubTitle={listeSubTitle} photo={photo} gauche={true}/>
<ListeActionsGauche actions={actions} listeTitle={listeTitle} listeSubTitle={listeSubTitle} photo={photo} gauche={false}/>

      <Footer backgroundColor={backgroundColor} />
    </RootLayout>
  );
};

export default Fuite;
