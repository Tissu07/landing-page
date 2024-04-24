import Header from "@/components/header/Header.jsx";
import Projectpage from "./Pages/Project/page.jsx";
import Services from "./Pages/services/servicespage.jsx";
import "./globals.css";
export default function Home() {
  return (
    <main className="">
      <Header />
      <Projectpage />
      <Services />
    </main>
  );
}
