import React from "react";
import Navbar from "../NavBar";
import Footer from "../Footer";
import RootLayout from "../layout";
import dynamic from "next/dynamic";
import Title from "../Title";
import Cards from "../Cards";
import Card from "../Card";
import getTaxons from "../API/GetTaxons";


const Reparation = () => {
  const pageTitle = "Boutique";
  const pageDescription =
    "Découvrez tous les jeux et jouets pour petits et grands...";


// Déclarer les photos dans un tableau d'objets
const photos = [
  {  },
 
];


const cards = [
  { title: "VOITURE COMMANDES", text: "Acheter votre véhicule pour faire des balades avec ou organiser des courses entre ami(e)s.", button : "COMMANDEZ !" , buttonColor:'bg-sky-500', link:"https://dev-54ta5gq-tz7gps24d2hqk.fr-3.platformsh.site/fr_FR/taxons/vehicules-radio-commandes",
  url: "voiture-commande.jpg", alt: "Acheter votre véhicule pour faire des balades avec ou organiser des courses entre ami(e)s."},

  { title: "JEUX EDUCATIFS ET JEUX SPECIALISES", text: "Apprendre en s'ammusant", button : "COMMANDEZ !", buttonColor:'bg-orange-500' , link:"https://dev-54ta5gq-tz7gps24d2hqk.fr-3.platformsh.site/fr_FR/taxons/vehicules-radio-commandes",
  url: "jeux-pedagogiques-pour-les-ecoles.jpg", alt: "Apprendre en s'ammusant"},

  { title: "CARTES DE JEU", text: "Cartes Magic, le deuxième jeu de carte le plus popolulaire au monde", button : "COMMANDEZ !" , buttonColor:'bg-primary-700', link:"https://dev-54ta5gq-tz7gps24d2hqk.fr-3.platformsh.site/fr_FR/taxons/vehicules-radio-commandes",
  url: "carte-jeux.jpg", alt: "Cartes Magic, le deuxième jeu de carte le plus popolulaire au monde"},

  { title: "IDEES CADEAUX", text: "Faîtes le plein d'idées cadeaux", button : "COMMANDEZ !" , buttonColor:'bg-primary-700', link:"https://dev-54ta5gq-tz7gps24d2hqk.fr-3.platformsh.site/fr_FR/taxons/cadeaux",
  url: "carte-jeux.jpg", alt: "Cartes Magic, le deuxième jeu de carte le plus popolulaire au monde"},
 
];

  

  const backgroundColor = 'bg-teal-500'

  return (
    <RootLayout pageTitle={pageTitle} pageDescription={pageDescription}>
      <Navbar />
      <Title myTitle={pageTitle} mySubTitle={pageDescription} backgroundColor={backgroundColor}/>
      

      <div className="bg-teal-200">
        <Cards cards={cards} buttonColor={backgroundColor} />
      </div>

      <Footer backgroundColor={backgroundColor} />
    </RootLayout>
  );
};

export default Reparation;
