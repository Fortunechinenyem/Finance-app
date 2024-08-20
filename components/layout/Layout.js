import Navbar from "./Navbar";
import Footer from "./Footer";
import Container from "./Container";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </>
  );
}
