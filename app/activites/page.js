import React from "react";
import Navbar from "../NavBar";
import Footer from "../Footer";
import RootLayout from "../layout";
import HeaderSimple from "../headerSimple";
import Title from "../Title";
import Cards from "../Cards";
import ListeActions from "../ListeActions";

const Entretien = () => {
  const pageTitle = "Activités";
  const pageDescription =
    "Parc, anniversaires, soirées jeu, courses de mini voitures...";

    const listeTitle = "Activites proposées"
    const listeSubTitle = "et la liste est encore longue !!!!"
    const photo = { url: "activites-logo.jpg", alt: "de nombreuses activites pour les petits et les grands" }
  const actions = [
    "Parc",
    "Championnat de voitures de courses miniatures radiocomandées",
    "Soirées jeu",
    "Réception anniversaires",
    "Initiation aux jeux...",
  ];

// Déclarer les photos dans un tableau d'objets
const photos = [
  { url: "air-jeu-tobogant.jpg", alt: "aire de jeu tobogant" },
  { url: "jeu-societe.jpg", alt: "jeu de sociétés, cartes magic" },
  { url: "circuit-voiture.jpg", alt: "circuit de voitures miniatures" },
  { url: "table-anniv.jpg", alt: "table anniversaire" },
];

const cards = [
  {
    title: "Le repaire des p’tits loups",
    text: "des structures gonflables, une structure tubulaire à étage avec divers jeux à l’intérieur, un trampoline, un jorkyball pour les adeptes de foot, du baby-foot, du ping pong, du hockey sur table, un dance floor.",
    button: "Découvrir", buttonColor:'bg-sky-500',
    url: "air-jeu-tobogant.jpg", alt: "aire de jeu tobogant"
  },
  {
    title: "TABLE DRESSEE",
    text: "Cartes Magic, le deuxième jeu de carte le plus popolulaire au monde",
    button: "Découvrir", buttonColor:'bg-orange-500',
    url: "jeu-societe.jpg", alt: "jeu de sociétés, cartes magic"
  },
  {
    title: "TABLE COMPLETE",
    text: "Cartes Magic, le deuxième jeu de carte le plus popolulaire au monde",
    button: "Découvrir", buttonColor:'bg-yellow-400',
    url: "circuit-voiture.jpg", alt: "circuit de voitures miniatures"
  },
  {
    title: "TABLE COMPLETE",
    text: "Cartes Magic, le deuxième jeu de carte le plus popolulaire au monde",
    button: "Découvrir", buttonColor:'bg-primary-700',
    url: "table-anniv.jpg", alt: "table anniversaire",
  },
];



const backgroundColor = "bg-fuchsia-700";
const mySubTitleColor = "text-fucshia-300"

  return (
    <RootLayout pageTitle={pageTitle} pageDescription={pageDescription}>
      <Navbar />
      <Title myTitle={pageTitle} mySubTitle={pageDescription} backgroundColor={backgroundColor} mySubTitleColor={mySubTitleColor}/>

  {/* <Cards photos={photos}/> */}
  <div className="bg-fuchsia-200">
        <Cards cards={cards} buttonColor={backgroundColor} />
      </div>

  <ListeActions actions={actions} listeTitle={listeTitle} listeSubTitle={listeSubTitle} photo={photo}/>

      <Footer backgroundColor={backgroundColor}/>
    </RootLayout>
  );
};

export default Entretien;
