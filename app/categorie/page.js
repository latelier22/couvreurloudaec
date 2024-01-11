// MyPage.js
import { Suspense } from "react";
import GetTaxons from "../API/GetTaxons";
import GetTaxonsImages from "../API/GetTaxonsImages";
import getTaxonImage from "../API/GetTaxonImage";
import { FILTER_SETS } from "../API";

import Navbar from "../NavBar";
import Footer from "../Footer";
import RootLayout from "../layout";
import Title from "../Title";
import Cards from "../Cards";
import MyModal from "../MyModal";

const PLACEHOLDER_IMAGE_URL = "https://via.placeholder.com/150";
const API_URL_BASE = "http://sylius.latelier22.fr";

async function Taxons() {
  const getTaxons = await GetTaxons();
  const taxonsImages = await GetTaxonsImages();

  // Mettre à jour chaque taxon avec la liste d'images correspondantes ou un tableau vide
  const updatedTaxons = await Promise.all(
    getTaxons.map(async (taxon) => {
      const matchingImages = taxonsImages.filter(
        (image) => image.owner === taxon["@id"]
      );

      const imagesUrl = await Promise.all(
        matchingImages.map(async (image) => {
          const imageUrl = await getTaxonImage(image.id, FILTER_SETS.sylius_large.filter_size);
          return imageUrl;
        })
      );

      return {
        ...taxon,
        images: matchingImages || [], // Tableau vide si aucune correspondance
        imagesUrl,
      };
    })
  );

  const cards = updatedTaxons.map((taxon) => {
    const link = `categorie/${encodeURIComponent(taxon.slug)}`;
    const url = taxon.imagesUrl[0]
      ? `${taxon.imagesUrl[0]}`
      : PLACEHOLDER_IMAGE_URL;

    return {
      title: taxon.name,
      text: taxon.description, // Ajoutez la propriété appropriée du taxon ici
      button: "COMMANDEZ !",
      buttonColor: "bg-sky-500", // Changez la couleur du bouton selon vos besoins
      link,
      url,
      alt: taxon.name,
    };
  });

  const pageTitle = "Boutique Sylius";
  const pageDescription =
    "A venir, tous les jeux et jouets pour petits et grands disponibles à la vente en ligne, et toujours au repaire des p'tits loups";

  const backgroundColor = "bg-teal-500";

  return (
    <Suspense>
      <RootLayout pageTitle={pageTitle} pageDescription={pageDescription}>
        <Navbar />
        <Title
          myTitle={pageTitle}
          mySubTitle={pageDescription}
          backgroundColor={backgroundColor}
        />

        <div className="bg-teal-200">
          <Cards cards={cards} buttonColor={backgroundColor} syliusCard={true} />
        </div>

        {/* <MyModal /> */}

        <Footer backgroundColor={backgroundColor} />
      </RootLayout>
    </Suspense>
  );
}

export default Taxons;
