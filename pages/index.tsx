import Footer from "./components/layout/footer";
import { Header } from "./components/layout/header";
import HeaderContent from "./section/header-content";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeaderContent />
      </main>
      <Footer />
    </>
  );
}
