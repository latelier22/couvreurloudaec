import React from 'react';
import Link from 'next/link';
import RootLayout from './layout';
import Navbar from './NavBar';
import HeaderSimple from './headerSimple';
import Footer from './Footer';
import Image from './Image';
import Title from './Title';


const Home = () => {
  // Dynamic metadata for the home page
  const pageTitle = 'Accueil';
  const pageDescription = 'Bienvenue sur le site d&apos;Armor LudiK - repaire des p&apos;tits loups';

const myTitle = "REPAIRE DES P'TITS LOUPS"
const mySubTitle ="SALLE DE JEU POUR ENFANT"

const image = "accueil-tobogan.jpg"
const logo = "logo-le-repaire-des-petit-loups.png"

  const backgroundColor ="bg-orange-500";


  return (
    <RootLayout pageTitle={pageTitle} pageDescription={pageDescription}>
      <Navbar />
      <Title myTitle={myTitle ==='' ? pageTitle : myTitle} mySubTitle={mySubTitle ==='' ? pageDescription : mySubTitle} backgroundColor={backgroundColor}/>
      <div style={{ position: 'relative' }}>
  <Image image={image} />
  <img
    src={`images/${logo}`}
    className="h-full md:h-2/3 w-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-bounceAndStabilize"
    alt="logo repaire des p'tits loups"
  />
</div>
      <Footer backgroundColor ={backgroundColor}/>
    </RootLayout>
  );
};

export default Home;
