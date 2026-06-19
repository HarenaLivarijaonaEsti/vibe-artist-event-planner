import { CalendarDays } from "lucide-react";
import heroImage from "../assets/images/hero-event.jpg";

export default function Hero() {
  return (
    <section id="home" className="hero min-h-[60vh] bg-transparent">
      <div className="hero-content w-full max-w-7xl mx-auto flex-col lg:flex-row-reverse gap-10 px-4">
        {/* Image */}
        <img
          src={heroImage}
          alt="Vibe Event"
          className="w-full max-w-sm lg:max-w-md rounded-2xl shadow-2xl"
        />

        {/* Texte */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl font-bold">
            Créez des
            <span className="text-primary"> événements mémorables</span>
          </h1>

          <p className="py-6 text-lg">
            Organisation d'événements sur mesure pour tous types d'occasions :
            conférences, anniversaires, mariages et événements d'entreprise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="https://calendly.com/miora_assistanteadministratif"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <CalendarDays size={18} />
              Réserver maintenant
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
