import React from 'react';
import Link from 'next/link';
import RootLayout from '../app/layout';
import Navbar from './NavBar';
import HeaderSimple from './headerSimple';
import Footer from './Footer';

const Home = () => {
  // Dynamic metadata for the home page
  const pageTitle = 'Accueil';
  const pageDescription = 'Bienvenue sur le site d&apos;Armor Ludik';

  // Liste globale des actions avec les liens vers les pages correspondantes
  const globalActions = [
    {
      label: 'Réparation des toitures, remplacement des tuiles, ardoises, tôles.',
      link: '/reparation',
    },
    {
      label: 'Entretien et nettoyage des toitures, murs, démoussage, suppression du vert des toitures, remplacement des tuiles, ardoises.',
      link: '/entretien',
    },
    {
      label: 'Intervention 7/7 J - 24/24h en cas d&apos;urgences ou fuites de votre toiture. Pose de bâche en urgence, mise hors d&apos;eau, remplacement des tuiles, ardoises.',
      link: '/fuite',
    },
    {
      label: 'Petits travaux de maçonnerie, mur en pierre, parpaings, brique, allée, pavés pierre, pavés autobloquant, petite dalle, terrasse.',
      link: '/travaux-divers',
    },
  ];

  return (
    <RootLayout pageTitle={pageTitle} pageDescription={pageDescription}>
      <Navbar />
      {/* <HeaderSimple /> */}
      
      <section className="container mx-auto mt-8 p-4 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Bienvenue chez PRO COUVERTURE LOUDEAC</h1>

        <p className="text-lg mb-4">
          Nous sommes fiers de vous offrir des services de couverture de haute qualité à Loudéac et ses environs. Avec une équipe d&apos;experts dévoués, nous nous engageons à fournir des solutions exceptionnelles pour répondre à vos besoins en matière de toiture.
        </p>

        <p className="text-lg mb-4">
          Que ce soit pour la <Link href="/reparation" className="text-blue-500">réparation</Link>, l&apos;<Link href="/entretien" className="text-blue-500">entretien</Link>, la gestion des <Link href="/fuite" className="text-blue-500">fuites de toit</Link> ou d&apos;autres <Link href="/travaux" className="text-blue-500">travaux divers de maçonnerie</Link>, nous sommes là pour vous offrir des services fiables et professionnels. Explorez nos différentes sections pour en savoir plus sur nos activités.
        </p>
      </section>

      <section className="container mx-auto mt-8 p-4 bg-gray-100">
        <h2 className="text-2xl font-bold mb-2">Liste Globale d&apos;Actions:</h2>
        <ul className="list-disc ml-8">
          {globalActions.map((action, index) => (
            <li key={index}>
              <Link href={action.link} className="hover:text-blue-500 hover:font-bold">
                {action.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </RootLayout>
  );
};

export default Home;
