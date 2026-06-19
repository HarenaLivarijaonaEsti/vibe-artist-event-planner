import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./sections/Services";

function App() {
  return (
    <div className="min-h-screen text-base-content relative overflow-hidden">
      {/* background layer */}
      <div className="absolute inset-0 bg-[url('/src/assets/images/dots.svg')] bg-repeat opacity-70 pointer-events-none" />

      {/* content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <Footer />
      </div>
    </div>
  );
}

export default App;
