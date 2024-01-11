import Navbar from "../NavBar";
import Footer from "../Footer";
import RootLayout from "../layout";
import Title from "../Title";

const Contact = () => {
  const pageTitle = 'Contact';
  const pageDescription = 'Restons en contact, telephone, email, réseaux sociaux';

  const backgroundColor = 'bg-neutral-500'

  return (
    <RootLayout pageTitle={pageTitle} pageDescription={pageDescription}>
      <Navbar />
      <Title myTitle={pageTitle} mySubTitle={pageDescription} backgroundColor={backgroundColor}/>
      <Footer backgroundColor={backgroundColor}/>
    </RootLayout>
  );
};

export default Contact;
