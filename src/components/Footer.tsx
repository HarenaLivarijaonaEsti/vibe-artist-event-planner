import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-base-300 text-base-content mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-primary">
              Vibe Event
            </h2>
            <p className="mt-2 opacity-80">
              Votre partenaire pour des événements mémorables :
              mariages, conférences, team building et excursions.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-3">Navigation</h3>
            <ul className="space-y-2 opacity-80">
              <li><a href="#home">Accueil</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>

            <div className="space-y-2 opacity-80">
              <p className="flex items-center gap-2">
                <Mail size={16} /> vibeartisteventplanner@gmail.com
              </p>

              <p className="flex items-center gap-2">
                <Phone size={16} /> +261 34 73 992 37
              </p>

              <p className="flex items-center gap-2">
                <MapPin size={16} /> Antananarivo, Madagascar
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-base-content/20 pt-6 text-center text-sm opacity-70">
          © {new Date().getFullYear()} Vibe Event. Tous droits réservés.
        </div>

      </div>
    </footer>
  );
}